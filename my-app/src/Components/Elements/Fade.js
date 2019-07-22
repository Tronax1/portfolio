import styled from 'styled-components';

export default styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: appear 0.8s ease-in 0s 1 forwards;
    background-color: black;

    @keyframes appear {
        0% {
            opacity: 1;
            z-index: 10;
        }

        100% {
            opacity: 0;
            z-index: -1;
        }
    }
`;