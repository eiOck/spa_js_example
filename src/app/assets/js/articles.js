import projectStructureImg from '../images/project_structure.png';

export const articles = [
    {
        title: 'Instalace všech prerekvizit',
        content: `<p>
        1. instalace <strong>Node.js</strong> → <a href="https://nodejs.org/en/download/package-manager/" target="_blank">odkaz pro různé platformy</a><br />
        2. instalace vývojového prostředí - např. <a href="https://code.visualstudio.com/" target="_blank">VS Code IDE</a><br />
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
        Ve výchozím stavu běží webová aplikace na portu 3000, tzn. <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> (pokud na daném portu nic jiného není spuštění něco jiného) + je automaticky otevřena v prohlížeči.
        `,
        code: 
        `
        create-react-app nazevaplikace
        cd nazevaplikace
        npm run start
        `
    },
    {
        title: 'JavaScript 101',
        content: `
        <p>
            Přehled jazyku JavaScript na blogu <a href="https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c" target="_blank">Medium<a/>
        </p>
        `,
        code: ``
    },
    {
        title: 'Komponenty',
        content: `
        <p>
        Jednotlivé části Reactí aplikace se skládají z komponent. Komponenta může být definována jako třída nebo funkce. Rozdíl v třídě je oproti funkci v možnosti definovat vnitřní stav komponenty (state).
        <ul>
            <li><strong>state</strong> - vnitřní stav inicializovaný při vtvoření komponenty</li>
            <li><strong>props</strong> - parametry předávané při volání komponenty</li>
        </ul>
        Každá (class) komponenta obsahuje funkci <strong>render()</strong>, která vykresluje elementy. Ve funkci render je důležitý <strong>return (...)</strong> ve kterém jsou definovány elementy k vykreslení.
        Funkcionální komponenta nemusí obsahovat funkci <strong>render()</strong>, obsahuje pouze <strong>return (...)</strong> (mnohdy představovaný pomocí '=>')
        <br />
        <a href="https://javascript.info/destructuring-assignment">destructuring assignment</a> = destrukturalizované přiřazení = rozložení objektů, polí, vlastností do jednotlivých proměnných
        </p>`,
        code: `
        // class komponenta
        class Welcome extends React.Component {
            render() {
              return <h1>Hello, {this.props.name}</h1>;
            }
        }

        // funkční komponenta
        // => - představuje 'return'
        const Welcome = (props) => (
                <h1>Hello, {props.name}</h1>;
            );
        }

        // příklad použití Welcome komponenty 'props' vlastnosti "name"
        <Welcome name="Karel" />

        // příklad použití vlastnosti 'state' 
        class Welcome extends React.Component {
            // musíme vytvořit konstruktor s parametrem props, abychom byli schopni pracovat s definovanými 'props' dané komponenty
            // v případě, že nepotřebujeme využívat 'props' a nepředáváme je, může zůstat prázdné
            constructor(props) {
                // voláme konstruktor předka (React.Component)
                super(props);
                // počáteční stav komponenty
                this.state = {
                    age: 45, // číslo,
                    isValid: true, // boolean,
                    person: {}, // objekt,
                    items: [], // pole,
                    name: 'Karel' // řetězec, atd.
                }
            }

            render() {
                // destructuring assignment = destrukturalizované přiřazení
                const { age, isValid, person, items, name } = this.state; 
                // return může mít pouze jeden kořenový element
                return (
                    <div>
                        {/* přístup k proměnným uvnitř složených závorek*/}
                        {/* příklad přístupu k destrukturalizované proměnné */}
                        <p>Name: {name}</p>
                        {/* příklad přístupu k proměnné ze stavu */}
                        <p>Name: {this.state.name}</p>
                        <p>Age: {age}</p>
                        <p>Valid?: {isValid}</p>
                    </div>
                )
            }
        }
        `
    },
    {
        title: 'NPM moduly',
        content: `
        <p>
        Pokud chceme použít už existující modul, můžeme ho pomocí npm nainstalovat a poté použít v projektu. Vyhledáme požadovaný modul, např. <i><a href="https://www.npmjs.com/package/interweave">interweave</a></i> - pro vykreslování HTML obsahu v textu.
        </p>
        `,
        code: `
        // parametrem '--save' řekneme, že chceme uložit modul do 'package.json'
        npm install --save interweave

        ... použití v kódu ...
        // importujeme modul
        import { Markup } from 'interweave';
        ...
        <Markup content="<p><a href="www.google.com">Google</a></p>" />

        // odinstalování modulu
        npm uninstall interweave
        `
    },
    {
        title: 'Struktura projektu',
        content: `
        <p>
        Pro větší přehlednost je ideální aplikaci strukturovat. Možný příklad struktury viz. obrázek. <br />
        </p>
        `,
        img: {
            src: projectStructureImg,
            alt: "project structure"
        }
    },
    {
        title: 'Odkaz na GitHub této ukázkové aplikace',
        content: `
        Odkaz na <a href="https://spa-js-example.herokuapp.com/" target="_blank">Heroku</a> a na GitHub repositář → <a href="https://github.com/eiOck/spa_js_example" target="_blank">spa_js_example</a>. <br />
        Pro spuštění naklonujte projekt, dostaňte se do složky a spusťte <i><strong>npm install</strong></i> (nebo zkráceně <i><strong>npm i</strong></i>) pro stažení a nainstalování všech modulů v projektu:
        `,
        code: 
        `
        npm install
        npm run start
        `
    },
];
