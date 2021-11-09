// import './App.css';
// import { BrowserRouter, Switch, Route } from "react-router-dom"
// import Navbar from './components/Navbar';
// import { Home } from './components/Home';
// import ItemListContainer from './components/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer';

// function App() {
//     return ( 
//         <BrowserRouter>
//             <header className = "App-header" >
//                 <Navbar/>
//             </header>
//             <div className = "body">
//                 <Switch>
//                     <Route exact path="/">
//                         <div className="App">
//                             <Home/>
//                         </div>
//                     </Route>
//                     <Route exact path="/tipo/:tipoID">
//                         <ItemListContainer/>
//                     </Route>
//                     <Route exact path="/producto/:productoID">
//                         <ItemDetailContainer/>
//                     </Route>
//                     <Route path="/*">
//                         <h1>404 not found.</h1>
//                     </Route>
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     );
// }

// export default App;

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartContextProvider } from './Context/CartContext';

function App() {
 
  return (
    <div className='App' >
    <CartContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/category/:categoriaItem' component={ItemListContainer}/>
          <Route exact path='/item/:id' component={ItemDetailContainer}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
      </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;