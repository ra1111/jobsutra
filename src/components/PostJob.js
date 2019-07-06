import React, { Component } from "react";
import Dropdown from "react-dropdown";
import config  from "../Firebase";
import { CSSTransitionGroup } from "react-transition-group";
import Axios from "axios";
import Firebase from 'firebase';
import "../styles/postStyle.css";
const options = ["per month", "per week", "per year"];
const arrowClosed = <span className="arrow-closed" />;
const arrowOpen = <span className="arrow-open" />;

class PostJob extends Component {
  constructor() {
    super();
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
  }
   
    this.state = {
      formControls: {
        email: { value: "" },
        title: { value: "" },
        company: { value: "" },
        location: { value: "" },
        stipend: { value: "" },
        positions: { value: 0 },
        role: { value: "" },
        skill: { value: "" },
        name: { value: "" },
        phone: { value: "" },
        exp: { value: "" }

      },
      selected: "",
      errors: ""
    };
    this._onSelect = this._onSelect.bind(this);
  }
  _onSelect(option) {
    console.log("You selected ", option.label);
    this.setState({ selected: option });
  }
  submit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      const data = {
        name: this.state.formControls.name.value,
        email: this.state.formControls.email.value,
        title: this.state.formControls.title.value,
        company: this.state.formControls.company.value,
        location: this.state.formControls.location.value,
        positions: this.state.formControls.positions.value,
        role: this.state.formControls.role.value,
        skill: this.state.formControls.skill.value,
        phone: this.state.formControls.phone.value,
        exp: this.state.formControls.exp.value,
        stipend:this.state.formControls.stipend.value,
        type:this.state.selected
      };
      Firebase.database().ref('Jobs/').push({data});
    
      Axios.post(
        "https://us-central1-jobsutra-fc44a.cloudfunctions.net/job",
        data
      )
        .then(res => {
          // here will be code
       
        })
        .catch(error => {
          console.log(error);
        });
      alert("Form submitted");
    } else {
      alert("Form has errors.", this.state.errors);
    }
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
  };
  handleValidation() {
    let fields = this.state.formControls;
    let errors = {};
    let formIsValid = true;
    for (var property in fields) {
      if (fields.hasOwnProperty(property)) {
        // Do things here
        if (!fields[property].value) {
          formIsValid = false;
          errors[property] = "Cannot be empty";
        }
      }
    }

    if (typeof fields["email"].value !== "undefined") {
      let lastAtPos = fields["email"].value.lastIndexOf("@");
      let lastDotPos = fields["email"].value.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].value.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].value.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    console.log(errors, "error");
    return formIsValid;
  }
  render() {
    const defaultOption = this.state.selected;
   console.log( Firebase.database().ref('/').once('value', function (snapshot) {
      console.log(snapshot.val())
  }))
    return (
      <div>
        <div
          class="hero-wrap hero-wrap-2"
          style={{
            backgroundImage: `url(${require("../Assets/images/image_5.jpg")})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          data-stellar-background-ratio="0.5"
        >
          <div class="overlay" />
          <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-start">
              <div class="col-md-8 ftco-animate text-center text-md-left mb-5">
                <p class="breadcrumbs mb-0">
                  <span class="mr-3">
                    <a href="index.html">
                      Home <i class="ion-ios-arrow-forward" />
                    </a>
                  </span>{" "}
                  <span>New Job Post</span>
                </p>
                <h1 class="mb-3 bread">Post A Job</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="ftco-section bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-8 mb-5">
                <h3> About the job </h3>
                <form onSubmit={this.submit.bind(this)} class="p-5 bg-white">
                  <div class="col-md-12 mb-3 mb-md-0  row form-group mb-5">
                    <label> Job Title </label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.formControls.title.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter Job Title"
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5 row form-group mb-5">
                    <label> Company </label>
                    <input
                      type="text"
                      name="company"
                      value={this.state.formControls.company.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5  ">
                    <label> Location </label>
                    <input
                      type="text"
                      name="location"
                      value={this.state.formControls.location.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter City Name"
                    />
                  </div>
                  <label> Stipend</label>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <h4> Rs. </h4>
                    <div class="salary">
                      <input
                        type="number"
                        name="stipend"
                        value={this.state.formControls.stipend.value}
                        onChange={this.changeHandler}
                        class="form-control"
                        placeholder="Example:30,000"
                      />
                      <Dropdown
                        options={options}
                        onChange={this._onSelect}
                        class="dropdown"
                        value={defaultOption}
                        arrowClosed={arrowClosed}
                        arrowOpen={arrowOpen}
                        placeholder="Select an option"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label> Number of Positions</label>
                    <input
                      type="number"
                      name="positions"
                      value={this.state.formControls.positions.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Number of openings"
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label> Job Summary </label>

                    <textarea
                      id=""
                      name="role"
                      value={this.state.formControls.role.value}
                      onChange={this.changeHandler}
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Describe the position and the functions a person in this position will perform"
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label> Key Skills </label>
                    <textarea
                      id=""
                      name="skill"
                      value={this.state.formControls.skill.value}
                      onChange={this.changeHandler}
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Describe the  education, previous job experience, certifications ,technical skills and soft skills."
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label> Minimum Number of Experience</label>
                    <input
                      type="number"
                      name="exp"
                      value={this.state.formControls.exp.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter Minimum Experience"
                    />
                  </div>
                  <h3> Contact Details </h3>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.formControls.name.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter Person of Contact"
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.formControls.email.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div class="col-md-12 mb-3 mb-md-0 row form-group mb-5">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      value={this.state.formControls.phone.value}
                      onChange={this.changeHandler}
                      class="form-control"
                      placeholder="Enter Contact Number"
                    />
                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Post"
                        class="btn btn-primary  py-2 px-5"
                        style={{ marginTop: "3em" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PostJob;
