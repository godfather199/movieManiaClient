import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cards from "./components/cards/Cards";
import Summary from "./components/summary/Summary";
import Checkout from './components/checkout/Checkout'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Cards />} />
        <Route path = '/summary' element = {<Summary />} />
        <Route path = '/checkout' element = {<Checkout />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
