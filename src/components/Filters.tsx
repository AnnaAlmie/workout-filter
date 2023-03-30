import { types, levels } from '../helpers/filters';

export default function Filters() {
    return (
        <div className="container__filters">
            {/* level  */}
            <h5>Level</h5>
            {
                levels.map(level => {
                    return (
                        <div key={level.toString()}>
                            <input type={"checkbox"} id={level.level} />
                            <label htmlFor={level.level}>{level.level}</label>
                        </div>)
                })
            }
            {/* types  */}
            <h5>Types</h5>
            {
                types.map(type => {
                    return (
                        <div key={type.toString()}>
                            <input type={"checkbox"} id={type} />
                            <label htmlFor={type}>{type}</label>
                        </div>)
                })
            }
        </div>
    )
}