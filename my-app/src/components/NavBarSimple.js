import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";
import NavBarForm from "./NavBarForm";

class NavBarSimple extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log in",
            isLoggedIn: true,
        }
    }

    handleclick = () => {
        this.setState((prevState) => ({
           
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
            isLoggedIn: !prevState.isLoggedIn
        }), ()=> console.log(this.state.message))
    }



    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? <NavBarForm handleFormSubmit={this.handleclick}/>
                : <div>
                    <span>{this.state.message}</span>
                    <button onClick={this.handleclick}>{this.state.buttonText}</button>
                </div>}
            </div>
        )
    }
}

export default NavBarSimple
