export default class Print extends Component {

    print(){
        window.print();
    }


  render() {
  <span className="print"
              onClick={this.print}>
    PRINT
    </span>

  } 
}