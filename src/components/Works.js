import React,{Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Axios from 'axios'
import '../styles/workStyle.css'
class Works extends Component {

  constructor () {
    super()
    this.state = {
      formControls: {
      email: { value: ''},
      name:{ value: ''},
      subject:{ value: ''},
      message:{ value: ''}
    }
  }
  }
  submit(e)
  {
    const data = { name:this.state.formControls.name.value ,email:this.state.formControls.email.value, message:this.state.formControls.message.value };

    Axios.post("https://us-central1-jobsutra-fc44a.cloudfunctions.net/submit", data)
        .then(res => {
            // here will be code
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  changeHandler = event => {
      
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
      formControls: {
          ...this.state.formControls,
          [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
}



  render() {

  return (
    <CSSTransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
       <div class="hero-wrap hero-wrap-2"  style={{backgroundImage: `url(${require('../Assets/images/3.jpg')})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8 ftco-animate text-center text-md-left mb-5">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact</span></p>
            <h1 class="mb-3 bread">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-12 mb-4">
            <h2 class="h3">Contact Information</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3">
            <p><span>Address:</span> Directorate of Distance Education Magadh University Campus, Turi Buzurg, Bihar 824234</p>
          </div>
          <div class="col-md-3">
            <p><span>Phone:</span> <a href="tel://1234567920">8789666856/7358606486</a></p>
          </div>
          <div class="col-md-3">
            <p><span>Email:</span> <a href="mailto:mail.jobsutra@gmail.com">mail.jobsutra@gmail.com</a></p>
          </div>
          <div class="col-md-3">
            <p><span>Website</span> <a href="#">jobsutra.in</a></p>
          </div>
        </div>
        <div class="row block-9">
          <div class="col-md-6 order-md-last d-flex">
            <form  class="bg-white p-5 contact-form">
              <div class="form-group">
                <input type="text" name="name" value={this.state.formControls.name.value}
                     onChange={this.changeHandler} class="form-control" placeholder="Your Name"/>
              </div>
              <div class="form-group">
                <input type="email" name="email" value={this.state.formControls.email.value}
                     onChange={this.changeHandler}
                  class="form-control" placeholder="Your Email"/>
              </div>
              <div class="form-group">
                <textarea  id="" name="message" value={this.state.formControls.message.value}
                     onChange={this.changeHandler} cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" onClick={(e)=>this.submit(e)}  value="Send Message" class="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          
          </div>

          <div class="col-md-6 d-flex">
          	<div id="map" class="bg-white"></div>
          </div>
        </div>
      </div>
    </section>

    </CSSTransitionGroup>
  )
}
}


export default Works
