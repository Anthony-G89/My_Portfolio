import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
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


    render() {
        return (
            <div >
                <div className="slideshow-container">
                    <div className="mySlides ">
                        <div className="numberText">1/5</div>
                        <img src={PasswordGenerator}  style={{ width: 450 }} />
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides ">
                        <div className="numberText">2/5</div>
                        <img src={CodeQuiz} style={{ width: 450 }} />
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides ">
                        <div className="numberText">3/5</div>
                        <img src={WeatherDasbored} style={{ width: 450 }} />
                        <div className="text">Caption Text</div>
                    </div>

                    <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onClick="plusSlides(1)">&#10095;</a>

                </div>

                <br />

                <div style={{textAlign:"center"}}>
                    <span clasName="dot" onClick="currentSlide(1)"></span>
                    <span clasName="dot" onClick="currentSlide(2)"></span>
                    <span clasName="dot" onClick="currentSlide(3)"></span>

                </div>



            </div>

        )
    }

};

export default clickAbleLinks;






