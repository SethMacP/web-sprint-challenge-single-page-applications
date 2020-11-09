import React from "react";
import Order_Form from "./components/Order_Form"
import Pizza from "./Assets/Pizza.jpg"
import Ideas from "./components/Ideas"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <>
    <div className="top">
      
      <Navbar className="navbar">
          <Link to="/">LambdaEats</Link>
          <Link to="/pizza">Order</Link>
        </Navbar>
      <img className="pizza" src={Pizza}></img>
    </div>

    <div className="bottom">
      <Route exact path='/' component={Ideas} />
      <Route path='/pizza' component={Order_Form} />
    </div>
      
    </>
  );
};
export default App;
