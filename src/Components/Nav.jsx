import '../styles/Nav.css'
import reload from '../assets/reload.svg'

import React from 'react'

export const Nav = ({reloadPage}) => {

    
    return (
    <div className='nav'>
        <p onClick={reloadPage}>Random</p>
        <img onClick={reloadPage} src={reload}/>
    </div>
    )
}
