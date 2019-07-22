import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 768px){
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
    }
`;