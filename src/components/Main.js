import React from 'react';
import '../App.css';
import keyboard from '../imgs/keyboard.png';
import {
  HeroSection,
  SlideTitleDiv,
  FirstSlideTitle,
  FirstSlideTagline,
  FirstSlideTaglineText,
  Keyboard,
  TitleDiv,
  VerticalAlign,
  SocialTagHero,
  RowDiv,
  SocialTagLink,
} from './StyledComponents';

const Main = (props) => {
  return (
    <HeroSection id={props.id}>
      <SlideTitleDiv>
        <VerticalAlign>
          <TitleDiv>
            <FirstSlideTitle>Xavier Hoskins</FirstSlideTitle>
          </TitleDiv>
          <FirstSlideTagline>
            <FirstSlideTaglineText>
              <i style={{ color: 'white' }} className="fas fa-code"></i>Web
              Developer
            </FirstSlideTaglineText>
            <FirstSlideTaglineText>
              <i style={{ color: 'white' }} className="fas fa-coffee" />
              Coffee Enthusiast
            </FirstSlideTaglineText>
            <FirstSlideTaglineText>
              <i style={{ color: 'white' }} className="fas fa-headphones" />
              Music Lover
            </FirstSlideTaglineText>
            <RowDiv>
              <SocialTagHero
                href="https://github.com/xavierhoskins"
                target="_blank"
              >
                <i
                  style={{ color: 'white' }}
                  className="fab fa-github-square"
                />
              </SocialTagHero>
              <SocialTagHero
                href="https://www.linkedin.com/in/xavier-hoskins/"
                target="_blank"
              >
                <i style={{ color: 'white' }} className="fab fa-linkedin" />
              </SocialTagHero>
              <SocialTagLink
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <i style={{ color: 'white' }} className="fas fa-envelope" />
              </SocialTagLink>
            </RowDiv>
          </FirstSlideTagline>
        </VerticalAlign>
        <div>
          <Keyboard src={keyboard} alt="keyboard" />
        </div>
      </SlideTitleDiv>
    </HeroSection>
  );
};

export default Main;
