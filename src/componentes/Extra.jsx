import styled from "styled-components"
import backgroundPicture from './pictures/headerWaste.jpg'
import Container from "./Container"
import minerales from './pictures/minerales.jpg'
import reunion from './pictures/reunion.jpg'
import chain from './pictures/chain.jpg'
import FlipCard from "./FlipCard"
// import backgroundFooter from './pictures/wasteFooter.png'
import backgroundFooter from './pictures/footerPicWaste.jpg'
import MainTitle from "./MainTitle"
import MiddleCard from "./MiddleCard"

const Waste = () => {
    
    return (
        <>
            <HeaderPicture />
            <MainTitle texto="E-Waste and AI: The Hardware Behind the Intelligence" color="#ff0000" />
            <Container className="wasteHeader">
                <p>Artificial Intelligence may feel like it is all in the “cloud”, but it is powered by real physical machines. These machines have an environmental cost not just when they are running, but even before they are built and long after they are thrown away.</p>
                <h4>Let us take a closer look at how hardware contributes to AI's environmental footprint</h4>
            </Container>
            <Container>
                <Title className="secondaryTitle">The Environmental Toll of Hardware Production</Title>
                <p style={{textAlign:"center"}}>AI systems depend on high-performance hardware like GPUs and TPUs that require large amounts of energy and raw materials to manufacture.</p>
            </Container>
            <Container className="waste">
                <div className="bubbleContainer uno">    
                    <BubbleBox className="bubbleBox">
                        <h3>Rare Earth Metals</h3>
                        <p>
                        Key components like cobalt, lithium, and tantalum are used in processors and batteries. Mining these materials often involves deforestation, water pollution, and dangerous working conditions especially in places like the Democratic Republic of Congo, where most of the world’s cobalt is sourced.
                        </p>
                    </BubbleBox>
                    <div className="image-container">
                        <img src={minerales} alt="" />
                    </div>
                </div>

                <div className="bubbleContainer inverted dos">
                    <div className="image-container">
                        <img src={reunion} alt="" className="inverted"/>
                    </div>
                    <BubbleBoxInverted className="bubbleBox">

                        <h3>High Energy Manufacturing</h3>
                        <p>
                        The process of fabricating chips requires ultrapure water, cleanroom environments, and energy intensive techniques like photolithography. Manufacturing a single high-end GPU can generate hundreds of kilograms of CO₂ before it ever reaches a data center.
                        </p>
                        
                    </BubbleBoxInverted>
                </div>

                <div className="bubbleContainer tres">    
                    <BubbleBox className="bubbleBox">
                        <h3>Global Supply Chains</h3>
                        <p>
                        The materials and parts used in AI hardware often travel through many countries, increasing emissions from international transportation and packaging.
                        </p>
                    </BubbleBox>
                    <div className="image-container">
                        <img src={chain} alt="" />
                    </div>
                </div>

            </Container>
            <p>(Amnesty International, 2021)</p>
            <Reference className="second">(Power Moves: How CEOs Can Achieve Both AI and Climate Goals, 2024)</Reference>
            <Separator />
            <Container >
                <Title className="secondaryTitle">E-Waste: A Growing Problem</Title>
                <p>E-waste is one of the fastest-growing waste streams globally and AI is adding to the pressure</p>
                <CardContainer className="problemWaste">
                    <Card>
                        <h3>Rapid Obsolescence</h3>
                        <p>AI advances quickly, and so does the demand for more powerful processors. Hardware that is only a few years old can become outdated, especially in large-scale AI training facilities and data centers. </p>
                    </Card>
                    <Card>
                        <h3>Low Recycling Rates</h3>
                        <p>Only about 17.4% of global e-waste was documented as formally collected and recycled in 2019 (UN Global E-waste Monitor). Most ends up in landfills or is informally dismantled in developing countries, where toxic materials like lead, mercury, and cadmium can leach into the environment. </p>
                    </Card>
                    <Card>
                        <h3>Data Center Waste</h3>
                        <p>Beyond consumer electronics, massive AI data centers retire thousands of servers and storage units regularly. Without a recycling infrastructure, these contribute significantly to industrial e-waste. </p>
                    </Card>

                </CardContainer>
            </Container>
            
            <Reference className="second">(Chemical Safety and Health Unit (CHE), 2021)</Reference>
            <Reference className="second">Forti et al. (2020)</Reference>
            <Title className="secondaryTitle">Solutions and Responsible Practices</Title>
            <p>While the hardware-related environmental impact of AI is significant, solutions are emerging that can reduce its footprint.</p>
            <SolutionsCardCont>
                {flipCardsContent.map((card, index) => (
                    <FlipCard
                    key={index}
                    frontalText={card.frontalText}
                    contentBack={card.contentBack}
                    frontColor={card.frontColor}
                    backColor={card.backColor}
                    />
                ))}

            </SolutionsCardCont>
            <Reference>(Introducing the Framework Desktop and Newest Framework Laptop 13, n.d.)</Reference>
            <Reference className="second">(Apple Trade In, n.d.)</Reference>
            <Reference className="second">(Our Goals for Sustainable Operations - Google Sustainability, n.d.)</Reference>
            
            <Reference className="second">(Responsible Minerals Initiative, n.d.)</Reference>
            
            
            <Separator />

            <MiddleCard 
            smallText="– Roy Schwartz, Noah A. Smith, Oren Etzioni
                    (from the paper “Green AI”, 2019)"
            bigText="“Green AI is about doing more with less: more intelligence, less environmental cost.”"
            color="#ff0000"
            backgroundPicture={backgroundFooter}
            />

        
        </>
)}

