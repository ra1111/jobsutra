import React, { Component } from "react";
import {FontIcon, RaisedButton} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import firebase, { auth, provider } from '../Firebase';
import '../styles/studentStyle.css'
import CardClass from './CardContainer'
import Checkout from './Payment'

export   default class Student extends React.Component{
    constructor() {
        super();
        this.login = this.login.bind(this)
        this.logout=this.logout.bind(this)
        this.state = {
          currentItem: '',
          username: '',
          items: [],
          user: null,
          email:"",
          pic:"", // <-- add this line
        }
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
          } 
        });
    }
    login= async()=> {
       await auth.signInWithPopup(provider) 
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
          });
          let user=this.state.user;
          let database = firebase.database();
          console.log(this.state.user,'user')
        console.log(database.ref('users/' + user.uid),"ROSDIDIID");
     await database
        .ref('users/')
        .child(user.uid)
        .once('value', function(snapshot) {
          console.log(snapshot.val(),"value")
          var exists = snapshot.val() !== null;
          if (!exists) {
            database.ref('users/' + user.uid).set({
              username: user.displayName,
              email: user.email,
              profile_picture: user.photoURL,
              decks:0
           
            });
          }
        });
         
      }
      logout() { 
        auth.signOut()
          .then(() => {
            this.setState({
              user: null
            });
          });
      }
render() {

    return (
        <div style={{height:"100vh"}}>
      
        {/* {!this.state.user&& <div class="hero-wrap hero-wrap-2"  style={{backgroundImage: `url(${require('../Assets/images/Login.jpg')})`, backgroundPosition: 'center',
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
      </div>} */}
    <div className={this.state.user?"wrapper":"loginWrapper"}>
    <h4>Login With Google</h4>
   
    {this.state.user ? 
    <Checkout/>
  //   <div className="buttonWrapper"> 
  //   <div className="cardWrapper">
    
  //   {/* <CardClass header={"Your Profile"} body={"66% complete"} footer={"Complete your Profile"} payment={false}/>*/}
  //   {/* <CardClass header={"JAT Score"} body={"You have not given JAT"} footer={"Upcoming JAT exam 15th September"} payment={false}/>  */}
  //   {/* <CardClass header={"Register For JAT "} pic={this.state.user.photoURL} email={this.state.user.email} body={"Improve your chances of finding theright job"} payment={true} footer={"Click Here To Register"}/> */}
  //   </div>
  // <MuiThemeProvider> 
  //       <RaisedButton
  //           label="Logout"
  //           labelColor={"#ffffff"}
  //           className="loginButton"
  //           backgroundColor="#dd4b39"
  //           icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
  //           onClick={this.logout}
  //       />
  //        </MuiThemeProvider> </div>
         :
          <div className="buttonWrapper">
    <MuiThemeProvider>
        <RaisedButton
            label="Sign in with Google"
            labelColor={"#ffffff"}
            className="loginButton"
            backgroundColor="#dd4b39"
            icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
            onClick={this.login}
        />
         </MuiThemeProvider></div>}
    </div>
    </div>
    )
}
}

const iconStyles = {
color: "#ffffff"
};
