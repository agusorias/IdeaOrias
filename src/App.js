import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return ( 
        <BrowserRouter>
            <header className = "App-header" >
                <Navbar/>
            </header>
            <Switch>
                <Route exact path="/">
                    <div className = "App" id="Aplicacion" >
                        <div className="body">
                            <ItemDetailContainer greeting = "Catálogo"/>
                        </div>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;