import './card.css';
import { types, levels } from '../helpers/filters';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Card(props: any) {

    return (
        <div className='card' style={{ borderColor: levels[props.card.level].color }}>
            <YouTube videoId={props.card.url} />

            {/* content  */}
            <div className='card__content'>

                <div className='card__content-flex'>
                    {/* types  */}
                    <div className='card__content-flex-types'>
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