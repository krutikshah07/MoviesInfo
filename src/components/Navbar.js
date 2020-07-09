import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'

class Navbar1 extends Component{
 

render(){
    return(
        <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Movies Series</NavbarBrand>
        </div>
      </Navbar>
     
    );
    
}
}


export default Navbar1;