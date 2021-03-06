import React from "react";
import ReactCardCarousel from "react-card-carousel";
import "./style.css";
import StackChat from "../../images/STACK_CHAT.png";
import CodeQuiz from "../../images/Code Quiz.png";
import PasswordGenerator from "../../images/password_generator.png";
import WeatherDasbored from "../../images/showingFiveDayForeCast(2).png";
import LocalWire from "../../images/Local Wire.png";
import NoteTaker from "../../images/home_week11_noteTaker.png";
import Burger from "../../images/Burgers.png";
import FitnessTracker from "../../images/home_fitness_tracker.png";
import EmployeeDirectory from "../../images/employee_directory.png";
import MeetHub from "../../images/MeetHub.png";
/* eslint-disable jsx-a11y/img-redundant-alt */
// import WorkScheduler from "../../images/work_day-Scheduler.png";
// import GoodReadme from "../../images/good_readme.png";
// import TeamTemplate from "../../images/team_template_final.png";
// import EmployeeTracker from "../../images/Employee-Tracker.png";
// import BudgetTracker from "../../images/budget-tracker.png";
// import ReactDom from "react-dom";




class clickAbleLinks extends React.Component {

    nagvigateToGitHubProject(repo) {

        window.open(`https://github.com/Anthony-G89/${repo}`);
    };


    nagvigateToHeroku(repo) {
        window.open(`https://dashboard.heroku.com/apps/${repo}`)
    };

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
            paddingTop: "37px",
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
            bottom: "155px",
            right: "40px",
            color: "blue"
        }
    }

    static get LINK() {
        return {
            position: "absolute",
            bottom: "95px",
            left: "176px",
            color: "red",
            textDecoration: "underline",
            cursor: "pointer"
        }
    }

    static get DEPLOY_LINKED() {
        return {
            position: "absolute",
            bottom: "62px",
            left: "167px",
            color: "red",
            textDecoration: "underline",
            cursor: "pointer"
        }
    }

    static get pageNumber() {
        return {
            position: "absolute",
            top: "8px",
            left: "12px"
        }
    }


    render() {
        return (

            <div className="body">
                <div style={clickAbleLinks.CONTAINER_STYLE}>
                    <ReactCardCarousel autoplay={false} autoplay_speed={6500} >
                        <div style={clickAbleLinks.CARD_STYLE}>Password Generator
                        <p style={clickAbleLinks.pageNumber}>1/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={PasswordGenerator}
                                alt="Image of password Generator" />
                            <p style={clickAbleLinks.DESCRIPTION}> User will be able to generate a password and have the option to choose between lowercase, uppercase, number, and symbol.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, and JavaScript</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("Password-Generator")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://anthony-g89.github.io/Password-Generator/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Code Quiz
                        <p style={clickAbleLinks.pageNumber}>2/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={CodeQuiz}
                                alt=" Image of Code Quiz" />
                            <p style={clickAbleLinks.DESCRIPTION}>User will have 40 seconds to answer 5 code questions. For each questions you get wrong, you'll lose 6 seconds off your timer.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, and JavaScript</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("Code-Quiz")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://anthony-g89.github.io/Code-Quiz/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Weather Dashbored
                        <p style={clickAbleLinks.pageNumber}>3/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={WeatherDasbored}
                                alt="Image of Weather Dashbored" />
                            <p style={clickAbleLinks.DESCRIPTION}>User will be able to enter any city in the united state and get the current forecast and the next 5 days forecast.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, jQuery, API, and Ajax</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("weather-dashboard")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://anthony-g89.github.io/weather-dashboard/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Local Wire
                        <p style={clickAbleLinks.pageNumber}>4/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={LocalWire}
                                alt=" Image of Localwire" />
                            <p style={clickAbleLinks.DESCRIPTION}>Local Wire is an app where the user can put the city they are in and the results will give them the nearest bars, restaurant, and events around them.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, Materialize, jQuery, API, and Ajax</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("Project_One")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://anthony-g89.github.io/Project_One/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Stack chat
                        <p style={clickAbleLinks.pageNumber}>5/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={StackChat}
                                alt=" Image of Stack Chat" />
                            <p style={clickAbleLinks.DESCRIPTION}>This app will let users chat with other users. Simple just need to register and start chatting away.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3,jQuery,Express,express-handlebars,Sequelize,Socket.io,passport,passport-local,and bcryptjs</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("STACKCHAT")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://ucfstackchat.herokuapp.com/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Meet Hub
                        <p style={clickAbleLinks.pageNumber}>6/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={MeetHub}
                                alt="Image of MeetHub" />
                            <p style={clickAbleLinks.DESCRIPTION}>Meet Hub is a video application that lets user video chat, message each other, and screen share.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, react, react-router,react-router-dom Express, jsonwebtoken, mongoose, and socket.io</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("meethub")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://ucf-meethub.herokuapp.com/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Note Taker
                        <p style={clickAbleLinks.pageNumber}>7/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={NoteTaker}
                                alt="Image of Note Taker" />
                            <p style={clickAbleLinks.DESCRIPTION}>Note Taker is an app where user can add their notes update, and delete. Also, has data persistence.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3,Express,Express-router,fs, and path</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("week-11-note-taker")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://evening-wildwood-16240.herokuapp.com/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Burgers
                        <p style={clickAbleLinks.pageNumber}>8/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={Burger}
                                alt="Image of Burgers" />
                            <p style={clickAbleLinks.DESCRIPTION}>Eat-Da-Burger is an app were the users will get to enter a burger and the burger then will be added to a list. After the burger is eaten, the user will get the chance to click devoured and be moved down to the devour list.</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, jQuery,Express,Express-handlebars, and MySql </p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("burger")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://stormy-shelf-46786.herokuapp.com/")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Fitness Tracker
                        <p style={clickAbleLinks.pageNumber}>9/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={FitnessTracker}
                                alt="Image of Fitness Tracker" />
                            <p style={clickAbleLinks.DESCRIPTION}>User will be able to add a exercise, also add exercise to a previous workout plan</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, ES6, Express, Express-router, Mongoose, and Morgan  </p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("week_17workout-tracker")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://gentle-hamlet-68132.herokuapp.com/exercise?id=5f21cce645950d0017a7088c")}>Deployed Link to app</p>
                        </div>

                        <div style={clickAbleLinks.CARD_STYLE}>Employee Directory
                        <p style={clickAbleLinks.pageNumber}>10/10</p>
                            <img style={clickAbleLinks.PICTURE_STYLE} src={EmployeeDirectory}
                                alt="Image of Employee Directory" />
                            <p style={clickAbleLinks.DESCRIPTION}>Employee Directory was build using React. User can enter employees name in the search bar to shorten the list of employees</p>
                            <p style={clickAbleLinks.TECHNOLOGIES_USED}>Technologies used: HTML5, CSS3, ES6, react, axios, react-dom, and react-scripts</p>
                            <p style={clickAbleLinks.LINK} onClick={() => this.nagvigateToGitHubProject("week-19-react-employee-directory")}> GitHub repository</p>
                            <p style={clickAbleLinks.DEPLOY_LINKED} onClick={() => window.open("https://secure-garden-28757.herokuapp.com/")}>Deployed Link to app</p>
                        </div>

                    </ReactCardCarousel>

                </div>
            </div>

        )
    }

};

export default clickAbleLinks;




// hello() {
//     alert("click on ")
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










