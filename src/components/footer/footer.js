import React from 'react'

import "./footer.sass"
import visa from '../../img/visa.svg'
import paypal from '../../img/paypal.svg'
import masterCard from '../../img/master-card.svg'
import twitter from "../../img/twitter.svg"
import facebook from "../../img/facebook.svg"
import youtubeLogo from "../../img/youtube-logo.svg"
import google from "../../img/google.svg"
import toTop from "../../img/to-top.svg"
import {Link} from "react-router-dom";



// linking everything to '/' for now  


const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className='container__content-footer'>
                    <div className="container__col">
                        <span>About us</span>
                        <p>
                            Welcome to the test project. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam. reading this? great attention to detail quis sectetur, adipisci velit, sed
                            quia
                            non numquam eius.
                        </p>
                    </div>


                    <div className="container__col">
                        <span>Categories</span>
                        <ul>
                            <li>Electronics</li>
                            <li>Home & Tools</li>
                            <li>Beauty & Health</li>
                            <li>Toys & Kids</li>
                        </ul>
                    </div>


                    <div className="container__col">
                        <span>ACCEPT PAYMENTS</span>
                        <div className="col__payments">
                            <img src={masterCard} alt=''/>
                            <img src={visa} alt=''/>
                            <img src={paypal} alt=''/>
                        </div>
                    </div>
                </div>
                <div className="container__bottom">
                    <div className="bottom__content">
                        <span>© 2020 - Mircod. All Rights Reserved.</span>
                        <Link to='./'>
                            <img src={twitter} alt='' width='16' height='16'/>
                        </Link>
                        <Link to='./'>
                            <img src={facebook} alt='' width='16' height='16'/>
                        </Link>
                        <Link to='./'>
                            <img src={youtubeLogo} alt='' width='16' height='16'/>
                        </Link>
                        <Link to='./'>
                            <img src={google} alt='' width='16' height='16'/>
                        </Link>
                        <Link to='./'>
                            Blog
                        </Link>
                        <Link to='./'>
                            About us
                        </Link>
                        <button onClick={ () => {
                            document.body.scrollTop = 0
                            document.documentElement.scrollTop = 0
                        }
                        }>
                            <img src={toTop} alt='' width="11" height='11'/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;