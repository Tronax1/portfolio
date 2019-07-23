import styled from 'styled-components';

export default styled.button`
    position: fixed;
    top: 0;
    right: 0;
    height: 2.5rem;
    width: 2.5rem;
    background: black;
    margin-right: 10px;
    margin-top: 3px;
    border-radius: 15%;
    &:active{
        background: white;
    }
    &:focus{
        outline: 0;
    }
    @media only screen and (min-width: 768px){
        display: none;
    }
`;