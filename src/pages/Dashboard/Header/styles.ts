import styled from 'styled-components';

export const Container = styled.div`
  background: #333;
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
`;
