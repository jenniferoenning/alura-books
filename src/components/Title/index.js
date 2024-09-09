import styled from "styled-components"

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color2 || '#EB9B00'};
    font-size: ${props => props.sizeFont || '18px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`