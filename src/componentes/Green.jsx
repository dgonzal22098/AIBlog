import styled from "styled-components"
import backgroundPicture from './pictures/greenai.jpg'
import Container from "./Container"
import { FaEarthAmericas, FaMicrochip } from "react-icons/fa6";
import { FaLaptop, FaSun, FaSwimmer } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaTreeCity } from "react-icons/fa6";
import imagenThirdUno from './pictures/measurement.PNG'
import imagenThirdDos from './pictures/report.PNG'
import imagenThirdTres from './pictures/offset.PNG'
import backgroundFooter from './pictures/greenailogo.jpg'



const Green = () => {
  
    return(
    <>
        <HeaderPicture />
        <Container className="green">
            <Title className="greenTitle">Green AI: Shaping Innovation with Environmental Responsibility</Title>
            <InnerGreenContainer>
                <div className="left">
                    <h2>Green AI: Building a Smarter, Cleaner Future</h2>
                    <p>Artificial Intelligence is revolutionizing industries and our daily lives, but behind its power lies an environmental cost we can no longer ignore. Embracing Green AI means innovating responsibly, minimizing our digital footprint, and ensuring that technology helps, rather than harms, our planet.</p>
                    <p className="belowest">Let’s dive deep into it !</p>

                </div>
                <div className="right">
                    <h2>What is Green AI? </h2>
                    <h3>Well, Green AI aims to design and develop artificial intelligence systems that can be: </h3>
                    <ul>
                        <li>Energy-efficient: Reducing the energy needed to train and run models.</li>
                        <li>Low-carbon: Using and developing clean, renewable energy sources for computing. </li>
                        <li>Smaller and smarter: Building models that have the potential to achieve better performance with a lower environmental impact. </li>
                        <li>Geographically optimized: Training artificial intelligence in regions where green energy is available, not just where it’s cheaper.</li>
                        <li>Transparent: Openly measuring and reporting carbon footprints to promote accountability.</li>
                    </ul>
                    <p>Energy and Policy Considerations for Deep Learning in NLP (Strubell et al., ACL 2019)</p>

                </div>

            </InnerGreenContainer>
            <InnerGreenContainer className="second">
                <h2>Solutions for a Green AI Future</h2>
                <p>Here they are some solutions to reduce the environmental impact of artificial intelligence are already underway, representing a vital step toward a sustainable tech industry, let’s take a look: </p>
                <div className="cards">
                    <Card className="tarjeta">
                        <FaMicrochip size={30}/>
                        <h3>New chip architectures</h3>
                        <p>Major semiconductor companies are redesigning chips to drastically cut energy use—by up to 96% in some cases—by integrating more memory and minimizing data movement, helping streamline AI development while reducing its carbon footprint.</p>
                    </Card>
                    <Card className="tarjeta">
                        <FaSun size={30}/>
                        <h3>Training AI models in renewable energy regions</h3>
                        <p>Organizations are strategically placing data centers in regions with abundant renewable energy, like Scandinavia and Canada, to reduce reliance on fossil fuels and cut carbon emissions during AI training. This practice, known as carbon-aware computing, is key to sustainable AI development.</p>
                    </Card>
                    <Card className="tarjeta">
                        <FaBalanceScale size={30}/>
                        <h3>Transparency and accountability</h3>
                        <p>Many tech companies are now measuring, reporting, and offsetting the carbon footprint of their AI projects, integrating open reporting standards and carbon calculators to promote transparency and prepare for future regulations.</p>
                    </Card>

                </div>

                <p className="reference">Resource: Energy and Policy Considerations for Deep Learning in NLP (Strubell et al., ACL 2019)</p>
            </InnerGreenContainer>
            <InnerGreenContainer className="third">
                <div className="left">
                    <h2>An example to illustrate this</h2>
                    <h3>Microsoft and its focus on Green AI</h3>
                    <p>Microsoft is one of the world’s leading technology companies, taking active steps to measure, report, and offset the carbon footprint of its artificial intelligence projects. </p>
                    <p>Part of this effort includes its AI operations, which are divided into the following</p>

                </div>
                <div className="right third">
                    <div className="row">
                        <div className="textCont">
                            <h2>Measurement</h2>
                            <p>This company uses internal and third-party tools to calculate the carbon footprint of its AI model training and the operation of its data centers around the world. Microsoft Sustainability Team. (2023)</p>
                        </div>
                        <img src={imagenThirdUno} alt="" />
                    </div>
                    <div className="row report">
                        <img src={imagenThirdDos} alt="" />
                        <div className="textCont">
                            <h2>Report</h2>
                            <p>Publishes annual sustainability reports that include highly specific data on emissions related to its cloud technologies and AI projects, detailing progress in reducing emissions. Microsoft. (2023)</p>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="textCont">
                            <h2>Offset</h2>
                            <p>The company invests heavily in carbon capture, renewable energy, and environmental conservation projects to offset the unavoidable emissions generated by its operations. Additionally, they promote initiatives such as carbon-aware computing, moving AI workloads to times and places with a low carbon footprint. Smith, B. (2020).</p>
                        </div>
                        <img src={imagenThirdTres} alt="" />
                        
                    </div>
                    

                </div>

            </InnerGreenContainer>
            <p style={{margin:"0 0 3rem 0"}}>(Smith, 2020b)</p>
            <InnerGreenContainer className="fourth">
                <h1 style={{color:"black"}}>This topic is important!</h1>
                <p>If I haven’t convinced you with the above so far, I’ll give you specific reasons why this topic is so important to address.</p>
                <div className="cards">

                    {cardContent.map((object,index) => (
                        <Card 
                        className="tarjeta"
                        key={index}
                        style={{ border: `2px solid ${object.color}`, backgroundColor: `${object.color}22` }}
                        >
                            {object.icon}
                            <p>{object.text}</p>
                        </Card>
                    ))}

                </div>

            </InnerGreenContainer>



        </Container>
        <MiddleCard>
            <div className="text">
                <h1>“Green AI is about doing more with less: more intelligence, less environmental cost.”</h1>
                <p>– Roy Schwartz, Noah A. Smith, Oren Etzioni
                (from the paper “Green AI”, 2019)</p>
            </div>
        </MiddleCard>

    
    </>
)}

