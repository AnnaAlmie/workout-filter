import "./Filters.css";
import { types, levels } from '../helpers/filters';

let sortedTypes = types.sort((a, b) => (a > b) ? 1 : -1);

export default function Filters() {
    return (
        <div className="container__filters">
            {/* level  */}
            <div className='container__filters__title'>Level</div>
            {
                levels.map(level => {
                    return (
                        <div className='container__filters__group' key={level.level}>
                            <input type={"checkbox"} id={level.level} />
                            <label htmlFor={level.level}>{level.level}</label>
                        </div>)
                })
            }
            {/* types  */}
            <div className='container__filters__title'>Types</div>
            {
                sortedTypes.map(type => {
                    return (
                        <div className='container__filters__group' key={type}>
                            <input type={"checkbox"} id={type} />
                            <label htmlFor={type}>{type}</label>
                        </div>)
                })
            }
        </div>
    )
}