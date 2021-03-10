/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect, useRef } from 'react';
import { BiWorld } from 'react-icons/bi';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';

import { Container, Navbar, Container2, Ul, MiniNavBar } from './styles';

const Header: React.FC = () => {
  const miniNavbarRef = useRef<HTMLInputElement>(null);

  const [closeMenu, setCloseMenu] = useState(0);
  // useEffect(() => {
  //   if (closeMenu === 1 && intireSiteRef?.current?.click()) {
  //     setCloseMenu(0);
  //     miniNavbarRef?.current?.click();
  //   }
  // }, [closeMenu]);

  return (
    <>
      <Container>
        <Navbar>
          <BiWorld />
          <Ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy
                smooth
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy
                smooth
                offset={0}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy
                smooth
                offset={0}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </Ul>
        </Navbar>
      </Container>
      <Container2>
        <Navbar>
          <Accordion className="Accordion">
            <MiniNavBar
              type="button"
              onClick={() =>
                closeMenu === 0 ? setCloseMenu(1) : setCloseMenu(0)
              }
            >
              <AccordionSummary
                id="MiniAccordionSummary"
                className="AccordionSummary"
                ref={miniNavbarRef}
                expandIcon={<ExpandMoreIcon />}
              >
                <p>
                  <BiWorld />
                </p>
              </AccordionSummary>
            </MiniNavBar>
            <AccordionDetails className="AccordionDetails">
              <Ul>
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy
                    smooth
                    offset={0}
                    duration={500}
                    onClick={() => miniNavbarRef?.current?.click()}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy
                    smooth
                    offset={0}
                    duration={500}
                    onClick={() => miniNavbarRef?.current?.click()}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy
                    smooth
                    offset={0}
                    duration={500}
                    onClick={() => miniNavbarRef?.current?.click()}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy
                    smooth
                    offset={0}
                    duration={500}
                    onClick={() => miniNavbarRef?.current?.click()}
                  >
                    Contact
                  </Link>
                </li>
              </Ul>
            </AccordionDetails>
          </Accordion>
        </Navbar>
      </Container2>
    </>
  );
};

export default Header;
