import Card from '../Card/Card';
import Cart from '../../Cart/Cart';
import AllCards from '../AllCards/AllCards';
import { Suspense } from 'react';

const fetchData = async () => {
    const res = await fetch("/Card.json");
    return res.json();
}

const CardPromise = fetchData();

const CardHolder = ({ selected, setSelected, cardIds, setCardIds }) => {
    // const CardData = use(CardPromise);
    // const cart = CardData.filter(cart => cardIds.includes(cart.id));

    

    return (
        <div className='w-3/4 mx-auto min-h-225'>
            <div>
                <h1 className='text-5xl font-bold text-[#101727] text-center mb-4'>Premium Digital Tools</h1>
                <p className='text-[#627382] mb-4 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center mb-10'>
                    <button
                        onClick={() => setSelected("product")}
                        className={`btn rounded-full ${selected === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "rounded-r-none border-none"} p-4`}>Products</button>
                    <button
                        onClick={() => setSelected("cart")}
                        className={`btn rounded-full ${selected === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "rounded-l-none border-none"} p-4`}>Cart({cardIds.length})</button>
                </div>
            </div>


            <Suspense fallback={<div className='h-[60vh] flex justify-center items-center'><span className="loading loading-spinner loading-xl flex justify-center items-center"></span></div>}>
                {
                    selected === "product" ?
                        <AllCards
                            setCardIds={setCardIds}
                            cardIds={cardIds}
                            CardPromise={CardPromise}
                        />
                        : <Cart CardPromise={CardPromise} cardIds={cardIds} setCardIds={setCardIds}/>
                }
            </Suspense >

            {/* <div className={`${selected === "cart" ? "hidden" : "grid"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
                {
                    CardData.map(card => <Card
                        key={card.id}
                        card={card}
                        cardIds={cardIds}
                        setCardIds={setCardIds}
                    />)
                }
            </div>
            <Cart selected={selected}/> */}
        </div>
    );
};

export default CardHolder;