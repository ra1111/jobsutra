import React ,{Component}from 'react'
import { Link } from 'react-router-dom'
import RenderToLayer from 'material-ui/internal/RenderToLayer';
export  default class Profile extends Component{ 
    constructor() {
        super();
      //   if (!Firebase.apps.length) {
      //     Firebase.initializeApp(config);
      // }
       
        this.state = {
          formControls: {
              address:{},
              Contact_Number:{},
              Tenth:{Precentage:0,School:"",Batch:"",Board:
              ""},
              Highschool:{Precentage:0,School:"",Batch:"",Board:
              ""},
              graduation:{
                  Degree:"",
                  College:"",
                  University:"",
                  Specialization:"",
                  Precentage:""
              },
              postgraduation:
              {  Degree:"",
              College:"",
              University:"",
              Specialization:"",
              Precentage:""

              },
              Work:{ Company:"",Years:0,Role:"",Industry} //Options in industry
              
            // email: { value: "" },
            // title: { value: "" },
            // company: { value: "" },
            // location: { value: "" },
            // stipend: { value: "" },
            // positions: { value: 0 },
            // role: { value: "" },
            // skill: { value: "" },
            // name: { value: "" },
            // phone: { value: "" },
            // exp: { value: "" }
    
          },
          selected: "",
          errors: ""
        };
    }
    render()
    {
        return(
            <View/>
        )
    }
    
}