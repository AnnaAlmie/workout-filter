import "./filters.scss";
import { useState, ChangeEvent } from 'react';
import { types, levels } from '../../helpers/filters';

export default function Filters({ handleChange }: ChangeEvent<HTMLInputElement> | any) {
    let sortedTypes = types.sort((a, b) => (a > b) ? 1 : -1);
    let [openMenu, setOpenMenu] = useState<boolean>(false);

    function toogleMenu() {
        setOpenMenu(!openMenu)
        openMenu ? document.body.classList.remove("no-scroll") : document.body.classList.add("no-scroll");
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
                                <input type="checkbox" id={level} onChange={event => handleChange(event)} />
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
                                <input type="checkbox" id={type} onChange={event => handleChange(event)} />
                                <label htmlFor={type}>{type}</label>
                            </div>)
                    })
                }
            </div>
        </aside>
    )
}