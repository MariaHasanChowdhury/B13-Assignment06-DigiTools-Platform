import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import CardHolder from "./component/Products/CardHolder/CardHolder";
import Stat from "./component/Stat/Stat";
import Cart from "./component/Cart/Cart";
import GetStarted from "./component/GetStarted/GetStarted";
import PricingHolder from "./component/Pricing/PricingHolder/PricingHolder";
import Footer from "./component/Footer/Footer";
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