export default Green

const cardContent = [
    {
        icon: <FaTreeCity size={30} color="purple"/>,
        text:"It’s cutting-edge; today, few people are aware of the huge environmental impact AI is having, as we’re only dazzled by the benefits it brings us. ",
        color:"#D291BC",
    },
    {
        icon: <FaLaptop size={30} color="green"/>,
        text:"It connects technology directly with sustainability, two of the most important fields for our generation. ",
        color:"#FFA07A",
    },
    {
        icon: <FaEarthAmericas  size={30} color="pink"/>,
        text:"It offers a real challenge: how to innovate without compromising the future of our planet. ",
        color:"#FF8C94",
    },
    {
        icon: <FaSwimmer size={30} color="orange"/>,
        text:"It’s inspiring: we wouldn’t just present facts, but we’d propose real solutions for a greener world without forgetting the wonder and great help that technology has been over the years. ",
        color:"#FFAD9E",
    },
];

const Card = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    p{
        text-align: center;
    }
`


const InnerGreenContainer = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    .left, .right{
        width: 46%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        gap: 20px;
        .belowest{
            font-size: 1.3rem;
            font-weight: bold;
        }
    }
    .right{
        background-color: #a8e6cf;
        padding: 3rem;
        gap: 20px;
        transition: background-color 0.3s ease-in-out;
        &:hover{
            background-color: #9fff9f;
        }
        
        ul{
            padding-left: 3rem;
            li{
                margin-bottom: 1rem;
            }
        }
    }
    &.second{
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;

        .cards{
            margin: 3rem 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
            
            .tarjeta{
                transition: transform .2s ease-in-out, box-shadow 0.2s ease;
                

                &:hover{
                    box-shadow:
                        0 0 5px #4caf50,
                        0 0 10px #4caf50,
                        0 0 20px #4caf50,
                        0 0 30px #4caf50;
                    transform: scale(1.05);
                }
            }
        }
    }
    &.third{
        .right{
            width: 65%;
            &.third{
                background-color: #f5f5f5;
            }
        }
        .row{
            display: flex;
            &.report{
                .textCont{
                    margin-left: 1rem;
                }
            }
            .textCont{
                width: 50%;
                h2{
                    margin: 1rem 0;
                }
            }
        }
        .right{
            align-items: space-between;
        }
        img{
            width: 50%;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            &:hover{
                transform: scale(1.05);
                box-shadow:
                    0 0 5px #88d498,
                    0 0 10px #88d498,
                    0 0 15px #88d498,
                    0 0 20px #88d498;
            }
        }
        
    }
    &.fourth{
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        margin-bottom: 3rem;
        .cards{
            margin: 3rem 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
            
            .tarjeta{
                transition: transform .2s ease-in-out;

                &:hover{
                    transform: scale(1.05);
                }
            }
        }

    }
    .reference{
        margin: 1rem 0;
        text-align: center;
        font-style: italic;
    }
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

const MiddleCard = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    text-align: center;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 2rem;
    background-image: url(${backgroundFooter});

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        height: 400px;
        color: white;
        z-index: 3;
        position: relative;
        gap: 20px;
        span{
            font-style: italic;
        }
        p{
            font-weight: 300;
        }
    }
`