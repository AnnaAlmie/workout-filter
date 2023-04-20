import './card.css';
import { types, levels } from '../helpers/filters';
import { TData } from '../utils/supabaseClient';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

type TCard = {
    card: TData
}

export default function Card({ card }: TCard) {
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className='card' style={{ borderColor: levels[card.level].color }}>
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
        </motion.div>
    )
}