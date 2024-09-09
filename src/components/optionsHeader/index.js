import styled from 'styled-components';

const Options = styled.ul`
    display: flex;
    align-self: center;
`

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    height: 100%;
    padding: 0px 5px;
    cursor: pointer;
`

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function optionsHeader () {
    return (
        <Options>
            { textOptions.map( (texto) => (
            <Option><p>{texto}</p></Option>
            ) ) }
        </Options>
    )
}

export default optionsHeader