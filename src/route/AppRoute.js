import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import UserLoginPage from '../pages/UserLoginPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import AboutPage from '../pages/AboutPage';
import CompanyPage from '../pages/CompanyPage';
import ProductsDetails from '../components/ProductDetails/ProductsDetails';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';


 class AppRoute extends Component {
  render() {
    return (
     <Fragment>
       <Switch>
           <Route  exact  path="/" component={HomePage} />
           <Route  exact  path="/login" component={UserLoginPage} />
           <Route  exact  path="/contact" component={ContactPage} />
           <Route  exact  path="/Purchase" component={PurchasePage} />
           <Route  exact  path="/refund" component={RefundPage} />
           <Route  exact  path="/privacy" component={PrivacyPage} />
           <Route  exact  path="/About" component={AboutPage} />
           <Route  exact  path="/company" component={CompanyPage} />
           <Route  exact  path="/Productdetails" component={ProductsDetails} />
           <Route  exact  path="/notification" component={NotificationPage} />
           <Route  exact  path="/favourite" component={FavouritePage} />
           <Route  exact  path="/cart" component={CartPage} />
       </Switch>
     </Fragment>
    )
  }
}

export default AppRoute
