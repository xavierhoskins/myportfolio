import React from 'react';

import ProfileImg from '../imgs/Xavier_Hoskins.png';
import '../App.css';
import {
  ContactPage,
  ProfileSection,
  ProfileH1,
  Profile,
  ProfileImgDiv,
  ProfileImgTag,
  SocialLinkDiv,
  ProfileH3,
  ProfileInfoDiv,
  InfoP,
  IconLink,
  ProfileName,
  CityState,
  ProfileNameHR,
  SocialTag,
} from './StyledComponents';

function AboutMe(props) {
  return (
    <ContactPage id={props.id}>
      <ProfileSection>
        <div>
          <ProfileH1>About Me</ProfileH1>
        </div>
      </ProfileSection>
      <Profile>
        <ProfileImgDiv>
          <ProfileImgTag src={ProfileImg} alt="Xavier Hoskins" />
          <ProfileName>Xavier Hoskins</ProfileName>
          <ProfileNameHR />
          <SocialLinkDiv>
            <SocialTag
              style={{ textDecoration: 'none' }}
              href="https://github.com/xavierhoskins"
              target="_blank"
            >
              <i style={{ color: 'white' }} className="fab fa-github-square" />
            </SocialTag>
            <SocialTag
              style={{ textDecoration: 'none' }}
              href="https://www.linkedin.com/in/xavier-hoskins/"
              target="_blank"
            >
              <i style={{ color: 'white' }} className="fab fa-linkedin" />
            </SocialTag>
            <IconLink
              to="section6"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <i
                style={{ fontSize: '3rem', color: 'white' }}
                className="fas fa-envelope"
              />
            </IconLink>
          </SocialLinkDiv>
          <ProfileH3>Full Stack Web Developer</ProfileH3>
          <CityState>Saint Louis, Missouri</CityState>
        </ProfileImgDiv>
        <ProfileInfoDiv>
          <InfoP>
            I am a Full Stack Web Developer with a passion for solving problems
            and creating innovative web solutions.
          </InfoP>
          <InfoP>
            I am grateful for the chance to have studied Full Stack Web
            Development with some of the best web development instructors in the
            world at Lambda School.
          </InfoP>
          <InfoP>i need to insert something here.</InfoP>
        </ProfileInfoDiv>
      </Profile>
    </ContactPage>
  );
}

export default AboutMe;
