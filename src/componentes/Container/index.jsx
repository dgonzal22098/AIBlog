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
    &.green{
        

    }

`

export default Container;