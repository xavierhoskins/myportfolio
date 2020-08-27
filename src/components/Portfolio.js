import React from 'react';
import gameoflife from '../imgs/rsz_1rsz_gameoflife.png';
import githubfinder from '../imgs/github.jpg';
import bridges from '../imgs/bridges.png';
import '../App.css';

import {
  PortfolioContainer,
  PortfolioH1,
  // SectionHeaderHR,
  // ProjectSection,
  ProjectText,
  ProjectTextH2,
  ProjectTextP,
  ProjectLinkDiv,
  PortfolioButton,
  CodeLink,
  LinkIcon,
  // ProjectImage,
  // ProjectImagePic,
  // ProjectTwoSection,
  ProjectTwoImage,
  ProjectTwoImagePic,
  //   ProjectThreeImage,
  ProjectThreeImagePic,
  ProjectBox,
  HorizontalFlexBoxes,
  //   PortfolioBoxFilterButton,
  //   ResumeModal,
  //   ResumeIModalImg,
  //   HorizontalFlexFilter,
  //   ViewSiteButtonNew,
} from './StyledComponents';

const Portfolio = (props) => {
  //   const [open, setOpen] = useState(false);
  //   const [openRollin, setOpenRollin] = useState(false);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const handleOpenRollin = () => {
  //     setOpenRollin(true);
  //   };

  //   const handleCloseRollin = () => {
  //     setOpenRollin(false);
  //   };

  return (
    <PortfolioContainer id={props.id}>
      <PortfolioH1 style={{ color: 'white', marginBottom: '10px' }}>
        Projects
      </PortfolioH1>

      <HorizontalFlexBoxes>
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

            <ProjectTextP>React | Git | Canvas | JavaScript</ProjectTextP>
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

            <ProjectTextP style={{ padding: '10px 0px' }}>
              React | Git | JavaScript{' '}
            </ProjectTextP>
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
                  href="https://www.youtube.com/watch?v=0JfRVZaGeSQ"
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
              Bridges to Prosperity is a nonprfit organization dedicated to
              helping those in need travel safely. I helped maintain their
              backend.
            </ProjectTextP>

            <ProjectTextP style={{ padding: '10px 0px' }}>
              Postgres | Docker | SQL | JavaScript{' '}
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

        {/*
        <ProjectBox>
          <ProjectTwoImage>
            <ProjectTwoImagePic src={TMTpic} alt="Team Mental Training" />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>Team Mental Training Online Course</ProjectTextH2>

            <ProjectLinkDiv>
              <PortfolioButton>
                <CodeLink
                  href="https://www.teammentaltraining.com/"
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
            <ProjectTwoImagePic
              src={GCSFSpic}
              alt="Global Cyber Security Summit"
            />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>2018 Global Cybersecurity Summit</ProjectTextH2>

            <ProjectLinkDiv>
              <ViewSiteButtonNew type="button" onClick={handleOpen}>
                View Site Design
              </ViewSiteButtonNew>
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogContent className="dialog-content">
                  <ResumeModal onClick={handleClose}>
                    <ResumeIModalImg
                      src={GCSFSmain}
                      alt="2018 Global CyberSecurity Website Design"
                    />
                  </ResumeModal>
                </DialogContent>
              </Dialog>
            </ProjectLinkDiv>
          </ProjectText>
        </ProjectBox>

        <ProjectBox>
          <ProjectTwoImage>
            <ProjectTwoImagePic src={Rollinpic} alt="Rollin Premier" />
          </ProjectTwoImage>
          <ProjectText>
            <ProjectTextH2>Rollin Premier Crypto Trading Group</ProjectTextH2>

            <ProjectLinkDiv>
              <ViewSiteButtonNew type="button" onClick={handleOpenRollin}>
                View Site Design
              </ViewSiteButtonNew>
              <Dialog
                onClose={handleCloseRollin}
                aria-labelledby="customized-dialog-title"
                open={openRollin}
              >
                <DialogContent className="dialog-content">
                  <ResumeModal onClick={handleCloseRollin}>
                    <ResumeIModalImg
                      src={Rollinmain}
                      alt="Rollin Premier Website Design"
                    />
                  </ResumeModal>
                </DialogContent>
              </Dialog>
            </ProjectLinkDiv>
          </ProjectText>
        </ProjectBox> */}
      </HorizontalFlexBoxes>
    </PortfolioContainer>
  );
};

export default Portfolio;
