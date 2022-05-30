import React, { useEffect } from 'react'
import "./Search.css"

export function Search({ buscar, setBuscar, deleteItem, search, setSearch }) {

    const listBuscar = buscar.map((item, index) =>
        <React.Fragment key={index}>
            <li >{item}</li><span className='icon-remove' onClick={() => deleteItem(item)} ><img src="./images/icon-remove.svg" alt="icon-remove" /></span>
        </React.Fragment >
    )

    useEffect(() => {
    }, [])

    return (
        <div className="container-search">
            <div></div>
            <div className={search}>
                <div className='search-elem'>
                    <ul className='search-list'>
                        {listBuscar}
                    </ul>
                    <div className="clear" onClick={() => [setBuscar([]), setSearch("search-close")]}>Clear</div>
                </div>
            </div>
            <div></div>
        </div >
    )
}
