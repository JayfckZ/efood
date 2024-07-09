import styled from 'styled-components'
import { colors } from '../../styles'

export const LoadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 298px);
  background-color: ${colors.begeClaro};

  .loader {
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.1s infinite ease;
    transform: translateZ(0);
  }
  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em ${colors.vermelho},
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2),
        2.5em 0em 0 0em rgba(230, 103, 103, 0.2),
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.2),
        0em 2.5em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.2),
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.5),
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.7),
        1.8em -1.8em 0 0em ${colors.vermelho},
        2.5em 0em 0 0em rgba(230, 103, 103, 0.2),
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.2),
        0em 2.5em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.2),
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.5),
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.7),
        2.5em 0em 0 0em ${colors.vermelho},
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.2),
        0em 2.5em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.2),
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.2),
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.5),
        2.5em 0em 0 0em rgba(230, 103, 103, 0.7),
        1.75em 1.75em 0 0em ${colors.vermelho},
        0em 2.5em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.2),
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.2),
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2),
        2.5em 0em 0 0em rgba(230, 103, 103, 0.5),
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.7),
        0em 2.5em 0 0em ${colors.vermelho},
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.2),
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.2),
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2),
        2.5em 0em 0 0em rgba(230, 103, 103, 0.2),
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.5),
        0em 2.5em 0 0em rgba(230, 103, 103, 0.7),
        -1.8em 1.8em 0 0em ${colors.vermelho},
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.2),
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2),
        2.5em 0em 0 0em rgba(230, 103, 103, 0.2),
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.2),
        0em 2.5em 0 0em rgba(230, 103, 103, 0.5),
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.7),
        -2.6em 0em 0 0em ${colors.vermelho},
        -1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(230, 103, 103, 0.2),
        1.8em -1.8em 0 0em rgba(230, 103, 103, 0.2),
        2.5em 0em 0 0em rgba(230, 103, 103, 0.2),
        1.75em 1.75em 0 0em rgba(230, 103, 103, 0.2),
        0em 2.5em 0 0em rgba(230, 103, 103, 0.2),
        -1.8em 1.8em 0 0em rgba(230, 103, 103, 0.5),
        -2.6em 0em 0 0em rgba(230, 103, 103, 0.7),
        -1.8em -1.8em 0 0em ${colors.vermelho};
    }
  }
`