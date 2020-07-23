/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import ReactDom from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import "./style.css";
// import { Carousel } from "react-bootstrap";
import StackChat from "../../images/STACK_CHAT.png";
import CodeQuiz from "../../images/Code Quiz.png";
import PasswordGenerator from "../../images/password_generator.png";
// import WorkScheduler from "../../images/work_day-Scheduler.png";
import WeatherDasbored from "../../images/showingFiveDayForeCast(2).png";
import GoodReadme from "../../images/good_readme.png";
import LocalWire from "../../images/Local Wire.png";
import NoteTaker from "../../images/home_week11_noteTaker.png";
import Burger from "../../images/Burgers.png";
import TeamTemplate from "../../images/team_template_final.png";
import EmployeeTracker from "../../images/Employee-Tracker.png";
import FitnessTracker from "../../images/home_fitness_tracker.png";
import BudgetTracker from "../../images/budget-tracker.png";
import EmployeeDirectory from "../../images/employee_directory.png";
import MeetHub from "../../images/MeetHub.png";




class clickAbleLinks extends React.Component {

    nagvigateToGitHubProject(repo) {

        window.open(`https://github.com/Anthony-G89/${repo}`);
    }

    static get CONTAINER_STYLE() {
        return {
            position: "realative",
            height: "90vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "700px",
            width: "500px",
            paddingTop: "80px",
            textAlign: "Center",
            background: "#c1c2be",
            color: "black",
            frontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "15px",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }

    static get PICTURE_STYLE() {
        return {
            position: "absolute",
            height: "250px",
            width: "400px",
            left: "54px",
            bottom: "342px"
        };
    }

    static get DESCRIPTION() {
        return {
            position: "absolute",
            bottom: "231px",
            right: "24px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "black"
        };
    }

    static get TECHNOLOGIES_USED() {
        return {
            position: "absolute",
            bottom:"155px",
            right: "40px",
            color: "blue"
        }
    }

    static get LINK() {
        return {
            position: "absolute",
            bottom: "70px",
            right: "125px",
            color: "red",
            textDecoration: "underline",
            cursor: "pointer"
        }
    }


    render() {
        return (
            <div style={clickAbleLinks.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={false} autoplay_speed={6500} >
                    <div style={clickAbleLinks.CARD_STYLE}>Password Generator
                        <img style={clickAbleLinks.PICTURE_STYLE} src={PasswordGenerator}
                            alt="Image of password Generator" />
                        <p style={clickAbleLinks.DESCRIPTION}> User will be able to generate a password and have the option to choose between lowercase, uppercase, number, and symbol.</p>
                        <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, and JavaScript</p>
                        <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("Password-Generator")}>Click here to see my repository</p>
                    </div>

                    <div style={clickAbleLinks.CARD_STYLE}>Code Quiz
                        <img style={clickAbleLinks.PICTURE_STYLE}  src={CodeQuiz}
                            alt=" Image of Code Quiz" />
                        <p style={clickAbleLinks.DESCRIPTION}>User will have 40 seconds to answer 5 code questions. For each questions you get wrong, you'll lose 6 seconds off your timer.</p>
                        <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, and JavaScript</p>
                        <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("Code-Quiz")} >Click here to see my repository</p>
                    </div>

                    <div style={clickAbleLinks.CARD_STYLE}>Weather Dashbored
                        <img style={clickAbleLinks.PICTURE_STYLE}  src={WeatherDasbored}
                            alt="Image of Weather Dashbored" />
                        <p style={clickAbleLinks.DESCRIPTION}>User will be able to enter any city in the united state and get the current forecast and the next 5 days forecast.</p>
                        <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, JavaScript, jQuery, API, and Ajax</p>
                        <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("weather-dashboard")} >Click here to see my repository</p>
                    </div>

                    <div style={clickAbleLinks.CARD_STYLE}>Local Wire
                        <img  src={LocalWire}
                            alt=" Image of Localwire" />
                        <p style={clickAbleLinks.DESCRIPTION}>Local Wire is an app where the user can put the city they are in and the results will give them the nearest bars, restaurant, and events around them.</p>
                        <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, Materialize, JavaScript, jQuery, API, and Ajax</p>
                        <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("Project_One")}>Click here to see my repository</p>
                    </div>

                    <div style={clickAbleLinks.CARD_STYLE}>slide five</div>





                </ReactCardCarousel>

            </div>

        )
    }

};

export default clickAbleLinks;




// hello() {
//     alert("click on ")
// }

// nagvigateToHeroku(repo) {
//     window.open(`https://dashboard.heroku.com/apps/${repo}`)
// }




                 
                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("Project_One")} src={LocalWire}
                    //         alt=" Image of Localwire" />
                    //     <Carousel.Caption>
                    //         <h2 className="description" style={{color:"white"}}> LocalWire is an app that will the show user the nearest<br />
                    //     bars, restaurant, and events</h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("STACKCHAT")} src={StackChat}
                    //         alt=" Image of Stack Chat" />
                    //     <Carousel.Caption>
                    //         <h2 className="scDescription">StackChat is an app that will let users chat with other users<br />
                    //     Simple just need to register and start chatting away.</h2>
                    //         <h3 className="scLink">Click on the image to see my repository</h3>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("week-11-note-taker")} src={NoteTaker}
                    //         alt="Image of Note Taker" />
                    //     <Carousel.Caption>
                    //         <h2 className="description"> Note Taker is an app where user can add their notes<br />
                    //     update, and delete. Also, has data persistence </h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("burger")} src={Burger}
                    //         alt=" Image of Burger" />
                    //     <Carousel.Caption>
                    //         <h2 className="description"> Burger is an app were the users will get to enter a burger and<br />
                    //     the burger then will be added to a list</h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("Team_Template")} src={TeamTemplate}
                    //         alt=" Image of Team Template" />
                    //     <Carousel.Caption>
                    //         <h2 className="description">Team Template is an app where a manager or anyone who<br />
                    //     wants to generate a web page of his/her employee's<br />
                    //     or friends basic information </h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("week-19-react-employee-directory")} src={EmployeeDirectory}
                    //         alt="Image of Employee Directory" />
                    //     <Carousel.Caption>
                    //         <h2 className="description">Users can enter employees name<br />
                    //     in the search bar to shorten the list of employees </h2>
                    //         <h3 className="link">Click on the image to see my repository</h3>
                    //     </Carousel.Caption>
                    // </Carousel.Item>
                    
                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("week-12-employee-tracker")} src={EmployeeTracker}
                    //         alt="Image of Employee Tracker" />
                    //     <Carousel.Caption>
                    //         <h2 className="description" style={{ color: "white" }}>Employee Tracker is an app where a user can add a department,<br />
                    //      role, or new employee </h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("week_17workout-tracker")} src={FitnessTracker}
                    //         alt="Image of Fitness Tracker" />
                    //     <Carousel.Caption>
                    //         <h2 className="description"> Fitness Tracker will let users to add exercise </h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("week-18-pwa-budget-tracker")} src={BudgetTracker}
                    //         alt="Image of Budget Tracker" />
                    //     <Carousel.Caption>
                    //         <h2 className="description">The user will be able to add expenses and deposits to their<br />
                    //     budget with or without internet connection.<br />App has data persistence</h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

                    // <Carousel.Item>
                    //     <img className="center" onClick={() => this.nagvigateToGitHubProject("meethub")} src={MeetHub}
                    //         alt="Image of MeetHub" />
                    //     <Carousel.Caption>
                    //         <h2 className="description" style={{ color: "white" }}> MeetHub is a video application </h2>
                    //         <p className="link">Click on the image to see my repository</p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>

            






