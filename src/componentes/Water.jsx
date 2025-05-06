import styled from "styled-components"
import { FaQuoteLeft as QuoteIcon } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaBalanceScale } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import backgroundPicture from './pictures/AI and water.jpg'
import Container from "./Container"
import imagenUno from './pictures/nube.png'
import imagenDos from './pictures/northamerica.png'
import imagenTres from './pictures/energia global.jpg'
import imagenCuatro from './pictures/consumoelectrico.jpg'
import imagenContenedorUno from './pictures/aiMano.PNG'
import imagenContenedorDos from './pictures/ingeAgua.PNG'
import backgroundFooter from './pictures/AI-water.png'
import MainTitle from "./MainTitle";
import MiddleCard from "./MiddleCard";

const Water = () => {
  
    return (
        <>
            <HeaderPicture />
            <Container className="water">
                <div className="tituloCabecera">
                    <p>Data centers are growing like weeds, and they are thirsty</p>
                    <MainTitle texto="Resource usage: Water and Hardware" color="#00fff2" />
            
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
                <Container className="phraseCont">
                    <QuoteIcon size={40}/>
                    <h2>“Artificial intelligence doesn’t run on magic; it runs on electricity.”</h2>
                    <p>– Kate crawford, principal investigator of microsoft research and “Atlas of ai” author</p>
                    <hr />

                </Container>
                <h1 className="secondaryTitle">The Growth of Data Centers and Its Water Impact</h1>
                <CardContainer className="cardContainers">
                    <Card className="cardInformative">
                        <FaEarthAmericas size={30}/>
                        <h3>Data centers globally</h3>
                        <p>There are currently more than 11,000 data centers in the world.</p>
                    </Card>
                    <Card className="cardInformative">
                        <FaHandHoldingWater size={30}/>
                        <h3>Water consumption</h3>
                        <p>Predicted increase in global AI water consumption to between 4.2 and 6.6 billion m³ by 2027.</p>
                        
                    </Card>
                    <Card className="cardInformative">
                        <TiWeatherPartlySunny size={30}/>
                        <h3>Climate change</h3>
                        <p>Challenges posed by climate change: heat waves, droughts, and water availability.</p>
                        
                    </Card>


                </CardContainer>
                <Container className="rower">
                    <img src={imagenContenedorUno} />
                    <Card className="rowerText">
                        <FaBalanceScale size={30}/>
                        <h2>Transparency for Better Resource Management</h2>
                        <p>New regulations seek to make AI’s environmental impact more transparent, helping companies manage resources better and reduce strain on vulnerable regions.</p>
                        <p>U.S. and Europe aim to increase transparency around AI’s environmental impact. The U.S. Artificial Intelligence Environmental Impacts Act of 2024 and the EU’s upcoming AI Act will require developers to report energy use, resource consumption, and emissions, helping companies manage resources responsibly and lessen the environmental strain on vulnerable regions</p>
                        <p className="reference">(Grainger Engineering Office of Marketing and Communications, n.d.)</p>
                    </Card>
                </Container>
                <Container className="rower">
                    <Card className="rowerText">
                        <FaFlag size={30}/>
                        <h2>Challenges in Tracking Water Usage</h2>
                        <p>In recent years, efforts to make data centers more sustainable have mainly focused on reducing greenhouse gas emissions and boosting energy efficiency, driven by ESG goals and the push for net zero. However, water consumption, another critical environmental issue, has received far less attention and few regulatory incentives.</p>
                        <p>Tracking water usage in data centers remains difficult due to a lack of transparency and consistent reporting. Unlike carbon emissions, water consumption is rarely monitored or disclosed systematically across the industry.</p>
                        <p>Even AI model cards, which are designed to inform users about the environmental impact of AI models, usually cover energy-related carbon footprints but omit important details about water usage, leaving a major gap in understanding AI’s full environmental cost.</p>
                        <p className="reference">(Grainger Engineering Office of Marketing and Communications, n.d.)</p>
                    </Card>
                    <img src={imagenContenedorDos} />
                </Container>
                
            </Container>

            <MiddleCard 
            bigText='"The development of full artificial intelligence could spell the end of the human race."'
            smallText="— Stephen Hawking"
            color="#00fff2"
            backgroundPicture={backgroundFooter}
            />


        
        </>
)}

export default Water
const cardContent = [
    {title: "Main cloud providers", text:"35% of the market is held by hyperscale data centers, the largest share in the industry. These are run by cloud providers like Amazon, Google Meta, Apple and Alibaba ", imagen:imagenUno},
    {title: "Colocation vacancy", text:"Only 2.6% Was the colocation vacancy rate in North America in 2024, marking an all-time low and signaling a tightening supply of available data center space. ", imagen:imagenDos},
    {title: "Global consumption", text:"4% Of global energy consumption is driven by data centers, making them one of the most energy-intensive components of digital infrastructure. ", imagen:imagenTres},
    {title: "Market growth", text:"$7.2 – $19.1 B Is the projected growth of the edge data center market from 2021 to 2026, fueled by rising online streaming and loT adoption ", imagen:imagenCuatro},
]
const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 2rem;
`
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
            transition: transform 0.3s ease-in-out,box-shadow 0.3s ease, background 0.3s ease;
            &:hover{
                transform: scale(1.05);
                background: #00BFFF;
                box-shadow:
                    0 0 5px #00BFFF,
                    0 0 10px #00BFFF,
                    0 0 15px #00BFFF;
            }
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
