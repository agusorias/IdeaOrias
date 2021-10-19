import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return ( 
        <div className = "App" id="Aplicacion" >
            <header className = "App-header" >
                <Navbar/>
            </header>
            
            <div className="body">
                <ItemListContainer greeting = "Catálogo"/>
            </div>
        </div>
    );
}

export default App;