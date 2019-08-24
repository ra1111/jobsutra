import React ,{Component}from 'react'
import {FontIcon, RaisedButton} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// const rzp = new window.Razorpay({
//     key_id: 'rzp_live_wTLJa4lK2Y49fL', // your `KEY_ID`
//     key_secret: 'GFQZwACpI9XkfCh4RsHTp1q3' // your `KEY_SECRET`
//   })
export default class Checkout extends React.Component {
    state = {
      amount: 0
    };
  
    constructor() {
      super()
      this.changeAmount = this.changeAmount.bind(this);
      this.openCheckout = this.openCheckout.bind(this);
    }
    componentDidMount () {
        const script = document.createElement("script");
       
       script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
       
       document.body.appendChild(script);
        }
    changeAmount(e) {
      this.setState({amount: e.target.value})
    }
  
    openCheckout() {
       console.log("THis is working") 
      let options = {
        "key": "rzp_live_wTLJa4lK2Y49fL",
        "amount": 200, // 2000 paise = INR 20, amount in paisa
        "name": "JobSutra",
        "description": "JAT Exam ",
        "image": "/your_logo.png",
        "handler": function (response){
          alert(response.razorpay_payment_id);
        },
        "prefill": {
          "name": "Harshil Mathur",
          "email": "harshil@razorpay.com"
        },
        "notes": {
          "address": "Hello World"
        },
        "theme": {
          "color": "#F37254"
        }
      };
      
      let rzp = new window.Razorpay(options);
      rzp.open();
    }
    
    render () {
      return (
          <div>
        <div class="hero-wrap hero-wrap-2"  style={{backgroundImage: `url(${require('../Assets/images/Login.jpg')})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} data-stellar-background-ratio="1">
              <div class="overlay"></div>
              <div class="container">
                <div class="row no-gutters slider-text align-items-end justify-content-start">
                  <div class="col-md-8 ftco-animate text-center text-md-left mb-5">
      
                    <h1 class="mb-3 bread"></h1>
                  </div>
                </div>
              </div>
            </div>
          <MuiThemeProvider>
        <RaisedButton
            label="Sign in with Google"
            labelColor={"#ffffff"}
            className="loginButton"
            backgroundColor="#dd4b39"
            icon={<FontIcon className="fa fa-google-plus" />}
            onClick={()=>this.openCheckout()}
        />
         </MuiThemeProvider>
         </div>
      )
    }
  }
  
  