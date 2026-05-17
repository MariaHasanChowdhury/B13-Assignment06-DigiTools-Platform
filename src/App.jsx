import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import CardHolder from "./components/Products/CardHolder/CardHolder";
import Stat from "./components/Stat/Stat";
import Cart from "./components/Cart/Cart";
import GetStarted from "./components/GetStarted/GetStarted";
import PricingHolder from "./components/Pricing/PricingHolder/PricingHolder";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";




function App() {


  const [selected, setSelected] = useState("product");
  const [cardIds, setCardIds] = useState([]);
  return (
    <>
      <header>
        <Navbar cardIds={cardIds.length} />
      </header>
      <main>
        <Banner />
        <Stat />
        <CardHolder
          // CardPromise={CardPromise}
          selected={selected}
          setSelected={setSelected}
          cardIds={cardIds}
          setCardIds={setCardIds}
        />


        {
          selected === "product" ?
            <GetStarted />
            : ""
        }
        {
          selected === "product" ?
            <PricingHolder />
            : ""
        }

        <Footer />

        {/* react toastify */}
        <ToastContainer />
      </main>
      <footer></footer>
    </>
  );
}

export default App;