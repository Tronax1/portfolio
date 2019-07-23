import styled from 'styled-components'
import NavLinkElements from '../Elements/NavLinkElements'

export default styled(NavLinkElements)`
    padding-left: 40%;
    padding-right: 40%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 150%;
    border-radius: 7%;
    @media only screen and (min-width: 768px){
        position: absolute;
        top: 0;
        font-size: 100%;
        padding: 1.2rem;
        width: 100%;
        text-align: center;
    }
`;