export default Waste

const Reference = styled.p`
    margin-top: 6rem;
    &.second{
        margin-top: 1rem;
    }
`

const SolutionsCardCont = styled.div`
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    width: 90%;
    height: fit-content;
    padding: 1rem 4rem;
    margin: 2rem 3rem;
`

const flipCardsContent = [
    { frontalText: 'Modular Hardware Design', contentBack: 'Some tech companies, like Google and Dell, are developing systems where components (like RAM or processors) can be replaced individually, extending the life of the whole machine. ', frontColor: '#fef3c7', backColor: '#fde68a' },
    { frontalText: 'Circular Economy Initiatives', contentBack: 'Programs such as hardware buy-back, device refurbishment, and closed-loop recycling help reduce raw material demand and limit waste. Apple, for example, has introduced robots like "Daisy" that can disassemble iPhones and recover valuable materials. ', frontColor: '#dbeafe', backColor: '#93c5fd' },
    { frontalText: 'Green Certifications', contentBack: 'Data centers can pursue certifications like Energy Star, LEED, or CEEDA, which reflect environmentally conscious infrastructure, including proper disposal and recycling of old equipment. ', frontColor: '#fcd34d', backColor: '#f59e0b' },
    { frontalText: 'Ethical Sourcing', contentBack: 'Initiatives like the Responsible Minerals Initiative encourage companies to verify that their materials are sourced from ethical and environmentally sustainable suppliers. ', frontColor: '#b6fc4d', backColor: '#0bf5ab' },
    { frontalText: 'Cloud Resource Optimization', contentBack: 'ome AI models now use hardware-aware training, selecting processors or servers that offer the best energy efficiency per task to reduce unnecessary strain on data centers. ', frontColor: '#4dfccd', backColor: '#f50b80' },
  ];

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 2rem;
`
const Card = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover{
        transform: scale(1.05);
        cursor: default;
        box-shadow:
        0 0 5px #4fff4f,
        0 0 10px #4fff4f,
        0 0 15px #4fff4f;
    }

`

const Separator = styled.hr`
    margin: 2rem 0;
    width: 60%;
    background-color: grey;
    border-radius: 2rem;
`

const BubbleBoxInverted = styled.div`
  background-color: #ffe6e6;
  padding: 2rem;
  border-radius: 100px 20px 20px 100px; /* ¡Invertido! */
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  h3,p{
    text-align: end;
  }
`;

const BubbleBox = styled.div`
  background-color: #ffe6e6;
  padding: 2rem;
  border-radius: 20px 100px 100px 20px;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
    width: 80%;
    text-align: center;
    margin-top: 2rem;
    color: white;
    transition: text-shadow .2s ease-in-out, color .3s ease;
    &:hover{
        color: #0ff;
        cursor: default;
        text-shadow: 
        0 0 5px #0ff,
        0 0 10px #0ff,
        0 0 20px #0ff,
        0 0 40px #0ff;
    }
    &.secondaryTitle{
        cursor: default;
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