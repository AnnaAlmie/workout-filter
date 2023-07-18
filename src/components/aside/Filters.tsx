import "./filters.scss";
import { types, levels } from '../../helpers/filters';
import { useState, ChangeEvent } from 'react';


export default function Filters() {

    let sortedTypes = types.sort((a, b) => (a > b) ? 1 : -1);

    let [openMenu, setOpenMenu] = useState<boolean>(false);

    function toogleMenu() {
        setOpenMenu(!openMenu)
        openMenu ? document.body.classList.remove("no-scroll") : document.body.classList.add("no-scroll");
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(`{${event.target.id}: ${event.target.checked}}`)
        // 
        return event.target.id
    }

    return (
        <aside className={`container__aside ${openMenu ? 'open' : 'close'}`}>
            <div className="button__close" onClick={toogleMenu}></div>
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
        </aside>
    )
}