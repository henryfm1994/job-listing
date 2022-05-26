import React from 'react'
import "./Lista.css"
import image from "../assets/images/photosnap.svg"

export function Lista() {
    return (
        <div className='container'>
            <div></div>
            <div className="box">
                <div className='user'>
                    <div className="user-data">
                        <div className="user-img"> <img src={image} alt="logo" /> </div>
                        <div className="user-perfil">
                            <ul className='lista-company' >
                                <li className='company' >Company</li>
                                <li className='new' >New!</li>
                                <li className='featured' >Featured</li>
                            </ul>
                            {/* <div className="company">tester  test1   test2</div> */}
                            <div className="position">Senior Fronted Developer</div>
                            <ul className='user-contract'>
                                <li>1d ago</li>
                                <li>Full Time</li>
                                <li>USA Only</li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-lang">
                        <ul className="lang">
                            <li>Lang1</li>
                            <li>Lang2</li>
                            <li>Lang3</li>
                            <li>Lang4</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>

        </div>
    )
}
