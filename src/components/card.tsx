import './card.css';
import { types, levels } from '../helpers/filters';

export default function Card(props: any) {

    return (
        <div className='card' style={{ borderColor: levels[props.card.level].color }}>
            <iframe allowFullScreen
                src={`https://www.youtube.com/embed/${props.card.url}`}></iframe>
            {/* content  */}
            <div className='card__content'>

                <div className='card__content-flex'>
                    {/* types  */}
                    <div>
                        {props.card.type.map((item: number) => {
                            return <span key={item}>
                                #{types[item]}&nbsp;
                            </span>
                        })}
                    </div>

                    {/* level  */}
                    <div>
                        <b style={{ color: levels[props.card.level].color }}>
                            {levels[props.card.level].level}
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}