import React from 'react';
import gameoflife from '../imgs/gameoflife.jpg';
import githubfinder from '../imgs/github.jpg';
import bridges from '../imgs/bridges.png';
import shopshop from '../imgs/shopshop.jpg';
import '../App.css';

import {
  PortfolioContainer,
  PortfolioH1,
  ProjectText,
  ProjectTextH2,
  ProjectTextP,
  ProjectLinkDiv,
  PortfolioButton,
  CodeLink,
  LinkIcon,
  ProjectTwoImage,
  ProjectTwoImagePic,
  ProjectThreeImagePic,
  ProjectBox,
  HorizontalFlexBoxes,
} from './StyledComponents';

const Portfolio = (props) => {
  return (
    <PortfolioContainer id={props.id}>
      <PortfolioH1 style={{ color: 'white', marginBottom: '10px' }}>
        Projects
      </PortfolioH1>

      <HorizontalFlexBoxes>
        <ProjectBox>
          <ProjectTwoImage>
            <ProjectTwoImagePic src={shopshop} alt="ShopShop" />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>ShopShop</ProjectTextH2>
            <ProjectTextP>
              A MERN stack E-Commerce application with payment processing
              integration via PayPal API.
            </ProjectTextP>

            <ProjectTextP style={{ padding: '10px 0px' }}>
              React | MongoDB | Express | Node.js{' '}
            </ProjectTextP>
            <ProjectLinkDiv>
              <PortfolioButton>
                <CodeLink
                  href="https://github.com/xavierhoskins/ShopShop-Core"
                  target="_blank"
                >
                  <LinkIcon
                    style={{ marginRight: '0px' }}
                    className="fab fa-github"
                  />
                  View the Code
                </CodeLink>
              </PortfolioButton>
              <PortfolioButton>
                <CodeLink
                  href="https://shopshop-core.herokuapp.com/"
                  target="_blank"
                >
                  Official Website
                </CodeLink>
              </PortfolioButton>
            </ProjectLinkDiv>
          </ProjectText>
        </ProjectBox>

        <ProjectBox>
          <ProjectTwoImage>
            <ProjectThreeImagePic src={gameoflife} alt="Game of Life Logo" />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>Game of Life</ProjectTextH2>
            <ProjectTextP>
              The Game of Life is a cellular automaton devised by the British
              mathematician John Horton Conway in 1970.
            </ProjectTextP>

            <ProjectTextP>React</ProjectTextP>
            <ProjectLinkDiv>
              <PortfolioButton>
                <CodeLink
                  href="https://github.com/xavierhoskins/Game-Of-Life"
                  target="_blank"
                >
                  <LinkIcon
                    style={{ marginRight: '0px' }}
                    className="fab fa-github"
                  />
                  View the Code
                </CodeLink>
              </PortfolioButton>
              <PortfolioButton>
                <CodeLink
                  href="https://game-of-life-xavier.netlify.app"
                  target="_blank"
                >
                  Official Website
                </CodeLink>
              </PortfolioButton>
            </ProjectLinkDiv>
          </ProjectText>
        </ProjectBox>

        <ProjectBox>
          <ProjectTwoImage>
            <ProjectTwoImagePic src={githubfinder} alt="Github Finder" />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>Github Finder</ProjectTextH2>
            <ProjectTextP>
              An application that allows the search and display of all the
              github users connected to the api. Shows the users bio when
              selected.
            </ProjectTextP>

            <ProjectTextP style={{ padding: '10px 0px' }}>React</ProjectTextP>
            <ProjectLinkDiv>
              <PortfolioButton>
                <CodeLink
                  href="https://github.com/xavierhoskins/ghfinder"
                  target="_blank"
                >
                  <LinkIcon
                    style={{ marginRight: '0px' }}
                    className="fab fa-github"
                  />
                  View the Code
                </CodeLink>
              </PortfolioButton>
              <PortfolioButton>
                <CodeLink
                  href="https://xaviersgithubfinder.netlify.app/"
                  target="_blank"
                >
                  Official Website
                </CodeLink>
              </PortfolioButton>
            </ProjectLinkDiv>
          </ProjectText>
        </ProjectBox>

        <ProjectBox>
          <ProjectTwoImage>
            <ProjectTwoImagePic src={bridges} alt="Bridges to Prosperity" />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>Bridges to Prosperity</ProjectTextH2>
            <ProjectTextP>
              Bridges to Prosperity is a nonprofit organization dedicated to
              helping those in need travel safely. I helped maintain their
              backend.
            </ProjectTextP>

            <ProjectTextP style={{ padding: '10px 0px' }}>
              PostgreSql | Docker | Express | React' '}
            </ProjectTextP>
            <ProjectLinkDiv>
              <PortfolioButton>
                <CodeLink
                  href="https://github.com/xavierhoskins/Labs25-Bridges_to_Prosperity-TeamB-be"
                  target="_blank"
                >
                  <LinkIcon
                    style={{ marginRight: '0px' }}
                    className="fab fa-github"
                  />
                  View the Code
                </CodeLink>
              </PortfolioButton>
              <PortfolioButton>
                <CodeLink
                  href="https://bridges-to-prosperity-core.herokuapp.com/bridges/"
                  target="_blank"
                >
                  Official Website
                </CodeLink>
              </PortfolioButton>
            </ProjectLinkDiv>
          </ProjectText>
        </ProjectBox>
      </HorizontalFlexBoxes>
    </PortfolioContainer>
  );
};

export default Portfolio;
