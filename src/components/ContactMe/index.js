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
                    <h3 className="email text-center" onClick={() => this.navigateToGoogle("https://www.google.com/")} >Email: adguerrero1935@gmail.com</h3>
                    <h3 className="LinkedIn text-center" onClick={() => this.navigateToLinkedIn("https://www.linkedin.com/in/anthony-guerrero-63a3a8199/")} >LinkedIn: https://www.linkedin.com/in/anthony-guerrero-63a3a8199/</h3>
                    <h3 className="Github text-center" onClick={() => this.navigateToGitHub("https://github.com/Anthony-G89")} >GitHub: https://github.com/Anthony-G89 </h3>
                </Container>
            </div>

        )
    }
};

export default EmailMe;






