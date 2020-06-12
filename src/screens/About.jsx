import React, { Component } from 'react';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import Navbar from '../components/Navbar';
import Constants from '../util/constants';
import claudio from '../assets/claudio.jpeg';
import 'react-notifications-component/dist/theme.css';
import './style/About.css';
class About extends Component {
  constructor(props) {
    super();
    this.state = {
        emailConfirmed: false,
        email: '',
        subjectConfirmed: false,
        subject: '',
        bodyConfirmed: false,
        body: ''
    };
  }
  validateEmail(email) {
    let re = /^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/;
    let Email = email.target.value
    // console.log(re.test(Email));
    this.setState({
        emailConfirmed:re.test(Email),
        email: Email
    })
  }
  validateSubject(event) {
      let subject = event.target.value;
      let wordArr = subject.split(' ');
      if (wordArr.length >= 2) {
          this.setState({
              subjectConfirmed: true,
              subject: subject
          })
      }
      else{
        this.setState({
            subjectConfirmed: false,
            subject: subject
        })
      }
  }
  validateBody(event) {
    let body = event.target.value;
    let wordArr = body.split(' ');
    if (wordArr.length >= 5) {
        this.setState({
            bodyConfirmed: true,
            body: body
        })
    }
    else{
      this.setState({
          bodyConfirmed: false,
          body: body
      })
    }
  }
  sendEmail() {
      if (this.state.subjectConfirmed && this.state.emailConfirmed && this.state.bodyConfirmed) {
        let details = {
            'message': this.state.body,
            'name': "Message from Portfolio Subject " + this.state.subject,
            'fromEmail': this.state.email,
          };
          let formBody = [];
          for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
          fetch('https://api.narutoccg.com/api/v1.1/market/sendmail', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody,
          }).then((response) => response.json())
            .then((responseData) => {
              this.setState({
                emailConfirmed: false,
                email: '',
                subjectConfirmed: false,
                subject: '',
                bodyConfirmed: false,
                body: ''
              });
              store.addNotification(Constants.MESSAGE_SUCCESS);
            })
            .catch(err => {
              console.log(err);
            });
      } else {
        store.addNotification(Constants.MESSAGE_WARNING);
      }
    //   store.addNotification();
  }

  render() {
    return (
    <div className="About">
        <ReactNotification />
        <Navbar 
            page='about' 
            history={this.props.history}
        />
        <div className="about-row row">
            <div className="col-sm-6">
                <div className="messageContainer">
                    <h1>I am a software engineer focused on creating products that people want.</h1>
                </div>
            </div>
            <div className="contact col-sm-6">
                <div className="contactContainer">
                    <div className="row contactHead">
                        <div className="col-5 col-sm-5">
                            <img alt="Claudio Atilano" id="profilePic" src={claudio} />
                        </div>
                        <div className="col-6 col-sm-6 d-flex flex-column justify-content-center">
                            <h4 id="contactTitle">Message Me</h4>
                        </div>
                    </div>
                    <div className="row inputField">
   

                        <div className="col-sm-12 d-flex flex-row justify-content-center">
                            <input onChange={(email) => this.validateEmail(email)} id="email" className="inputForm" placeholder="E-Mail" value={this.state.email}/>
                            <ion-icon style={this.state.emailConfirmed ? {display: 'block'} : {display: 'none'}} id="inputConfirmation" name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                    <div className="row inputField">
                        <div className="col-sm-12 d-flex flex-row justify-content-center">
                            <input id="subject" onChange={(subject) => this.validateSubject(subject)} className="inputForm" placeholder="Subject" value={this.state.subject}/>
                            <ion-icon style={this.state.subjectConfirmed ? {display: 'block'} : {display: 'none'}} id="inputConfirmation" name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                    <div className="row inputField">
                        <div className="col-sm-12 d-flex flex-row justify-content-center">
                            <textarea id="body" onChange={(body) => this.validateBody(body)} value={this.state.body} className="inputForm" placeholder="Write your message here..." />
                            <ion-icon style={this.state.bodyConfirmed ? {display: 'block'} : {display: 'none'}} id="inputConfirmation" name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 d-flex flex-row justify-content-center">
                            <button 
                            onClick={() => this.sendEmail()}
                            style={(this.state.bodyConfirmed && this.state.emailConfirmed && this.state.subjectConfirmed) 
                            ? {backgroundColor: '#6ac759'} 
                            : {backgroundColor: 'grey'}
                        } className="btn btn-primary btn-round">
                            <ion-icon name="mail"></ion-icon> Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>);
  }
}

export default About;
