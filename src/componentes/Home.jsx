import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import lozanoPic from './pictures/lozanoPic.jpg'
import manouno from './pictures/manouno.png'
import fotoDiego from './pictures/profilePic.jpg'
import fotoValentina from './pictures/valentina.jpg'
import saraPic from './pictures/saraPic.png'
import JuanPic from './pictures/juanFoto.jpg'
import manodos from './pictures/manodos.png'
import Container from './Container'
import MainTitle from "./MainTitle"


const Home = () => {

    const navigate = useNavigate();

    const toEnergy = () => {
      navigate('/energy');
    }

    useEffect(() => {
        const cards = document.querySelectorAll(".personCard");
        cards.forEach((card, index) => {
          card.style.opacity = 0;
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
          }, index * 150); // stagger animation
        });
      }, []);

  
    return (
        <>
            <MainTitle texto="Artificial Intelligence (AI)" color="#00f0ff" />

            <TeamContainer>

                {team.map((person, index) => (
                    <PersonCard>
                        <Picture src={person.foto}/>
                        <div className="text">
                            <h2>{person.name}</h2>
                            <p className="career">{person.career}</p>
                            <p>{person.description}</p>
                        </div>
                    </PersonCard>
                ))}

            </TeamContainer>
            <Container>
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

                <Button color="#00ff00" onClick={toEnergy}>
                    <span>Let's Go !</span>
                </Button>

            </Container>
        </>
)}

export default Home

const team = [
    {
        name: "Diego Alejandro Gonzalez", 
        career:"System's Engineering", 
        description: "I’m passionate about technology, self-development, and cooking. I also love music, movies, and finding peace in everyday moments",
        foto: fotoDiego
    },
    {
        name: "Juan Camilo Castiblanco González", 
        career:"International Business", 
        description: "Juan Camilo is a tech savvy professional passionate about innovation, client relationships, and creating impactful business solutions. He enjoys design, music, and exploring creative ideas.",
        foto: JuanPic,
    },
    {
        name: "Valentina Parra Millares", 
        career:"Psychology", 
        description: "I like reading and hanging out with family and friends. I love exploring new places and cultures, and I really enjoy spending time with my dog, Lupe.",
        foto: fotoValentina
    },
    {
        name: "Diego Alejandro Lozano Narvaez", 
        career:"Business Administration", 
        description: "Passionate about nature, travel, and finding balance between work, life, and learning.", 
        foto: lozanoPic
    },
    {
        name: "Sara Daniela Pineda Garzón", 
        career:"International Business", 
        description: "She loves to learn new things. What she enjoys the most about her career is that she can learn other cultures.",
        foto: saraPic,
    },
];
const TeamContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    place-items: center;
    margin: 0 auto;
`
const PersonCard = styled.div`
    margin-top: 1rem;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out;
    .text{
        padding: 2rem;
        width: 100%;
        height: auto;
        border-radius: 10px;
        transition: border-bottom 0.3s ease, box-shadow 0.3s ease;

        p{
            text-align: center;
        }

        &:hover {
        border-bottom: 1px solid #ff9800;
        box-shadow: 0 4px 10px rgba(255, 152, 0, 0.6);
        cursor: default;
        }

    }

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

`;
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
  font-size: 1.5rem;
  font-weight: bold;
  width: 25%;
  border: none;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #3f3232;
    cursor: pointer;
  }

  span {
    display: inline-block;
    color: white;
    text-shadow:
      0 0 5px ${props => props.color || '#00ff00'},
      0 0 10px ${props => props.color || '#00ff00'},
      0 0 20px ${props => props.color || '#00ff00'},
      0 0 40px ${props => props.color || '#00ff00'},
      0 0 80px ${props => props.color || '#00ff00'};
    animation: flicker 3s infinite;
  }

  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 1;
    }
    20%, 24%, 55% {
      opacity: 0.4;
    }
  }
`;
