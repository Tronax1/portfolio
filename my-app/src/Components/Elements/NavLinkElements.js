import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default styled(NavLink)`
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(170, 180, 180);
    text-decoration-line: none;
    &:active{
        background: white;
    }
    &:hover{
        background: white;
        transition: 0.5s
    }
    @media only screen and (min-width: 768px){
        padding: 1.5rem;
        border-radius: 7%;
        color: rgb(170, 180, 180);
        text-decoration-line: none;
        &:hover{
            color: black;
            background-color: white;
            transition: 0.5s;
        }
    }
`;