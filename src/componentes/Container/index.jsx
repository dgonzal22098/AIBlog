import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 3rem 0;

    .Final{
        margin: 5rem 0;
        font-weight: 800;
    }

    .homeTitle{
        color: black;
    }
    h1{
        color: white;
        &.neonTitle{
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
        }
        &.neonTitleWhite{
            transition: text-shadow .2s ease-in-out, color .3s ease;
            &:hover{
                color: #00BFFF;
                cursor: default;
                text-shadow:
                    0 0 5px #00BFFF,
                    0 0 10px #00BFFF,
                    0 0 15px #00BFFF;
            }
        }
        &.greenTitle{
            transition: text-shadow .2s ease-in-out, color .3s ease;
            &:hover{
                color: #39FF14;
                cursor: default;
                text-shadow:
                    0 0 5px #39FF14,
                    0 0 10px #39FF14,
                    0 0 15px #39FF14;
            }
        }
    }

    &.carbon{
        width: 80%;
        margin-bottom: 3rem;
        .title2{
            width: 100%;
            margin: 2rem;
            p{
                margin: 1rem 0;
                color: #7219BF;
                font-weight: bold;
            }
            h2{
                font-size: 2rem;
                transition: text-shadow 0.3s ease, color 0.3s ease;
                &:hover{
                    color: #D8B7FF;
                    text-shadow:
                        0 0 5px #D8B7FF,
                        0 0 10px #D8B7FF,
                        0 0 20px #D8B7FF,
                        0 0 40px #D8B7FF;

                }
            }
        }

        .rower{
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            margin-bottom: 3rem;

            .texter{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 45%;

                h3{
                    margin-bottom: 2rem;
                }

                &.righter{
                    padding-left: 4rem;
                    border-left: 1px grey solid;
                }
                
            }

        }
        .underRower p{
            text-align: center;
            margin-bottom: 3rem;
        }

        .inititativesTitle{
            font-size: 2rem;
            color: #7219BF;
            transition: text-shadow 0.3s ease, color 0.3s ease;
            &:hover{
                color: #D8B7FF;
                text-shadow:
                    0 0 5px #D8B7FF,
                    0 0 10px #D8B7FF,
                    0 0 20px #D8B7FF,
                    0 0 40px #D8B7FF;

            }

        }
        .reference{
        margin: 2rem;
        font-style: italic;
    }
    }
    &.water{
        width: 80%;
        .tituloCabecera{
            p{
                text-align: center;
                color: white;
                font-weight: bold;
            }
            .tituloWater{
                margin-bottom: 4rem;
            }
        }
        .reference{
            font-style: italic;
            margin: 2rem;
        }
        .phraseCont{
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 3rem;
            background: radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%);
            padding: 2rem;
            p{
                font-style: italic;
            }
            hr{
                width: 30%;
                border-radius: 2px;
                color: grey;
            }
        }
        .secondaryTitle{
            color: black;
            margin-bottom: 2rem;
            text-align: center;
            transition: text-shadow .2s ease-in-out, color .3s ease;
            &:hover{
                color: #FF8C42;
                text-shadow:
                    0 0 5px #FF8C42,
                    0 0 10px #FF8C42,
                    0 0 15px #FF8C42;
            }
        }
        .cardInformative{
            align-items: center;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            transition: transform .2s ease-in-out;
            &:hover{

                transform: scale(1.05);
            }
            p{
                text-align: center;
            }
        }
        .cardContainers{
            margin-bottom: 3rem;
        }
        .rower{
            width: 92%;
            margin-bottom: 3rem;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            padding: 3rem;
            border-radius: 10px;
            gap: 3rem;
            img{
                width: 40%;
                border-radius: 50%;
                transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
                &:hover{
                    transform: scale(1.05);
                    box-shadow:
                        0 0 15px #0ff,
                        0 0 30px #0ff,
                        0 0 45px #0ff,
                        0 0 60px #0ff;
                }
                
            }
            .rowerText{
                align-items: center;
                gap: 20px;
                h2{
                    text-align: center;
                }
                p{
                    text-align: center;
                }
                .reference{
                    font-style: italic;
                }
            }
        }
    }
    &.wasteHeader{
        background-color: white;
        padding: 3rem;
        text-align: center;
        margin-top: 4rem;
        p{
            margin-bottom:2.2rem;
        }
    }
    .problemWaste{
        margin-top: 2rem;
        
    }
    &.solutions{
        
    }
    .solutionCard{
        width: 100%;
        display: flex;
        justify-content: center;
        
    }
    &.waste{
        .bubbleContainer{
            width: 100%;
            display: flex;
            margin-bottom: 3rem;
            .bubbleBox{
                transition: box-shadow 0.3s ease-in-out;
                &:hover{
                    cursor: default;
                    box-shadow:
                        0 0 5px #0ff,
                        0 0 10px #0ff,
                        0 0 15px #0ff,
                        0 0 20px #0ff;
                }
            }
            .image-container {
                position: relative;
                width: 20%;
                img{
                    width: 100%;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: -20px;
                    transition: left 0.3s ease;
                    &.inverted{
                        left: auto;
                        right: -20px;
                    }
                }
            }
            &.inverted{
                justify-content: flex-end;
            }
            .bubbleBox{
                h3{
                    margin-bottom: 1rem;
                }
            }
        }
    }

`

export default Container;