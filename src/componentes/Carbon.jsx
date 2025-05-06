import styled from "styled-components"
import Container from './Container'
import backgroundPicture from './pictures/footPrint.png'
import { CiBookmarkCheck as CheckIcon } from "react-icons/ci";
import imagenUno from './pictures/adaptability.jpg'
import imagenDos from './pictures/geograpy.png'
import imagenTres from './pictures/modelIA.png'
import imagenCuatro from './pictures/methane.png'
import imagenCinco from './pictures/capturecarbon.png'
import imagenSeis from './pictures/carbonocero.jpg'
import imagenSiete from './pictures/bajocarbono.jpg'
import imagenOcho from './pictures/reducir.png'
import footerPic from './pictures/footerCarbon.JPG'
import MainTitle from "./MainTitle";
import MiddleCard from "./MiddleCard";

const Carbon = () => {
  
    return (
        <>
            <HeaderPicture />
            <MainTitle texto="Let’s start with carbon footprint, what is it?" color="#55ff00" />
            
            <NormalContainer>
                <div className="innerContainer">

                    <div className="righter">
                        <p className="prefix">(Selin & Eckley, 2025)</p>
                        <h2>Encyclopedia Britannica states:</h2>
                    </div>
                    <div className="lefter">
                        <p>Carbon footprint is “the amount of carbon dioxide (CO2) emissions associated with all the activities of a person or other entity (e.g., building, corporation, country, etc.). It includes direct emissions, such as those that result from fossil-fuel combustion in manufacturing, heating, and transportation, as well as emissions required to produce the electricity associated with goods and services consumed.</p>
                        <p className="subText">In addition, the carbon footprint concept also often includes the emissions of other greenhouse gases, such as methane, nitrous oxide, or chlorofluorocarbons (CFCs).” In conclusion is the Co2 we left behind every single activity we do.</p>
                    </div>
                    

                </div>
                


            </NormalContainer>
            <Container className="carbon">
                <div className="title2">
                    <p>(DAKA, 2024)</p>

                    <Subtitle color="red">So, how does AI carbon footprint impact our environment?</Subtitle>
                </div>
                <div className="rower">
                    <div className="texter ">
                        <h3>The Hidden Cost</h3>
                        <p>We need to take into account that even though this tool is really helpful at all means, it has a huge gap regarding on how it affects our planet, for example, according to a research from cornell university “ estimates that just training GPT-3 alone produced 552 tons of carbon dioxide (the equivalent of what 120 gasoline-powered cars would emit in a year).</p>
                    </div>
                    <div className="texter righter">
                        <h3>Daily Emissions Surge</h3>
                        <p>And that’s just for getting the model up and running. With millions of users accessing ChatGPT daily, energy consumption skyrockets”. Also “Each message sent to ChatGPT produces approximately 4.32 grams of CO2, according to ML CO2 Impact, an emissions calculator. For reference, one Google search emits only 4% of that, 0.2 grams”</p>
                    </div>

                </div>
                <div className="underRower">
                    <p>Of course, if we compare this footprint with other ones as gas or oil is not that much, but still there is a gap of opportunity and responsibility from AI companies to build a way for these machines to be less impactful on our planet. </p>
                </div>
                <InfoCard >
                    <CheckIcon size={40}/>
                    <h1 className="titulo neonTitleWhite">What are the initiatives to reduce it in the future?</h1>
                    <p>Part of a forecast and projection of energy demand, it is estimated that data centers could be producing more than the double by 2030. (Boston Consulting Group). </p>
                    <p>It is important that we as society start to build a strong sense or urgency around the initiatives to resolve this, because at the end even though we don’t see it right now, is going to be a problem for us, every single year we are running out of our natural resources, there for, we need to demand a long run solution or at least initiatives.  </p>
                    <p className="reference">(Understanding the Carbon Footprint of AI and How to Reduce It | Carbon Direct, n.d.)</p>


                </InfoCard>

                <Subtitle className="second" color="#D8B7FF">Here are some initiatives running at the moment</Subtitle>

                <InititativesContainer>
                    {cardContent.map((object, index) => (
                        <div className="row" key={index}>
                            {index %2 === 0 ? (
                                <>
                                    <Card className="cardContainer impar">
                                        <p className="prefix">{object.prefix}</p>
                                        <h2>{object.title}</h2>
                                        <p>{object.text}</p>
                                    </Card>
                                    <img src={object.imagen} className="picture" />
                                </>
                            ) : (
                                <>
                                    <img src={object.imagen} className="picture" />
                                    <Card className="cardContainer par">
                                        <p className="prefix">{object.prefix}</p>
                                        <h2>{object.title}</h2>
                                        <p>{object.text}</p>
                                    </Card>
                                </>
                            )}
                        </div>                        
                    ))}

                </InititativesContainer>
                <p className="reference">(Power Moves: How CEOs Can Achieve Both AI and Climate Goals, 2024)</p>
            </Container>

            <MiddleCard 
            bigText="These are used to lower temperature of data center. Hydro power is one of the main bases to control it."
            smallText="The main resource for the ai is electricity and water"
            color="#55ff00"
            backgroundPicture={footerPic}
            />
        </>
)}

