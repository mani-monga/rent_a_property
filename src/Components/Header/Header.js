import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='HeaderContainer'>
            <div className="HeaderLeft">
                <div className="title">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3,13h1v2v5c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2v-5v-2h1c0.404,0,0.77-0.244,0.924-0.617 c0.155-0.374,0.069-0.804-0.217-1.09l-9-9c-0.391-0.391-1.023-0.391-1.414,0l-9,9c-0.286,0.286-0.372,0.716-0.217,1.09 C2.23,12.756,2.596,13,3,13z M12,4.414l6,6V15l0,0l0.001,5H6v-5v-3v-1.586L12,4.414z"></path><path d="M12,18c3.703,0,4.901-3.539,4.95-3.689l-1.9-0.621C15.042,13.713,14.269,16,12,16c-2.238,0-3.02-2.221-3.051-2.316 L7.05,14.311C7.099,14.461,8.297,18,12,18z"></path></svg>
                    <span>Estatery</span>
                </div>
                <div className="menu">
                    <li>Rent</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Manage Property</li>
                    <li>Resources</li>
                </div>
            </div>
            <div className="HeaderRight">
                <button className='secondary button' >Login</button>
                <button className='primary button' >Sign up</button>
            </div>
        </div>
    )
}

export default Header;