import React from 'react';
import { BiWorld } from 'react-icons/bi';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Container, Navbar, Container2, Ul } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar>
          <BiWorld />
          <Ul>
            <li>
              <button type="button">Home</button>
            </li>
            <li>
              <button type="button">About</button>
            </li>
            <li>
              <button type="button">Portfolio</button>
            </li>
            <li>
              <button type="button">Contact</button>
            </li>
          </Ul>
        </Navbar>
      </Container>
      <Container2>
        <Navbar>
          <Accordion className="Accordion">
            <AccordionSummary
              className="AccordionSummary"
              expandIcon={<ExpandMoreIcon />}
            >
              <p>
                <BiWorld />
              </p>
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
              <Ul>
                <li>
                  <button type="button">Home</button>
                </li>
                <li>
                  <button type="button">About</button>
                </li>
                <li>
                  <button type="button">Portfolio</button>
                </li>
                <li>
                  <button type="button">Contact</button>
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