export default Carbon

const Subtitle = styled.h1`
    color: #dedddd;
    &.second{
        font-size: 3rem;
        color: #8135eb;
        margin-bottom: 2rem;
    }
    text-shadow:
      0 0 5px ${props => props.color || '#00ff00'},
      0 0 10px ${props => props.color || '#00ff00'},
      0 0 20px ${props => props.color || '#00ff00'},
      0 0 40px ${props => props.color || '#00ff00'},
      0 0 80px ${props => props.color || '#00ff00'};
    animation: flicker 3s infinite;

    @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 1;
    }
    20%, 24%, 55% {
      opacity: 0.4;
    }
  }
`

const InfoCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 3rem 0;
    gap: 2rem;
    transition: transform 0.3s ease-in-out, box-shadow 0.2s ease;
    padding: 2rem;
    border-radius: 10px;

    &:hover{
        box-shadow:
            0 0 5px #4ca3af,
            0 0 10px #4ca3af,
            0 0 20px #4ca3af,
            0 0 30px #4ca3af;
        transform: scale(1.05);
    }
    
    .titulo{
        color: black;
        text-align: center;
    }

    .reference{
        font-style: italic;
    }
    p{
        text-align: center;
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
const NormalContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    background-color: #F2F0FE;
    display: flex;
    justify-content: center;

    .innerContainer{
        width: 80%;
        height: fit-content;
        padding: 5rem;
        display: flex;
        justify-content: space-between;

        .righter{
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            .prefix{
                color: #7219BF;
                font-weight: bold;
            }
        }
        .lefter{
        width: 60%;
        font-size: 1.2rem;
            .subText{
                margin-top: 2rem;
                font-size: 1rem;
            }
        }
    }

`
const InititativesContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;

    .row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease, background 0.3s ease;
        &:hover{
            background: #BA55D3;
            box-shadow:
                0 0 5px #BA55D3,
                0 0 10px #BA55D3,
                0 0 15px #BA55D3;
            transform: scale(1.05);
        }
        .cardContainer{
            width: 50%;
            &.impar,&.par{
                padding-left: 2rem;
            }
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
    .prefix{
        color: #7219BF;
        font-weight: bold;
    } 
`
const cardContent = [
    {
        prefix: 1,
        title: "Adapt technology architecture",
        text: "Chipmakers and server designers are improving energy efficiency by integrating memory onto chips, hard-wiring basic calculations, and minimizing internal data transfers, achieving up to 96% energy savings.",
        imagen: imagenUno
    },
    {
        prefix: 2,
        title: "Optimize training geography.  ",
        text: "Training AI models in regions with abundant low-carbon electricity and routing user requests through cleaner grids can significantly cut emissions with minimal impact on performance.",
        imagen: imagenDos
    },
    {
        prefix: 3,
        title: "Select appropriately sized models.",
        text: "Using smaller, efficient AI models for tasks like ChatGPT queries can deliver similar quality with far less energy consumption compared to large models.",
        imagen: imagenTres
    },
    {
        prefix: 4,
        title: "Address fugitive methane emissions.",
        text: "Reducing methane leaks during natural gas production—supported by AI monitoring tools—can drastically cut greenhouse gas emissions from future electricity sources for data centers.",
        imagen: imagenCuatro
    },
    {
        prefix: 5,
        title: "Use carbon capture on power plants.",
        text: "Capturing and storing emissions from natural gas power plants can reduce their carbon output by 95–100%, helping supply low-carbon electricity for AI operations.",
        imagen: imagenCinco
    },
    {
        prefix: 6,
        title: "Add more zero-carbon to the grid. ",
        text: "Accelerating the connection of solar, wind, and battery projects to the grid—and using AI to streamline regulatory processes—can expand clean energy access.",
        imagen: imagenSeis
    },
    {
        prefix: 7,
        title: "Invest in low-carbon building materials.e",
        text: "Significant investment is needed to develop low-carbon materials like steel, concrete, and chips, reducing the embodied emissions of new data centers.",
        imagen: imagenSiete
    },
    {
        prefix: 8,
        title: "Increase carbon dioxide removals. ",
        text: "Unavoidable emissions from AI operations should be offset through high-durability carbon removal projects based on full life-cycle emissions analysis.",
        imagen: imagenOcho
    },
]