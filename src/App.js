import logo from './logo.svg';
import './App.css';

let watermelon = "variable_flex";


const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
                <div>
                    Впервые делаем что-то на react'е за долгое время.
                    <br/>
                    Йаху. Хеллоу ворлд! {`${2+2} арбуз ${watermelon}`}
                </div>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
);

export default App;
