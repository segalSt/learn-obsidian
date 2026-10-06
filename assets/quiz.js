/* quiz.js - multiple-choice quiz with immediate feedback.
   Usage: Quiz.mount(element, [{q, options:[...], answer:index, why}])
   Options are shuffled; write all options with the same word count so format gives no clue. */
(function () {
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function mount(root, questions) {
    const style = document.createElement('style');
    style.textContent = `.quiz .q{margin:1.2rem 0;font-family:var(--sans)}
      .quiz .q p{font-weight:600;margin:.2rem 0 .5rem}
      .quiz .opt{display:block;width:100%;text-align:left;margin:.3rem 0;background:var(--card);color:var(--fg);border:1px solid var(--line);font-family:var(--mono);font-size:.85rem}
      .quiz .opt.ok{background:var(--ok-soft);border-color:var(--ok)}
      .quiz .opt.bad{background:var(--bad-soft);border-color:var(--bad)}
      .quiz .score{font-family:var(--sans);font-weight:600;margin-top:1rem}`;
    root.appendChild(style); root.classList.add('quiz');
    let done = 0, right = 0;
    const score = document.createElement('div'); score.className = 'score';
    questions.forEach((qq, n) => {
      const box = document.createElement('div'); box.className = 'q';
      const p = document.createElement('p'); p.textContent = `${n + 1}. ${qq.q}`; box.appendChild(p);
      const fb = document.createElement('div'); fb.className = 'feedback';
      const order = shuffle(qq.options.map((t, i) => ({ t, i })));
      const btns = order.map(o => {
        const b = document.createElement('button'); b.className = 'opt'; b.textContent = o.t;
        b.onclick = () => {
          if (box.dataset.done) return; box.dataset.done = 1; done++;
          const ok = o.i === qq.answer; if (ok) right++;
          btns.forEach((x, k) => { if (order[k].i === qq.answer) x.classList.add('ok'); });
          if (!ok) b.classList.add('bad');
          fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
          fb.textContent = (ok ? 'Верно. ' : 'Нет. ') + qq.why;
          if (done === questions.length) score.textContent = `Итог: ${right} из ${questions.length}`;
        };
        box.appendChild(b); return b;
      });
      box.appendChild(fb); root.appendChild(box);
    });
    root.appendChild(score);
  }
  window.Quiz = { mount };
})();
