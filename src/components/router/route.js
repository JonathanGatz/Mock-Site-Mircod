import React from "react";
import {Route} from 'react-router-dom'

import {ConstructorPage} from "../pages/cunstructer/exportPage";
import Help from '../pages/help/helpPage';
import UserPanal from '../pages/userPanels/userPanels';
import FAQ from '../pages/faq/faq';
import About from '../pages/about/about';
import Blog from '../pages/blog/blog';



const RouteNav = () => {
    return (
        <>
            <Route exact path="/" component={ConstructorPage}/>
            <Route  path="/help" component={Help}/>
            <Route  path="/user-panel" component={UserPanal}/>
            <Route  path="/faq" component={FAQ}/>
            <Route  path="/about" component={About}/>
            <Route  path="/blog" component={Blog}/>
        </>
    )
};

export default RouteNav;


