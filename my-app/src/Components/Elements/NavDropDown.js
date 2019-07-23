import styled from 'styled-components'

export default styled.div`
    @keyframes vision {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
    position: fixed;
    margin-top: 43px;
    background: black;
    z-index: 9999;
    border-top: solid;
    border-top-color: rgb(100, 100, 100);
    opacity: 0;
    animation: vision 0.25s ease-in 0s 1 forwards;
    @media only screen and (min-width: 768px){
        display: none;
    }
`;