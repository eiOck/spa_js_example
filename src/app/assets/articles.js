export const articles = [
    {
        title: 'Instalace všech prerekvizit',
        content: `<p>
        1. instalace <strong>Node.js</strong> → <a href="https://nodejs.org/en/download/package-manager/">odkaz pro různé platformy</a><br />
        2. instalace vývojového prostředí - např. <a href="https://code.visualstudio.com/">VS Code IDE</a><br />
        3. instalace modulu 'create-react-app':
        </p>
        `,
        code: 
        `
        npm install -g create-react-app
        `
    },
    {
        title: 'Vytvoření a spuštění React aplikace',
        content: `
        Pomocí modulu <strong>create-react-app</strong> bude z šablony předvytvořen projekt ve složce <strong>nazevaplikace</strong>. <br />
        Ve výchozím stavu běží webová aplikace na portu 3000, tzn. <a href="http://localhost:3000">http://localhost:3000</a> (pokud na daném portu nic jiného není spuštění něco jiného) + je automaticky otevřena v prohlížeči.
        `,
        code: 
        `
        create-react-app nazevaplikace
        cd nazevaplikace
        npm run start
        `
    },
    {
        title: 'Odkaz na GitHub této ukázkové aplikace',
        content: `
        Odkaz na repositář → <a href="">spa_js_example</a>. <br />
        Pro spuštění naklonujte projekt, dostaňte se do složky a spusťtě <i><strong>npm install</strong></i> (nebo zkráceně <i><strong>npm i</strong></i>) pro stažení a nainstalování všech modulů v projektu:
        `,
        code: 
        `
        npm install
        npm run start
        `
    },
    {
        title: 'Odkaz na GitHub této ukázkové aplikace',
        content: `Odkaz na repositář → <a href="">spa_js_example</a>`,
    },
];
