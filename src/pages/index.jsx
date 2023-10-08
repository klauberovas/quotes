import { renderQuotes } from './quotes';
import '../global.css';
import './index.css';
const randomNumber = Math.floor(Math.random() * 5);
renderQuotes(randomNumber);

// document.querySelector('#root').innerHTML = render(
//   <div class="container">
//     <header>
//       <div className="logo"></div>
//       <h1>Webová aplikace</h1>
//     </header>
//     <main>
//       <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
//     </main>
//     <footer>
//       <p>Czechitas, Digitální akademie: Web</p>
//     </footer>
//   </div>
// );
