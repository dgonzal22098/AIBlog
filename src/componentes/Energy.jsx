import styled from 'styled-components'
import backgroundPicture from './pictures/aihuman.png'
import Container from './Container'
import doctorPic from './pictures/doctor.jpg'
import bosquePic from './pictures/bosque.jpg'
import faro from './pictures/faro.jpg'

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
    background-image: url(${bosquePic});
    filter: grayscale(100%);

    &.end{
        background-image: url(${faro});
        filter: grayscale(0%);
    }

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
const Title = styled.h1`
    text-align: center;
    margin-top: 3rem;
    &.secondaryTitle{
        color: black;
        margin-bottom: 2rem;
    }
`
const Separator = styled.hr`
    margin: 1rem 0;
    width: 100%;
    background-color: grey;
    border-radius: 2rem;
`
const Introduction = styled.div`
    margin: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    .textCont{
        padding: 2rem 1rem 2rem 2rem;
        h2{
            margin-bottom: 2rem;
        }
    }
    img{
        width: 50%;
    }
    &.secondIntroduction{

        .lefTexter{
            width: 50%;
        }
        .rightTexter{
            width: 50%;
            display: grid;
            margin-left: 3rem;
            grid-template-columns: 1fr;
            grid-gap: 20px;
            
        }
    }

`
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
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    .prefix{
        color: #7219BF;
        font-weight: bold;
    }

`
const Finalizer = styled.div`
    width: 100%;
    background-color: #F2F0FE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`



const Energy = () => {
  
    return (
    <>
        <HeaderPicture />
        <Container>
            <Title>The Energy Behind Intelligence: AI’s Environmental Impact</Title>
            <Introduction>
                <div className='textCont'>
                    <h2>Artificial Intelligence has transformed many industries (healthcare, finance and others) driving innovation and efficiency.</h2>
                    <p>
                        However, its rapid growth comes with a hidden environmental cost: significant energy consumption and rising carbon emissions. As AI models become larger and more complex, their environmental footprint demands urgent attention to ensure sustainable technological progress.
                    </p>
                </div>
                <img src={doctorPic} alt="abstract picture of doctor benefits" />

            </Introduction>
            <Title className='secondaryTitle'>How AI Consumes Energy</Title>
            <CardContainer>
                <Card>
                    <p className='prefix'>1</p>
                    <h3>Training Phase</h3>
                    <p>Training large AI models like GPT-3 involves substantial computational resources. OpenAI’s report (2024) states, “training GPT-3 required thousands of GPUs operating non-stop for weeks.” Every training iteration processes massive datasets repeatedly, leading to tremendous energy expenditure.</p>
                </Card>
                <Card>
                    <p className='prefix'>2</p>
                    <h3>Inference Phase </h3>
                    <p>Once trained, AI models continue to consume energy during inference. Each query to a model like ChatGPT requires computational cycles. With billions of queries globally, inference energy use becomes substantial over time (Patterson et al., 2021).</p>
                </Card>
                <Card>
                    <p className='prefix'>3</p>
                    <h3>Maintenance and Updates</h3>
                    <p>Maintaining AI systems also consumes energy through continuous retraining, fine-tuning on new data, and software updates. These background processes, though less visible, add significant cumulative energy demand. </p>
                </Card>

            </CardContainer>
        </Container>
        <MiddleCard>
            <div className='text'>
                <h2>“Artificial Intelligence will either accelerate the climate crisis or help us solve it. The path we choose matters now more than ever.”</h2>
                <p>– Timnit Gebru, founder of DAIR (Distributed AI Research Institute)</p>
            </div>
        </MiddleCard>
        <Container>
            <Introduction className='secondIntroduction'>
                <div className='textCont lefTexter'>
                    <h2>AI has transformed industries worldwide, but its rapid growth brings significant environmental challenges.</h2>
                    <p>
                    Data centers, essential for AI operations, now consume about 1–2% of global electricity—a figure expected to rise to 4% by 2030. This increase could add 1.3 to 1.7 gigatons of CO₂ emissions, comparable to Italy’s five-year emissions. While AI offers major economic benefits, these environmental impacts highlight the urgent need for more sustainable AI practices.
                    </p>
                </div>
                <div className='rightTexter'>
                    <div>
                        <h2>Carbon Footprint </h2>
                        <p>
                        The primary environmental issue of AI energy use is its carbon footprint. Unless data centers rely on renewables, fossil fuel dependency worsens climate change (Schwartz et al., 2020). 
                        </p>
                    </div>
                    <Separator />
                    <div>
                        <h2>Water Usage</h2>
                        <p>
                        Cooling massive server farms requires millions of liters of water annually. Mytton (2020) notes, “data centers in the U.S. alone consume 660 billion liters of water annually.” 
                        </p>
                    </div>
                    <Separator />
                    <div>
                        <h2>Mineral Extraction </h2>
                        <p>
                        Producing GPUs and TPUs involves rare earth minerals, whose extraction has devastating ecological impacts (Ali, 2014). 
                        </p>
                    </div>

                </div>
            </Introduction>

        </Container>
        <Finalizer>

            <Container>
                <Title className='secondaryTitle'>Factors Influencing Energy Consumption</Title>
                <CardContainer>
                    <Card>
                        <p>Larger models like GPT-4 with billions of parameters demand exponentially more computational power and thus energy (Thompson et al., 2020). </p>
                        <h3>Model Size </h3>
                    </Card>
                    <Card>
                        <p>Modern processors like NVIDIA’s A100 or Google’s TPU v4 are more energy-efficient but are outpaced by increasing AI demand. </p>
                        <h3>Hardware Efficiency </h3>
                    </Card>
                    <Card>
                        <p>Research into Green AI focuses on developing efficient algorithms that require fewer computations for similar performance (Schwartz et al., 2020). </p>
                        <h3>Algorithmic Innovation </h3>
                    </Card>
                </CardContainer>

            </Container>
            <Container>
                <Title className='secondaryTitle'>Current Solutions </Title>
                <CardContainer>
                    <Card>
                        <h3>Renewable Energy </h3>
                        <p>Microsoft’s 2023 Sustainability Report emphasizes a commitment to 100% renewable energy for all data centers by 2025. </p>
                    </Card>
                    <Card>
                        <h3>Model Optimization </h3>
                        <p>Techniques like model pruning, quantization, and knowledge distillation significantly reduce energy needs without major accuracy loss (Xu et al., 2022). </p>
                    </Card>
                    <Card>
                        <h3>Policy Initiatives </h3>
                        <p>The European Commission (2023) launched guidelines promoting green digital transition and sustainable AI practices. </p>
                    </Card>
                </CardContainer>

            </Container>

        </Finalizer>
        <MiddleCard className='end'>
            <div className='text'>
                <p>– Roy Schwartz, Noah A. Smith, Oren Etzioni
                (from the paper <span>“Green AI”</span>, 2019)</p>
                <h2>“Green AI is about doing more with less: more intelligence, less environmental cost.”</h2>
                <p>The energy consumption of AI presents a growing environmental challenge. As AI becomes increasingly embedded in everyday applications, mitigating its impact is crucial. By embracing renewable energy, optimizing algorithmic efficiency, and innovating through new technologies, the AI sector can evolve sustainably and responsibly. </p>
            </div>

        </MiddleCard>

        
    </>
)}

export default Energy
