import styled from 'styled-components';

export default styled.div`
    position: fixed;
    top: 0;
    box-sizing: border-box;
    justify-content: center;
    background: rgb(8, 7, 7);
    height: 50px;
    width: 100%;
    z-index: 9999;
    
    @media only screen and (min-width: 768px){
        height: 100%;
        width: 100px;
    }
`;