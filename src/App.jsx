import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import CardHolder from "./components/Products/CardHolder/CardHolder";
import Stat from "./Components/Stat/Stat";
import Cart from "./Components/Cart/Cart";
import GetStarted from "./Components/GetStarted/GetStarted";
import PricingHolder from "./Components/Pricing/PricingHolder/PricingHolder";
import Footer from "./Components/Footer/Footer";
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