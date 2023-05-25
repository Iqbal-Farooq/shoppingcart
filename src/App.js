
import './App.css';
import Nav from './Components/Nav';
import Product from './Components/Product';
import {Provider} from "react-redux"
import store from './Components/STORE/store';


function App() {
  return (
  <Provider store={store}>
 
    <Nav />
    <Product />
  </Provider>);
}

export default App;
