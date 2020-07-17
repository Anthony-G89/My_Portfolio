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




    render() {
        return (
            <div>
                <Carousel data-pause="hover" >
                    <Carousel.Item>
                        <img className="center" src={PasswordGenerator} alt="Image of password Generator" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={CodeQuiz} alt=" Image of Code Quiz" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={WeatherDasbored} alt="Image of Weather Dashbored" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={GoodReadme} alt="Image of Good README" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={LocalWire} alt=" Image of Localwire" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={StackChat} alt=" Image of Stack Chat" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={NoteTaker} alt="Image of Note Taker" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={Burger} alt=" Image of Burger" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={TeamTemplate} alt=" Image of Team Template" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={EmployeeDirectory} alt="Image of Employee Directory" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={EmployeeTracker} alt="Image of Employee Tracker" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={FitnessTracker} alt="Image of Fitness Tracker" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={BudgetTracker} alt="Image of Budget Tracker" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="center" src={MeetHub} alt="Image of MeetHub" />
                    </Carousel.Item>
                </Carousel>



            </div>

        )
    }

};

export default clickAbleLinks;






