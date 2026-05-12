import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";


const Card = ({ card, cardIds, setCardIds }) => {

    const isAdded = cardIds.includes(card.id);

    return (
        <div className="flex justify-center">
            <div className="card w-full min-h-101 h-full bg-base-100 shadow-sm">
                <div className="card-body space-y-3">

                    <span className={
                        card.tagType === "new" ?
                            "bg-[#DBFCE7] text-[#0A883E] badge font-medium py-2 rounded-full absolute -right-5 top-2 -translate-x-1/2"
                            : card.tagType === "popular" ?
                                "bg-[#E1E7FF] text-[#9514FA] badge font-medium py-2 rounded-full absolute -right-7 top-2 -translate-x-1/2"
                                : "bg-[#FEF3C6] text-[#BB4D00] badge font-medium py-2 rounded-full absolute -right-10 top-2 -translate-x-1/2"
                    }>
                        {
                            card.tag === "new" ?
                                "New"
                                : card.tag === "popular" ?
                                    "Popular"
                                    : "Best Seller"
                        }
                    </span>

                    <figure className='border border-[#F2F2F2] rounded-full w-fit p-2'>
                        <img src={card.icon} alt="" />
                    </figure>

                    <div className="flex justify-between grow flex-col gap-4">
                        <h2 className="text-3xl font-bold">{card.name}</h2>
                        <p className="text-[#627382] grow">{card.description}</p>
                        <span className="text-xl">{card.price}/mo</span>
                    </div>
                    <ul className="mt-4 flex flex-col grow gap-2 font-medium">
                        {
                            card.features.map((feature, idx) =>
                                <li key={idx}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            )
                        }

                    </ul>
                    <div className="mt-auto">
                        <button
                            onClick={() => {
                                if (!cardIds.includes(card.id)) {
                                    setCardIds(prev => [...prev, card.id]);
                                }
                                toast(<span className="flex items-center gap-2 justify-center">
                                    <FaRegCheckCircle className="text-green-500" />
                                    <span>Added to Cart</span>
                                </span>);
                            }}
                            className={
                                isAdded ? "btn btn-secondary btn-block rounded-full"
                                    : "btn btn-primary btn-block rounded-full"
                            }
                        >
                            {
                                isAdded ? "Added to Cart"
                                    : "Subscribe"

                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;