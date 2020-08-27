import React from 'react';

import MessagePic from '../imgs/message.png';

import {
  ContactPageDiv,
  FormDiv,
  MessageImg,
  ContactH1,
  ContactP,
} from './StyledComponents';

function Contact(props) {
  return (
    <ContactPageDiv id={props.id}>
      <ContactH1>Get In Touch!</ContactH1>
      <FormDiv>
        <div>
          <ContactP>
            Feel free to reach out to my via email or any of the socials listed
            above.
          </ContactP>
          <br />
          <ContactP>xavierdhoskins@gmail.com</ContactP>
        </div>
        <div>
          <MessageImg src={MessagePic} alt="Chat Message" />
        </div>
      </FormDiv>
    </ContactPageDiv>
  );
}

export default Contact;
