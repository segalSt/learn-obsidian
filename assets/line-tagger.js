/* line-tagger.js - "what is this line?" exercise with instant feedback.
   Usage: LineTagger.mount(element, { categories:[...], lines:[{text, cat, why}] })
   Each line shows its text in monospace and one button per category.
   Clicking a button marks the line right / wrong at once and shows the reason. */
(function () {
  function el(tag, attrs, text) { const e = document.createElement(tag); Object.assign(e, attrs || {}); if (text != null) e.textContent = text; return e; }
  function mount(root, cfg) {
    const style = el('style');
    style.textContent = `.ltag .ln{display:grid;grid-template-columns:2rem 1fr;gap:.2rem .6rem;padding:.45rem 0;border-bottom:1px solid var(--line)}
      .ltag .no{font-family:var(--mono);font-size:.75rem;color:var(--muted);padding-top:.2rem;text-align:right}
      .ltag pre{margin:0;padding:.25rem .5rem;white-space:pre-wrap;word-break:break-word}
      .ltag .opts{grid-column:2;display:flex;flex-wrap:wrap;gap:.3rem}
      .ltag .opts button{background:var(--card);color:var(--fg);border:1px solid var(--line);font-size:.78rem;padding:.2rem .55rem}
      .ltag .opts button.ok{background:var(--ok-soft);border-color:var(--ok);color:var(--ok)}
      .ltag .opts button.bad{background:var(--bad-soft);border-color:var(--bad);color:var(--bad)}
      .ltag .why{grid-column:2;font-family:var(--sans);font-size:.8rem;color:var(--muted)}
      .ltag .score{font-family:var(--sans);font-weight:600;margin-top:.8rem}`;
    root.appendChild(style); root.classList.add('ltag');
    let done = 0, right = 0;
    const score = el('div', { className: 'score' });
    cfg.lines.forEach((ln, i) => {
      const row = el('div', { className: 'ln' });
      row.appendChild(el('div', { className: 'no' }, String(i + 1)));
      row.appendChild(el('pre', {}, ln.text === '' ? ' ' : ln.text));
      const opts = el('div', { className: 'opts' });
      const why = el('div', { className: 'why' });
      const btns = cfg.categories.map(c => {
        const b = el('button', {}, c);
        b.onclick = () => {
          if (row.dataset.done) return; row.dataset.done = 1; done++;
          const ok = c === ln.cat; if (ok) right++;
          btns.forEach(x => { if (x.textContent === ln.cat) x.classList.add('ok'); });
          if (!ok) b.classList.add('bad');
          why.textContent = (ok ? 'Верно. ' : `Нет, это «${ln.cat}». `) + (ln.why || '');
          if (done === cfg.lines.length) score.textContent = `Итог: ${right} из ${cfg.lines.length}`;
        };
        opts.appendChild(b); return b;
      });
      row.append(opts, why); root.appendChild(row);
    });
    root.appendChild(score);
  }
  window.LineTagger = { mount };
})();
