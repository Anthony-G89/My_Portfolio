import React from "react";
import { Container } from "react-bootstrap";
import "./style.css"


class EmailMe extends React.Component {

    // LinkedIn() {
    //     alert("LinkedIn clicked on");

    navigateToGoogle(website) {
        window.open("https://www.google.com/")
    };

    navigateToLinkedIn(repo) {
        window.open("https://www.linkedin.com/in/anthony-guerrero-63a3a8199/")
    };

    navigateToGitHub(repo) {
        window.open("https://github.com/Anthony-G89")
    };




    render() {
        return (
            <div>
                <Container className="containerHolder">
                    <h2 className="Title text-center"> You Can Reach me at</h2>
                    <hr />
                    <div className="email text-center" onClick={() => this.navigateToGoogle("https://www.google.com/")}>
                        <h3 style={{ color: "black" }} >Email:</h3><h2 className="myEmail">adguerrero1935@gmail.com</h2>

                    </div>
                    <div className="LinkedIn text-center" onClick={() => this.navigateToLinkedIn("https://www.linkedin.com/in/anthony-guerrero-63a3a8199/")} >
                        <h3 style={{ color: "black" }}>LinkedIn:</h3><h2 className="myLinkedIn"> https://www.linkedin.com/in/anthony-guerrero-63a3a8199/</h2>
                    </div>
                    
                    <div className="Github text-center" onClick={() => this.navigateToGitHub("https://github.com/Anthony-G89")} >
                        <h3 style={{ color: "black" }}>Github:</h3><h2 className="myGitHub">https://github.com/Anthony-G89 </h2>
                    </div>
                </Container>
            </div>

        )

    }
};

export default EmailMe;






