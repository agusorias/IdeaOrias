import './App.css';
import Navbar from './components/Navbar';
import "./components/CardWidget.css";
import "./components/Navbar.css";
import "./components/ItemListContainer.css"
import ItemListContainer from './components/ItemListContainer';

function App() {
    return ( 
        <div className = "App" id="Aplicacion" >
            <header className = "App-header" >
                <Navbar/>
            </header>
            
            <ItemListContainer greeting = "Catálogo"/>
        
        </div>
    );
}

export default App;