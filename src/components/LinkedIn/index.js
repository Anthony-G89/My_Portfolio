import React from "react";


class linkIn extends React.Component {
    linkIn() {
        alert("clicked on")
    }
    render(){
   return (
       <div>
           
           <h2 className="linkIn" onClick={this.linkIn} href="https://www.linkedin.com/in/anthony-guerrero-63a3a8199/">LinkedIn | </h2>
           

       </div>
   )
   }
};

export default linkIn;

 // openLinkInAccount(account) {
    //     window.open("https://www.linkedin.com/in/anthony-guerrero-63a3a8199/")
    // }