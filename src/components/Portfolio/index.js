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
                {/* <div className="container">
                    <div className="mySlides">
                        <div className="numberText">1/5</div>
                        <img src={PasswordGenerator} style={{ width: 1000 }} />
                    </div>
                    <div className="mySlides">
                        <div className="numberText">2/5</div>
                        <img src={CodeQuiz} style={{ width: 1000 }} />
                    </div>
                    <div className="mySlides">
                        <div className="numberText">3/5</div>
                        <img src={WorkScheduler} style={{ width: 1000 }} />
                    </div>
                    <div className="mySlides">
                        <div className="numberText">4/5</div>
                        <img src={WeatherDasbored} style={{ width: 1000 }} />
                    </div>
                    <div className="mySlides">
                        <div className="numberText">5/5</div>
                        <img src={GoodReadme} style={{ width: 1000 }} />
                    </div> */}

                    <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onClick="plusSlides(1)">&#10095;</a>

                    <div className="caption-container">
                        <p className="caption"></p>
                    </div>

                    <div className="row pt-5">
                        <div className="column">
                            <img className="demo cursor" src={PasswordGenerator} style={{width:430}} onClick="currentSlide(1)" />
                        </div>
                        <div className="column">
                            <img className="demo cursor" src={CodeQuiz} style={{width:430}} onClick="currentSlide(2)" />
                        </div>
                        <div className="column">
                            <img className="demo cursor" src={WorkScheduler} style={{width:430}} onClick="currentSlide(3)" />
                        </div>
                        <div className="column">
                            <img className="demo cursor" src={WeatherDasbored} style={{width:430}} onClick="currentSlide(4)" />
                        </div>
                        <div className="column">
                            <img className="demo cursor" src={GoodReadme} style={{width:430}} onClick="currentSlide(5)" />
                        </div>

                    </div>
                {/* </div> */}
            </div>

        )
    }

};

export default clickAbleLinks;



