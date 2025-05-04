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
    }

`

export default Container;