/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import StackChat from "../../images/STACK_CHAT.png";
import CodeQuiz from "../../images/Code Quiz.png";
import PasswordGenerator from "../../images/password_generator.png";
import WorkScheduler from "../../images/work_day-Scheduler.png";
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

    hello() {
        alert("click on ")
    }

    nagvigateToHeroku(repo) {
        window.open(`https://dashboard.heroku.com/apps/${repo}`)
    }




    render() {
        return (
            <div>

                <Carousel data-pause="hover" >
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("Password-Generator")} src={PasswordGenerator}
                            alt="Image of password Generator" />
                        <Carousel.Caption>
                            <h2 className="description">User will be able to generate a password</h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("Code-Quiz")} src={CodeQuiz}
                            alt=" Image of Code Quiz" />
                        <Carousel.Caption>
                            <h2 className="description">User will be able to take a code quiz</h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("weather-dashboard")} src={WeatherDasbored}
                            alt="Image of Weather Dashbored" />
                        <Carousel.Caption>
                            <h2 className="description"> User can enter a city to see the forecast</h2>
                            <h2 className="link">Click on the image to see my repository</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("good_readme")} src={GoodReadme}
                            alt="Image of Good README" />
                        <Carousel.Caption>
                            <h2 className="description"> Example of a good README</h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("Project_One")} src={LocalWire}
                            alt=" Image of Localwire" />
                        <Carousel.Caption>
                            <h2 className="description" style={{color:"white"}}> LocalWire is an app that will the show user the nearest<br />
                        bars, restaurant, and events</h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("STACKCHAT")} src={StackChat}
                            alt=" Image of Stack Chat" />
                        <Carousel.Caption>
                            <h2 className="scDescription">StackChat is an app that will let users chat with other users<br />
                        Simple just need to register and start chatting away.</h2>
                            <h3 className="scLink">Click on the image to see my repository</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("week-11-note-taker")} src={NoteTaker}
                            alt="Image of Note Taker" />
                        <Carousel.Caption>
                            <h2 className="description"> Note Taker is an app where user can add their notes<br />
                        update, and delete. Also, has data persistence </h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("burger")} src={Burger}
                            alt=" Image of Burger" />
                        <Carousel.Caption>
                            <h2 className="description"> Burger is an app were the users will get to enter a burger and<br />
                        the burger then will be added to a list</h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("Team_Template")} src={TeamTemplate}
                            alt=" Image of Team Template" />
                        <Carousel.Caption>
                            <h2 className="description">Team Template is an app where a manager or anyone who<br />
                        wants to generate a web page of his/her employee's<br />
                        or friends basic information </h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("week-19-react-employee-directory")} src={EmployeeDirectory}
                            alt="Image of Employee Directory" />
                        <Carousel.Caption>
                            <h2 className="description">Users can enter employees name<br />
                        in the search bar to shorten the list of employees </h2>
                            <h3 className="link">Click on the image to see my repository</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("week-12-employee-tracker")} src={EmployeeTracker}
                            alt="Image of Employee Tracker" />
                        <Carousel.Caption>
                            <h2 className="description" style={{ color: "white" }}>Employee Tracker is an app where a user can add a department,<br />
                         role, or new employee </h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("week_17workout-tracker")} src={FitnessTracker}
                            alt="Image of Fitness Tracker" />
                        <Carousel.Caption>
                            <h2 className="description"> Fitness Tracker will let users to add exercise </h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("week-18-pwa-budget-tracker")} src={BudgetTracker}
                            alt="Image of Budget Tracker" />
                        <Carousel.Caption>
                            <h2 className="description">The user will be able to add expenses and deposits to their<br />
                        budget with or without internet connection.<br />App has data persistence</h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" onClick={() => this.nagvigateToGitHubProject("meethub")} src={MeetHub}
                            alt="Image of MeetHub" />
                        <Carousel.Caption>
                            <h2 className="description" style={{ color: "white" }}> MeetHub is a video application </h2>
                            <p className="link">Click on the image to see my repository</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



            </div>

        )
    }

};

export default clickAbleLinks;






