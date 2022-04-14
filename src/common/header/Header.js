
import React, { Component } from "react";
import './Header.css';
import logo from './logo.svg';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="headerLogo" alt="logo" />
                <div className="buttonsDiv">
                    <button className={this.props.headerBtnType}>{this.props.buttonName}</button>
                    <button className={this.props.headerBtnType2}>{this.props.buttonName2}</button>
                    <button className={this.props.headerBtnType3}>{this.props.buttonName3}</button>
                </div>
            </div>
        )
    }
}
export default Header;