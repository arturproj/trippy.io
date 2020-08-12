import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import styled, { css } from 'styled-components'

import Global from './../../Global'

const NavContainer = styled(Navbar)`
    background-color: ${Global.color.primary};
    ${props => props.isscrolled==="true" && css`
        background-color: ${Global.color.navbar};
    `}
`;
const NavBrand = styled(Navbar.Brand)`
    color: #fff !important;
    ${props => props.isscrolled==="true" && css`
        color: #000 !important;
    `}
`;

const NavItem = styled(Nav.Link)`
    color: #fff !important;
    ${props => props.isscrolled==="true" && css`
        color: #000 !important;
    `}
`;

class navigation extends React.Component{
    constructor(state){
        super(state)

        this.state = {
            isScrolled: false,
            isReady: false
        }
    }

    componentDidMount() {
        window.onscroll = this.onScroll.bind(this);
    }

    onScroll(){
        this.setState({
            isScrolled : (window.pageYOffset >= 60 ? true : false)
        })
    }

    render(){
        return (
            <NavContainer fixed="top" isscrolled={this.state.isScrolled.toString()}  expand="md" >
                <NavBrand href="/" isscrolled={this.state.isScrolled.toString()}><i className="fab fa-aviato fa-3x"></i></NavBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <NavItem isscrolled={this.state.isScrolled.toString()} href="/hotels">Hotels</NavItem>
                        <NavItem isscrolled={this.state.isScrolled.toString()} href="/restaurants">Restaurants</NavItem>
                        <NavItem isscrolled={this.state.isScrolled.toString()} href="/login">Login</NavItem>
                        <NavItem isscrolled={this.state.isScrolled.toString()} href="/signup">Signup</NavItem>
                </Navbar.Collapse>
            </NavContainer>
        )
    }
}

export default navigation;