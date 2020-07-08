import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const name = "Anthony Guerrero";
// const title = " Full Stack Developer";


const aboutMe = props => {
    return (
        <>
            <h2 className="myName text-center">{name}</h2>
            

            <div className="row">
                <Container >
                    <p className=" col-md-5 bio">
                        I'm a driven Full Stack Developer with broad technical skill set. Completed UCF Coding Boot Camp and voted best projects by my peers. User-focused Web Developer with a passion for integrating technologies to solve problems and improve upon existing methods. Fast learner, hard worker and team player who is proficient in an array of programming languages.
                    </p>
                </Container>
            </div>
        </>
    )
}

export default aboutMe;