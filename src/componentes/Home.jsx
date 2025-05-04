import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import lozanoPic from './pictures/lozanoPic.jpg'
import manouno from './pictures/manouno.png'
import fotoDiego from './pictures/profilePic.jpg'
import manodos from './pictures/manodos.png'
import Container from './Container'

const Title = styled.h1`
    margin: 2rem 0 10rem 0;
    
`
const TeamContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    
`
const PersonCard = styled.div`
    margin-top: 1rem;
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform .3s ease-in-out;

    &:hover{
        transform: scale(1.05);
        z-index: 10;
    }
    .career {
        font-weight: bold;
    }
    h2 {
        text-align: center;
    }
`
const Picture = styled.img`
    border-radius: 50%;
    width: 70%;
`
const Separator = styled.hr`
    margin: 8rem 0;
    width: 80%;
    background-color: grey;
    border-radius: 2rem;
`
const Section = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin-bottom: 2rem;
    h2 {
        margin-bottom: 3rem;
    }
    .floating-image {
        width: 50%;
        position: absolute;
        right: -1vw;
        &.secondHand{
            left: -1vw;
        }
    }
    .left, .right{
        width: 50%;
        &.bigger{
            width: 60%;
        }
    }
    .dos{
        justify-content: center;
    }


`
const Button = styled.button`
    padding: 1rem 2rem;
    margin-bottom: 5rem;
    border-radius: 10px;
    background-color: black;
    color: white;
    transition: .2s ease-in-out;
    font-size: 1.5rem;
    font-weight: bold;
    width: 25%;
    &:hover{
        background-color: #1f1f1f;
        cursor: pointer;
    }
`

const Home = () => {

    const navigate = useNavigate();

    const toEnergy = () => {
      navigate('/energy');
    }

  
    return (
    <Container>
        <Title className="homeTitle">Artificial Intelligence (AI)</Title>
        <TeamContainer>

            {team.map((person, index) => (
                <PersonCard>
                    <Picture src={person.foto}/>
                    <h2>{person.name}</h2>
                    <p className="career">{person.career}</p>
                    <p>{person.description}</p>
                </PersonCard>
            ))}

        </TeamContainer>
        <Separator />
        <Section >
            <div className="left">
                <h2 >Why Artificial Intelligence</h2>
                <p>
                    Our blog aims to educate, inform, and engage readers about the evolving world of Artificial Intelligence. We provide accessible insights into complex AI concepts, highlight real-world applications, and explore emerging trends that are shaping the future of technology, society, and industry.
                </p>
            </div>
            <img src={manouno} className="floating-image"/>
        </Section>
        <Section className="dos">
            <img src={manodos} className="floating-image secondHand"/>

            <div className="right bigger">
                
            </div>
            <div className="right">
                <h2>Importance Nowadays</h2>
                <p>
                    Artificial Intelligence is revolutionizing the way we live and work. From personalized healthcare and smart assistants to autonomous vehicles and ethical challenges, AI is driving innovation across all sectors. Understanding its impact is essential for staying informed and empowered in a rapidly changing digital era.
                </p>
            </div>
        </Section>
        <h1 className="Final">Let's Dive Into It !</h1>
        <Button onClick={toEnergy}>Let's Go</Button>

    </Container>
)}

export default Home

const team = [
    {name: "Diego Alejandro Gonzalez", career:"System's Engineering", description: "I’m passionate about technology, self-development, and cooking. I also love music, movies, and finding peace in everyday moments",
    foto: fotoDiego
    },
    {name: "Sara Daniela Pineda Garzón", career:"International Business", description: "She loves to learn new things. What she enjoys the most about her career is that she can learn other cultures."},
    {name: "Juan Camilo Castiblanco González", career:"International Business", description: "Juan Camilo studies International Business and represents two brands professionally. He’s passionate about sports and enjoys helping people."},
    {name: "Valentina Parra Millares", career:"Psychology", description: "Valentina is a psychologist and currently works as a Leadership Development Manager at SHE IS. Her strengths lie in assertive communication and organizational management."},
    {name: "Diego Alejandro Lozano Narvaez", career:"Business Administration", description: "Passionate about nature, travel, and finding balance between work, life, and learning.", foto: lozanoPic},
];
