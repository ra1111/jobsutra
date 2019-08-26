import React ,{Component}from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import {FontIcon, RaisedButton} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import "../styles/cardStyle.css";
 class CardClass extends Component {
  constructor() {
    super();
  }
    render(){
      console.log(this.props,"props")
      //change height params  
      return (
            <Card className="card"> 
              <CardContent className="cardBody">
                <Typography className="title" >
                {this.props.header}
                </Typography>
                <Typography variant="h5" component="h2">
               {this.props.body}
                </Typography>
              </CardContent>
              <CardActions className="cardFooter">
                {!this.props.footer==="Click Here To Register"?<Button size="small">{this.props.footer}</Button>:
                <MuiThemeProvider>
        <RaisedButton
            label={this.props.footer}
            labelColor={"#ffffff"}
            className="loginButton"
            fullWidth={true}
            backgroundColor={this.props.footer==='Click Here To Register'?"#6c63ff":"#ff6347"} 
            disabled={this.props.footer==='Click Here To Register'?false:true}
            onClick={ this.props.payment?()=> this.props.history.push({pathname:'/payment',state:{pic:this.props.pic,email:this.props.email}}):null}
        />
         </MuiThemeProvider>}
              </CardActions>
            </Card>
          );
        }
    }
    export default withRouter(CardClass)
