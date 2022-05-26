import React from 'react'
import workers from "../assets/data.json"
import "./Lista.css"

export function Workers() {

    return (
        <div className='home' >

            <div className="container-search">
                <div></div>
                <div className='search'>
                    <div className='search-elem'>
                        <ul className='search-list'>
                            <li>Fronted</li>
                            <li>CSS</li>
                        </ul>
                        <div className='clear' >Clear</div>
                    </div>
                </div>
                <div></div>
            </div>

            {
                workers.map(worker => <div key={worker.id}>
                    <div className='container-workers'>
                        <div></div>
                        <div className="box">
                            <div className='user'>
                                <div className="user-data">
                                    <div className="user-img"> <img src={worker.logo} alt="logo" /></div>
                                    <div className="user-perfil">
                                        <ul className='lista-company' >
                                            <li className='company' >{worker.company}</li>
                                            {
                                                worker.new ? (
                                                    <li className='new' >New!</li>
                                                ) : (
                                                    <li></li>
                                                )
                                            }
                                            {
                                                worker.featured ? (
                                                    <li className='featured' >Featured</li>
                                                ) : (
                                                    <li></li>
                                                )
                                            }
                                        </ul>
                                        {/* <div className="company">tester  test1   test2</div> */}
                                        <div className="position">{worker.position}</div>
                                        <ul className='user-contract'>
                                            <li>{worker.postedAt}</li>
                                            <li>{worker.contract}</li>
                                            <li>{worker.location}</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="user-lang">
                                    <ul className="lang">
                                        <li>{worker.role}</li>
                                        <li>{worker.level}</li>
                                        {
                                            worker.languages.map((lang, index) =>
                                                <li key={index} >{lang}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                )}


        </div>

    )
}
