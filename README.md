# atfm.github.io

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>atfm.github.io — структура проекта</title>
  <style>
    :root {
      --bg: #0f1419;
      --surface: #1a2332;
      --surface2: #243044;
      --text: #e8edf4;
      --muted: #8b9cb3;
      --accent: #5b9fd4;
      --accent2: #6bc9a8;
      --border: #2d3a4f;
      --radius: 12px;
      --font: "Segoe UI", system-ui, sans-serif;
      --mono: ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      line-height: 1.55;
      padding: 1.5rem 1.25rem 3rem;
    }
    .wrap { max-width: 720px; margin: 0 auto; }
    header { margin-bottom: 1.75rem; }
    h1 {
      font-size: 1.5rem;
      font-weight: 650;
      margin: 0 0 0.4rem;
      letter-spacing: -0.02em;
    }
    .sub { color: var(--muted); font-size: 0.95rem; margin: 0; }
    h2 {
      font-size: 1.05rem;
      font-weight: 600;
      margin: 1.75rem 0 0.75rem;
      color: var(--accent2);
    }
    .tree {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.1rem 1.25rem;
      font-family: var(--mono);
      font-size: 0.88rem;
      overflow-x: auto;
      line-height: 1.7;
    }
    .tree .dir { color: var(--accent); }
    .tree .file { color: var(--text); }
    .tree .comment { color: var(--muted); }
    .tree a {
      color: var(--accent);
      text-decoration: none;
    }
    .tree a:hover { text-decoration: underline; }
    ul.files {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 0.75rem;
    }
    ul.files li {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1rem 1.15rem;
    }
    ul.files strong {
      display: block;
      font-family: var(--mono);
      font-size: 0.92rem;
      color: var(--accent);
      margin-bottom: 0.35rem;
    }
    ul.files p {
      margin: 0;
      color: var(--muted);
      font-size: 0.9rem;
    }
    ul.files a {
      color: inherit;
      text-decoration: none;
    }
    ul.files a:hover strong { text-decoration: underline; }
    footer {
      margin-top: 2rem;
      color: var(--muted);
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>atfm.github.io</h1>
      <p class="sub">Статический сайт на GitHub Pages: HTML-приложения без сборки.</p>
    </header>

    <h2>Структура проекта</h2>
    <pre class="tree" aria-label="Дерево файлов проекта"><span class="dir">atfm.github.io/</span>
├── <a class="file" href="README.md">README.md</a>                 <span class="comment">← этот файл: обзор и структура</span>
├── <a class="file" href="latviesu.html">latviesu.html</a>            <span class="comment">← Latviešu: латышский за 7 дней</span>
└── <a class="file" href="dnevnoy-cheklist.html">dnevnoy-cheklist.html</a>   <span class="comment">← дневной чек-лист продуктивности</span></pre>

    <h2>Файлы</h2>
    <ul class="files">
      <li>
        <a href="latviesu.html">
          <strong>latviesu.html</strong>
          <p>Интерактивное приложение: курс латышского языка на 7 дней (уроки, XP, прогресс в localStorage).</p>
        </a>
      </li>
      <li>
        <a href="dnevnoy-cheklist.html">
          <strong>dnevnoy-cheklist.html</strong>
          <p>Дневной чек-лист продуктивности: оценка дня, чекбоксы задач, сохранение по датам и экспорт.</p>
        </a>
      </li>
      <li>
        <a href="README.md">
          <strong>README.md</strong>
          <p>Главная страница репозитория со структурой проекта (этот документ).</p>
        </a>
      </li>
    </ul>

    <footer>
      Репозиторий: <code>atfm/atfm.github.io</code> · открывайте HTML в браузере (Chrome / Edge).
    </footer>
  </div>
</body>
</html>
