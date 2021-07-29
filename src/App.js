import React from 'react';
import profileData from './profilData';
import {Container,Row, Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


class App extends React.Component {
  constructor(){
    super();
    this.state = profileData;
    this.state.show = true;
    this.state.count = 0;
  };
  
  handleName = () => this.setState({show : !this.state.show});
  
  componentDidMount() {
    setInterval(() => {
      this.setState({count : this.state.count + 1})
    }, 1000)
  }


  timer = () => {
    
     const Hours = `0${Math.floor(this.state.count / (60 * 60))}`.slice(-2);
     const Minutes = `0${Math.floor((this.state.count / 60) % 60)}`.slice(-2);
     const Seconds = `0${this.state.count % 60}`.slice(-2);
     return `${Hours}:${Minutes}:${Seconds}`
   }
  
 
  

  render(){
   

    return (
      <div>
      
      

      <Container style={{marginTop : '15%', marginBottom :'auto'}}>
      <Row>
      <Col className='col-img timer-style'> 
      <Button variant="warning" onClick={this.handleName} >{this.state.show ? 'Hide' : 'Show'}</Button> 
      <div>you have been here for {this.timer()}</div>
      </Col>
      </Row>
      

      {
        this.state.show && 

       <Row>
          <Col className='col-img'>  

                <img className='img-cercle' src={this.state.imgURL} alt="bla bla" width ='400px' height='400px'/>

          </Col>

          <Col className='col-data'>

              <p className="headlines-style"><span className='content-style'>FullName :</span> {this.state.fullName}</p>
                 <br />
              <p className="headlines-style" ><span className='content-style'>Bio :</span>  {this.state.bio} </p>
                 <br />
              <p className="headlines-style"><span className='content-style'>Profession :</span> {this.state.profession} </p>
                 <br />
                
          </Col>
               
        </Row>
      }
    </Container>  
    </div>)
  }
  

}
export default App;

