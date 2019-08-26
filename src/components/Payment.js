import React, { Component } from "react";
import Dropdown from "react-dropdown";
import firebase, { auth, provider } from '../Firebase';
import { FontIcon, RaisedButton } from "material-ui";
import { withRouter } from 'react-router';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "../styles/postStyle.css";
import { dark } from "../../node_modules/@material-ui/core/styles/createPalette";
// const rzp = new window.Razorpay({
//     key_id: 'rzp_live_wTLJa4lK2Y49fL', // your `KEY_ID`
//     key_secret: 'GFQZwACpI9XkfCh4RsHTp1q3' // your `KEY_SECRET`
//   })
const workexp = ["Yes", "No"];
const arrowClosed = (
  <span className="arrow-closed-pay" style={{ bottom: "50px" }} />
);
const arrowOpen = (
  <span className="arrow-open-pay" style={{ bottom: "50px" }} />
);
let rootRef = firebase.database().ref();
class Checkout extends React.Component {

  constructor() {
    super();
    this.state = {
      //graduation details
      address: "",
      contact: 0,
      name: "",
       company: "", months: 0, role: "" ,
      degree: "",

      workexp: "No",
      college: "",
      branch: "",
      isHidden: false,
      user:null
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.openCheckout = this.openCheckout.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.handleValidation=this.handleValidation.bind(this);
    this.logout=this.logout.bind(this);
  }
  componentWillMount()
  {
let that=this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
       that.setState({user:user})
       // User is signed in.
      } else {
       // No user is signed in.
      }
    });
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  

  }
  logout()
  {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
      this.props.history.push('/')
    });

  }
  changeAmount(e) {
    this.setState({ amount: e.target.value });
  }
  handleValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;
    for (var property in fields) {
      if (fields.hasOwnProperty(property)) {
       
if(!this.state.isHidden)
{
  if(property!=='company'&&property!=='months'&&property!=='role'&&property!=='isHidden'&&property!=='user')
  {  console.log(!fields[property],property,property!=='months')
        if (!fields[property]) {
          formIsValid = false;
          errors[property] = "Cannot be empty";
        
         alert(property+" " +errors[property])
        }
      }
      }
      else{
        if(property!=='isHidden'&&property!=='user')
        {
        if (!fields[property]) {
          formIsValid = false;
          errors[property] = "Cannot be empty";
        alert(property+" " +errors[property])
        }
      }

      }
    }
  }
    return formIsValid;
  }

  openCheckout() {
 

    if (this.handleValidation()) {
      const data = {
address:this.state.address,
contact:this.state.contact,
name:this.state.name,
work:{company:this.state.company,months:this.state.months,role:this.state.role},
workexp:this.state.workexp,
college:this.state.college,
branch:this.state.branch
      }
      

 
    let options = {
      key: "rzp_live_wTLJa4lK2Y49fL",
      amount: 40000, // 2000 paise = INR 20, amount in paisa
      name: "JobSutra",
      description: "JAT Exam ",
      image: this.state.user.photoURL||"your pic",
      handler: function(response) {
        alert("You have sucessfully registered for JAT"+response.razorpay_payment_id);
        this.props.history.push('/')
        {this.state&&rootRef.child(`/users/${this.state.user.uid}`).update({basic:data,paid:"Yes",payment_id:response.razorpay_payment_id})}
      },
      prefill: {
        name: this.state.name,
        email:this.state.user.email||"harshil@razorpay.com"
      },
      notes: {
        address: this.state.address
      },
      theme: {
        color: "#F37254"
      }
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
   }
    
  }
  _onSelect(option) {
    console.log("You selected ", option.label);
    this.setState({ workexp: option, isHidden: !this.state.isHidden });
    console.log(this.state.isHidden,"hidden")
  }
  handleChange =(evt)=> {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const defaultOption = this.state.workexp;
    return (
      <div>
        <div className="paymentWrapper">
          <form  className="formWrapper">
            <div className="form-container">
              <label className="form-label">Name </label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-container">
              <label className="form-label">Address Details </label>
              <input
                type="text"
                name="address"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-container">
              <label className="form-label">Contact Number </label>
              <input
                type="number"
                className="form-control"
                name="contact"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-container">
              <label className="form-label">Graduation Degree</label>

              <input
                type="text"
                className="form-control"
                name="degree"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-container">
              <label className="form-label">College Name</label>
              <input
                type="text"
                className="form-control"
                name="college"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-container">
              <label className="form-label">Specialization/Branch</label>
              <input
                type="text"
                className="form-control"
                name="branch"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-container">
              <label className="form-label">Work Experience </label>
              <Dropdown
                options={workexp}
                onChange={this._onSelect}
                class="dropdown"
                value={defaultOption}
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
                placeholder="Select an option"
              />
            </div>
            {this.state.isHidden &&  <div>
    <div className="form-container">
      <label className="form-label"> company Name </label>
      <input
        type="name"
        className="form-control"
        name="company"
        onChange={this.handleChange}
      />
    </div>
    <div className="form-container">
      <label className="form-label"> Experience in months </label>
      <input
        type="number"
        className="form-control"
        name="months"
        onChange={this.handleChange}
      />
    </div>
    <div className="form-container">
      <label className="form-label"> Job Title </label>
      <input
        type="name"
        className="form-control"
        name="role"
        onChange={this.handleChange}
      />
    </div>
  </div>}
          </form>
          <MuiThemeProvider>
            <RaisedButton
              label="Register and Pay"
              labelColor={"#ffffff"}
              className="loginButton"
              backgroundColor="blue"
          
              onClick={() => this.openCheckout()}
            />
          </MuiThemeProvider>
          <MuiThemeProvider> 
        <RaisedButton
            label="Logout"
            labelColor={"#ffffff"}
            className="loginButton"
            backgroundColor="#dd4b39"
        
            onClick={this.logout}
        />
         </MuiThemeProvider> 
        </div>
      </div>
    );
  }
}

export default withRouter(Checkout)