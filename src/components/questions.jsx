import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/questions.css'

import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <div className='mainquest'>
      <h1>FREQUENTLY ASKED <span className='blues'>QUESTIONS</span></h1>
      <div className='dash'></div>
      <div className='quest'>
        <Accordion defaultActiveKey="0" className='block'>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='title'>In which Language will this course be available?</Accordion.Header>
            <Accordion.Body className='desc'>
              Hinglish, The course is available in both languages – Hindi + English.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className='block'>
          <Accordion.Item eventKey="1">
            <Accordion.Header className='title'>Does the course come with any live interaction?</Accordion.Header>
            <Accordion.Body className='desc'>
              Yes, this course consists of live group Q&A sessions with Ankit Kumar.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className='block'>
          <Accordion.Item eventKey="1">
            <Accordion.Header className='title'>How long will it take to get access to the course?</Accordion.Header>
            <Accordion.Body className='desc'>
              Your course credentials will be delivered via email as soon as the course goes live. Please check your promotions/updates tab and spam folder as well.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className='block'>
          <Accordion.Item eventKey="1">
            <Accordion.Header className='title'>Is there a group that I will join, after purchasing the course?</Accordion.Header>
            <Accordion.Body className='desc'>
              Yes. You will join a community of like-minded enthusiasts on TheANKIT Group wherein you can share your doubts and connect with more people
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='lastsec'>
        <a href='https://theankit.org/privacy-policy-2/' className='first'>PRIVACY POLICY </a>
        <div> | </div>
        <a href='https://theankit.org/refund-cancellation-policy/' className='first'> REFUND/CANCELLATION POLICY </a>
        <div> | </div>
        <a href='https://theankit.org/terms-condition/' className='first'> TERMS & CONDITION </a>
      </div>
    </div>
  );
}

export default BasicExample;