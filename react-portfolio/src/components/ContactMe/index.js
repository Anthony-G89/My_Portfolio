import React, { Component } from "react";
import { Container } from "react-bootstrap";


class EmailMe extends React.Component {

    emailAnt() {
        alert("clicked on")
    }


    render() {
        return (
            <Container className="pt-3">
                <title>Contact me</title>
                <div className="container-form shadow-lg p-3 bg-white rounded">
                    <h2 className="contact-h2">Contact</h2>
                    <div className="form-group">
                        <label >Name:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label >Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>


                    <div className="form-group">
                        <label >Message:</label>
                        <textarea className="form-control" cols="30" rows="10" ></textarea>
                        <br />
                        <button type="button" className="btn btn-primary " onClick={this.emailAnt} >Submit</button>
                    </div>
                </div>
            </Container>

        )
    }
};

export default EmailMe;



//     function sendEmail(e) {
//       e.preventDefault();
  
//       emailjs.sendForm('anthony_guerrero89', 'YOUR_TEMPLATE_ID', e.target, '')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     }
  
//     return (
//       <form className="contact-form" onSubmit={sendEmail}>
//         <input type="hidden" name="contact_number" />
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     );
//   }

  
  

