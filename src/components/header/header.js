import React from 'react'
import logo from '../../img/Logo.svg'
import './header.sass'
import { NavLink } from 'react-router-dom'
import {HeartOutlined, SearchOutlined} from '@ant-design/icons'

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="container__item-logo">
                    <img src={logo} alt='logo' />
                    <span>Framework</span>
                </div>
                <div className="container__item-sign-in">
                    <NavLink to='/sign-in'>Sign in</NavLink>
                </div>
            </div>
            <div className='header__submenu'>
                <div className='submenu__container'>
                    <div className="container__sections">
                    <NavLink activeClassName='active' to='/'>Constructor</NavLink>
                    <NavLink activeClassName='active' to='/help'>Help</NavLink>
                    <NavLink activeClassName='active' to='/user-panel'>User panels</NavLink>
                    <NavLink activeClassName='active' to='/faq'>Faq</NavLink>
                    <NavLink activeClassName='active' to='about'>About</NavLink>
                    <NavLink activeClassName='active' to='blog'>Blog</NavLink>
                    </div>
                    <div className='container__like-search'>
                        <HeartOutlined />
                        <SearchOutlined />
                    </div>
                </div>
            </div>
            <div className="header__page-name">
                <span>[</span>
                <p>Chips <span className=''>Constructor</span></p>
                <span>]</span>
            </div>
        </header>
    )
}

export default Header