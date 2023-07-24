import './card.scss';
import { types, levels } from '~/helpers/filters';
import { TData } from '~/utils/supabaseClient';
import YouTube from 'react-youtube';

type TCard = {
    card: TData
}

export default function Card({ card }: TCard) {
    return (
        <div className="card" style={{ borderColor: levels[card.level].color }}>
            <YouTube videoId={card.url} />

            {/* content  */}
            <div className='card__content'>
                <div className='card__content-flex'>
                    {/* types  */}
                    <div className='card__content-flex-types'>
                        {card.type.map((item: number) => {
                            return <span key={item}>
                                #{types[item]}&nbsp;
                            </span>
                        })}
                    </div>

                    {/* level  */}
                    <div>
                        <b style={{ color: levels[card.level].color }}>
                            {levels[card.level].level}
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}