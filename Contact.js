import React, { Component } from 'react';


class Contact extends Component {
  send(event){alert("ThankYou for your Suggestion")}
  render() {
    return (
    
      <div className='signup'>
        <center><h1>Customer Care Service:</h1>
        <h3>Official email:<a href="#">Customercare@kidszone.com</a></h3></center>
        <div className='contactflex'>
          <div className='cont'>
          <br></br>KidsZone
          <br></br>Lulu Mall
          <br></br>Edapally, Kochi
          <br></br>email:KidszoneKochi@kidszone.com
          <br></br>Mobile:9876543210
          </div>
          <div className='cont'>
          <br></br>KidsZone
          <br></br> Focus Mall 
          <br></br>Mavoor Road, Calicut
          <br></br>email:KidszoneCalicut@kidszone.com
          <br></br> Mobile:9876543211
          </div>
          <div className='cont'>
          <br></br>KidsZone
          <br></br>Oberon Mall
          <br></br>Edapally, Kochi
          <br></br>email:KidszoneKochi@kidszone.com
          <br></br>Mobile:9876543212
          </div>
          <div className='cont'>
          <br></br>KidsZone
          <br></br>HiLite Mall
          <br></br>Poovangal, Calicut
          <br></br>email:KidszoneCalicut@kidszone.com
          <br></br>Mobile:9876543213
          </div>
          </div>
          <h1><center>Happy Shopping with KIDSZONE</center>
          </h1>
          <div className='textbox'><center>
          <h3>Suggestions</h3>
          <input type='text'></input><br></br>
          <button onClick={(event)=>{this.send(event)}}>Send </button>
         
  
          </center></div>
        </div>
      
    )
  }
}

export default Contact;