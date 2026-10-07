/* search-sim.js - tiny simulator of Obsidian search / graph-filter syntax.
   Supports: path:x  file:x  tag:x  content:x  [prop]  [prop:value]  -term  OR  (groups)  "quoted text"
   tag:x matches the tag x and its nested tags (x/...), never a nested part alone (Help: tag:#work does not find #myjob/work).
   Tags come from file.props.tags. content: and bare words search file.text (note body, no properties);
   without file.text, bare words match the path (old behaviour, used by lesson 0005).
   Usage: SearchSim.mount(element, { files:[{path, props, text}], tasks:[{prompt, expect:[paths]}], showProps:['type','tags'] }) */
(function () {
  function tokenize(q) {
    const out = []; let i = 0;
    while (i < q.length) {
      const c = q[i];
      if (/\s/.test(c)) { i++; continue; }
      if (c === '(' || c === ')') { out.push(c); i++; continue; }
      if (c === '-' && (q[i + 1] === '(')) { out.push('NOT'); i++; continue; }
      let neg = false;
      if (c === '-') { neg = true; i++; }
      let s = '';
      if (q[i] === '[') { const j = q.indexOf(']', i); s = q.slice(i, j < 0 ? q.length : j + 1); i = j < 0 ? q.length : j + 1; }
      else {
        while (i < q.length && !/[\s()]/.test(q[i])) {
          if (q[i] === '"') { const j = q.indexOf('"', i + 1); s += q.slice(i + 1, j < 0 ? q.length : j); i = j < 0 ? q.length : j + 1; }
          else { s += q[i]; i++; }
        }
      }
      if (!neg && s === 'OR') out.push('OR'); else out.push({ term: s, neg });
    }
    return out;
  }
  function tagsOf(file) { const t = (file.props || {}).tags; return (Array.isArray(t) ? t : t ? [t] : []).map(x => String(x).toLowerCase().replace(/^#/, '')); }
  function termFn(t) {
    const low = t.toLowerCase();
    let f;
    let m;
    if ((m = /^\[([^:\]]+)(?::([^\]]*))?\]$/.exec(t))) {
      const key = m[1].trim(), val = m[2] === undefined ? null : m[2].trim().toLowerCase();
      f = file => {
        const v = (file.props || {})[key];
        if (v === undefined) return false;
        if (val === null) return true;
        const arr = Array.isArray(v) ? v : [v];
        return arr.some(x => String(x).toLowerCase().includes(val));
      };
    } else if (low.startsWith('path:')) { const v = low.slice(5); f = file => file.path.toLowerCase().includes(v); }
    else if (low.startsWith('file:')) { const v = low.slice(5); f = file => file.path.split('/').pop().toLowerCase().includes(v); }
    else if (low.startsWith('tag:')) { const v = low.slice(4).replace(/^#/, ''); f = file => tagsOf(file).some(x => x === v || x.startsWith(v + '/')); }
    else if (low.startsWith('content:')) { const v = low.slice(8); f = file => (file.text || '').toLowerCase().includes(v); }
    else { f = file => (file.text !== undefined ? file.text : file.path).toLowerCase().includes(low); }
    return f;
  }
  function parse(tokens) {
    let p = 0;
    function expr() {
      let left = and();
      while (tokens[p] === 'OR') { p++; const r = and(); const l = left; left = f => l(f) || r(f); }
      return left;
    }
    function and() {
      const parts = [];
      while (p < tokens.length && tokens[p] !== 'OR' && tokens[p] !== ')') parts.push(unary());
      if (!parts.length) return () => true;
      return f => parts.every(x => x(f));
    }
    function unary() {
      const t = tokens[p];
      if (t === 'NOT') { p++; const a = atom(); return f => !a(f); }
      return atom();
    }
    function atom() {
      const t = tokens[p++];
      if (t === '(') { const e = expr(); if (tokens[p] === ')') p++; return e; }
      if (t && typeof t === 'object') { const fn = termFn(t.term); return t.neg ? (f => !fn(f)) : fn; }
      return () => true;
    }
    const e = expr();
    return e;
  }
  function run(query, files) {
    if (!query.trim()) return files.map(() => true);
    const fn = parse(tokenize(query));
    return files.map(fn);
  }
  function el(tag, attrs, text) { const e = document.createElement(tag); Object.assign(e, attrs || {}); if (text != null) e.textContent = text; return e; }

  function mount(root, cfg) {
    const files = cfg.files;
    root.classList.add('ssim');
    const style = el('style');
    style.textContent = `.ssim .files{font-family:var(--mono);font-size:.8rem;columns:2;column-gap:1.5rem;margin:.8rem 0;padding:0;list-style:none}
      .ssim .files li{word-break:break-all;padding:.05rem .3rem;border-radius:3px;break-inside:avoid;color:var(--muted);opacity:.45}
      .ssim .files li.on{opacity:1;color:var(--fg);background:var(--accent-soft)}
      .ssim .files li .pr{color:var(--accent);font-size:.72rem;margin-left:.4rem}
      .ssim .task{border-top:1px solid var(--line);padding:.8rem 0}
      .ssim .task .row{display:flex;gap:.5rem;margin-top:.4rem}
      .ssim .task .row input{flex:1}
      .ssim .count{font-family:var(--sans);font-size:.8rem;color:var(--muted)}
      .ssim .hint{font-family:var(--sans);font-size:.8rem;color:var(--muted);margin-top:.3rem}
      @media (max-width:600px){.ssim .files{columns:1}}`;
    root.appendChild(style);

    const playLabel = el('div', { className: 'count' }, cfg.label || 'Песочница: вводи фильтр, подсвечиваются файлы, которые останутся в графе.');
    const play = el('input', { type: 'text', placeholder: cfg.placeholder || 'например: -path:calculators/scaffold' });
    const count = el('div', { className: 'count' });
    const list = el('ul', { className: 'files' });
    const items = files.map(f => {
      const li = el('li', {}, f.path);
      if (f.props && f.props.layer) li.appendChild(el('span', { className: 'pr' }, 'layer:' + f.props.layer));
      (cfg.showProps || []).forEach(k => { const v = (f.props || {})[k]; if (v !== undefined) li.appendChild(el('span', { className: 'pr' }, k + ':' + (Array.isArray(v) ? v.join(', ') : v))); });
      list.appendChild(li); return li;
    });
    function show(q) {
      const res = run(q, files);
      res.forEach((on, i) => items[i].classList.toggle('on', on));
      count.textContent = `${res.filter(Boolean).length} из ${files.length} файлов`;
      return res;
    }
    play.addEventListener('input', () => show(play.value));
    root.append(playLabel, play, count, list);
    show('');

    function diagnose(q) {
      const notes = [];
      tokenize(q).forEach(tok => {
        if (!tok || typeof tok !== 'object') return;
        const s = tok.term, shown = (tok.neg ? '-' : '') + s;
        if (s.includes('\\')) notes.push(`«${shown}»: в Obsidian части пути разделяются через / (прямой слеш), не через \\.`);
        if (s.includes('*')) notes.push(`«${shown}»: звёздочка здесь не шаблон, она ищется как обычный символ. path: и так ищет любую часть пути — просто убери *.`);
        const hits = files.filter(termFn(s)).length;
        const tm = /^tag:#?(.+)$/i.exec(s);
        if (tm && hits === 0) {
          const v = tm[1].toLowerCase(), full = [...new Set(files.flatMap(tagsOf))].filter(x => x.endsWith('/' + v) || x.includes('/' + v + '/'));
          if (full.length) notes.push(`«${shown}»: тег «${v}» есть только как вложенный (${full.join(', ')}). tag: ищет от корня: напиши tag:${full[0]} или tag:${full[0].split('/')[0]}.`);
        }
        if (hits === 0) notes.push(`«${shown}»: под «${s.replace(/^-/, '')}» не подходит ни один файл — проверь опечатку или слеши.` + (tok.neg ? ' С минусом такое условие ничего не убирает.' : ' Без минуса такое условие убирает всё.'));
      });
      return notes;
    }
    function listLine(title, arr) {
      if (!arr.length) return null;
      const d = el('div'); d.style.marginTop = '.3rem';
      d.appendChild(el('strong', {}, `${title} (${arr.length}):`));
      const ul = el('ul'); ul.style.margin = '.2rem 0 0 1rem'; ul.style.padding = '0';
      arr.forEach(x => ul.appendChild(el('li', {}, x)));
      d.appendChild(ul); return d;
    }

    (cfg.tasks || []).forEach((t, n) => {
      const box = el('div', { className: 'task' });
      box.appendChild(el('div', {}, `${n + 1}. ${t.prompt}`));
      if (t.explain) { const ex = el('div', { className: 'hint' }, t.explain); ex.style.whiteSpace = 'pre-line'; box.appendChild(ex); }
      const row = el('div', { className: 'row' });
      const inp = el('input', { type: 'text', placeholder: 'твой фильтр' });
      const btn = el('button', {}, 'Проверить');
      const fb = el('div', { className: 'feedback' });
      row.append(inp, btn); box.append(row, fb);
      if (t.hint) { const h = el('div', { className: 'hint' }); const hb = el('button', { className: 'ghost' }, 'подсказка'); hb.style.fontSize = '.75rem'; hb.style.padding = '.1rem .5rem'; hb.onclick = () => { h.textContent = t.hint; }; box.append(hb, h); }
      function check() {
        const res = show(inp.value);
        const want = new Set(t.expect);
        const extra = files.filter((f, i) => res[i] && !want.has(f.path)).map(f => f.path);
        const miss = files.filter((f, i) => !res[i] && want.has(f.path)).map(f => f.path);
        fb.textContent = '';
        if (!extra.length && !miss.length) { fb.className = 'feedback ok'; fb.textContent = `Верно. Осталось ровно ${want.size} нужных файлов.`; return; }
        fb.className = 'feedback bad';
        fb.appendChild(el('div', {}, `Осталось ${res.filter(Boolean).length} файлов, нужно ${want.size}.`));
        const why = diagnose(inp.value);
        if (why.length) { const w = el('div'); w.style.marginTop = '.3rem'; why.forEach(x => w.appendChild(el('div', {}, '⚠ ' + x))); fb.appendChild(w); }
        [listLine('Должны исчезнуть, но остались', extra), listLine('Должны остаться, но исчезли', miss)].forEach(x => x && fb.appendChild(x));
      }
      btn.onclick = check; inp.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
      root.appendChild(box);
    });
  }
  window.SearchSim = { mount, run, tokenize };
})();
