import React from 'react'
import "./Workers.css"

export function Workers({ logo, company, nuevo, featured, position, postedAt, contract, location, role, level, languages, addDel }) {

    const aux = [role, level];
    const comp = aux.concat(languages);

    return (
        <div>
            <div className='container-workers'>
                <div></div>
                <div className="box">
                    <div className='user'>
                        <div className="user-data">
                            <div className="user-img"> <img src={logo} alt="logo" /></div>
                            <div className="user-perfil">
                                <ul className='lista-company' >
                                    <li className='company' >{company}</li>
                                    {
                                        nuevo ? (
                                            <li className='new' >New!</li>
                                        ) : (
                                            <li></li>
                                        )
                                    }
                                    {
                                        featured ? (
                                            <li className='featured' >Featured</li>
                                        ) : (
                                            <li></li>
                                        )
                                    }
                                </ul>
                                <div className="position">{position}</div>
                                <ul className='user-contract'>
                                    <li>{postedAt}</li>
                                    <li>{contract}</li>
                                    <li>{location}</li>
                                </ul>
                                <div className='hr'></div>
                            </div>

                        </div>
                        <div className="user-lang">
                            <ul className="lang">
                                {
                                    comp.map((comp, index) =>
                                        <li key={index} onClick={() => addDel(comp)} >{comp}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
