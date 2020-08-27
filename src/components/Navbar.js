import React from 'react';

import {
  NavSection,
  LeftNav,
  NavLinks,
  RightNav,
  SocialTag,
  SocialTagLink,
} from './StyledComponents';

const Nav = () => {
  return (
    <NavSection>
      <LeftNav>
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
        <SocialTagLink
          to="section6"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i style={{ color: 'white' }} className="fas fa-envelope" />
        </SocialTagLink>
      </LeftNav>
      <RightNav>
        <NavLinks
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
        >
          Home
        </NavLinks>
        <NavLinks
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          Projects
        </NavLinks>
        <NavLinks
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
        >
          About Me
        </NavLinks>
        <NavLinks
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </NavLinks>
      </RightNav>
    </NavSection>
  );
};

export default Nav;
