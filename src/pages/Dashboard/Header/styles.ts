import styled from 'styled-components';

export const Container = styled.div`
  background: #001f54;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  display: flex;
  justify-content: center;

  div {
    padding-left: 0.8em;
  }

  div h1 {
    color: #fff;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(30, end), blink-caret 1.1s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }

  @media (max-width: 730px) {
    div h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 455px) {
    div h1 {
      font-size: 10px;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  color: #fff;

  position: absolute;
  right: 0;
  top: 74px;

  svg {
    font-size: 30px;
    margin: 0.1em;
  }

  @media (max-width: 730px) {
    top: 66px;

    svg {
      font-size: 26px;
    }
  }

  @media (max-width: 455px) {
    top: 64px;

    svg {
      font-size: 20px;
    }
  }

  &:hover {
    Span {
      opacity: 1;
      transition: opacity 0.4s;
      visibility: visible;
    }
  }
`;

export const Span = styled.span`
  opacity: 0;
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 110%;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }
`;
