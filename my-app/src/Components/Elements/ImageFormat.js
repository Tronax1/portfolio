import styled from 'styled-components'

export default styled.div`
    background-image: url("${props => props.image}");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -30;
    background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        overflow-y: hidden;
    @media only screen and (min-width: 768px){  
        
    }
`;