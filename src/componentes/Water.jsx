import styled from "styled-components"
import backgroundPicture from './pictures/AI and water.jpg'
import Container from "./Container"
import imagenUno from './pictures/nube.png'
import imagenDos from './pictures/northamerica.png'
import imagenTres from './pictures/energia global.jpg'
import imagenCuatro from './pictures/consumoelectrico.jpg'

const Water = () => {
  
    return (
        <>
            <HeaderPicture />
            <Container className="water">
                <div className="tituloCabecera">
                    <p>Data centers are growing like weeds, and they are thirsty</p>
                    <Title className="tituloWater">Resource usage: Water and Hardware</Title>
                </div>
                <InfoContainer>
                    {cardContent.map((object,index) => (
                        <div className="row" key={index}>
                            {index %2 === 0 ? (
                                <>
                                    <Card className="cardContainer">
                                        <h2>{object.title}</h2>
                                        <p>{object.text}</p>
                                    </Card>
                                    <img src={object.imagen} className="picture"/>
                                </>
                            ) : (
                                <>
                                    <img src={object.imagen} className="picture"/>
                                    <Card className="cardContainer">
                                        <h2>{object.title}</h2>
                                        <p>{object.text}</p>
                                    </Card>                            
                                </>
                            )}
                        </div>
                    ))}

                </InfoContainer>
                <p className="reference">(Minnix, 2025b)</p>



            </Container>
        
        </>
)}

export default Water
const cardContent = [
    {title: "Main cloud providers", text:"35% of the market is held by hyperscale data centers, the largest share in the industry. These are run by cloud providers like Amazon, Google Meta, Apple and Alibaba ", imagen:imagenUno},
    {title: "Colocation vacancy", text:"Only 2.6% Was the colocation vacancy rate in North America in 2024, marking an all-time low and signaling a tightening supply of available data center space. ", imagen:imagenDos},
    {title: "Global consumption", text:"4% Of global energy consumption is driven by data centers, making them one of the most energy-intensive components of digital infrastructure. ", imagen:imagenTres},
    {title: "Market growth", text:"$7.2 – $19.1 B Is the projected growth of the edge data center market from 2021 to 2026, fueled by rising online streaming and loT adoption ", imagen:imagenCuatro},
]
const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    .row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .cardContainer{
            width: 50%;
        }
        .picture{
            width: 50%;
        }
    }
`
const Card = styled.div`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    background-color: white;
    border-radius: 10px;

`
const Title = styled.h1`
    text-align: center;
    margin-top: 3rem;
    &.secondaryTitle{
        color: black;
        margin-bottom: 2rem;
    }
`

const HeaderPicture = styled.div`
    position: absolute;
    width: 100%;
    height: 400px;
    background-image: url(${backgroundPicture});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    top: 0;
    filter: grayscale(100%) brightness(50%);
`
