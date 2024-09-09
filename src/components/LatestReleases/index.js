import { books } from "./dataLatestReleases"
import styled from "styled-components"
import { Title } from "../Title"
import CardRecommend from "../CardRecommend/index.js"
import imageBook from "../../images/book2.png"

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewsBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return [
        <LatestReleasesContainer>
            <Title 
                color2="#EB9B00" 
                sizeFont="36px" 
                align="center"
            >
                ULTIMOS LANCAMENTOS
            </Title>
            <NewsBooksContainer>
                { books.map( book => (
                    <img src={book.src} alt="Livros"/>
                ) ) }
            </NewsBooksContainer>
            <CardRecommend 
                title="Talvez você se interesse por..."
                subtitle="Angular 11"
                description="Construindo uma aplicação integrada com a plataforma Google."
                img={imageBook}
           />
        </LatestReleasesContainer>
    ]
}

export default LatestReleases