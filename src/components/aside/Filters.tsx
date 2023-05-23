import "./filters.scss";
import { types, levels } from '../../helpers/filters';
import { ChangeEvent } from 'react';

let sortedTypes = types.sort((a, b) => (a > b) ? 1 : -1);

export default function Filters() {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("🚀 ~ handleChange", `{${event.target.id}: ${event.target.checked}}`,
            event)

    }

    return (
        <div className="container__filters">
            {/* level  */}
            <div className='container__filters__title'>Level</div>
            {
                levels.map(({ level }) => {
                    return (
                        <div className='container__filters__group' key={level}>
                            <input type="checkbox" id={level} onChange={handleChange} />
                            <label htmlFor={level}>{level}</label>
                        </div>)
                })
            }
            {/* types  */}
            <div className='container__filters__title'>Type</div>
            {
                sortedTypes.map(type => {
                    return (
                        <div className='container__filters__group' key={type}>
                            <input type="checkbox" id={type} onChange={handleChange} />
                            <label htmlFor={type}>{type}</label>
                        </div>)
                })
            }
        </div>
    )
}