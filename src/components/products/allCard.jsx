import React, { use } from 'react';
import Card from '../Card/Card';

const AllCards = ({cardIds,setCardIds, CardPromise}) => {
    const CardData = use(CardPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {
                                CardData.map(card => <Card
                                    key={card.id}
                                    card={card}
                                    cardIds={cardIds}
                                    setCardIds={setCardIds}
                                />)
                            }
                        </div>
    );
};

export default AllCards;