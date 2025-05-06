import styled from "styled-components"
import Container from "./Container"

const References = () => {
  
    return(
    <>
        <Container>
            <h1 style={{color:"black", marginBottom:"2rem"}}>References</h1>

            <ReferenceSection>

            <div className="referencesList">
                {references.map((ref, index) => (
                    <div className="referenceItem" key={index}>
                        <span className="referenceIndex">[{index + 1}]</span>
                        <p className="referenceText">{ref}</p>
                    </div>
                ))}
            </div>

            </ReferenceSection>

            <CopyrightSection className="copyrightSection">

                <div className="copyrightContainer">
                    <h3 className="titulo">Créditos y Derechos de Autor</h3>
                    <p>
                    Este sitio web fue desarrollado íntegramente por <strong>Diego Alejandro González</strong>, quien se encargó del diseño, implementación técnica y construcción de la plataforma como parte de un proyecto académico.
                    </p>
                    <p>
                    La investigación, recopilación de información y análisis de contenido fueron realizados de manera colaborativa con los integrantes del equipo de trabajo, quienes contribuyeron significativamente a la elaboración y curaduría del material presentado.
                    </p>
                    <p>
                    Las imágenes utilizadas provienen de bancos de recursos visuales libres de derechos de autor, tales como <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a> y <a href="https://pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>, cumpliendo con los lineamientos de uso establecidos por dichas plataformas.
                    </p>
                    <p>
                    © {new Date().getFullYear()} Diego Alejandro González y equipo de investigación. Todos los derechos reservados. El contenido aquí expuesto tiene fines académicos y no comerciales.
                    </p>
                </div>

            </CopyrightSection>


        </Container>
    
    
    </>
)}

export default References

const references = [
    "Emma Strubell, Ananya Ganesh, and Andrew McCallum. 2019. Energy and Policy Considerations for Deep Learning in NLP. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, pages 3645–3650, Florence, Italy. Association for Computational Linguistics.",
    "Smith, B. (2020, July 23). Microsoft will be carbon negative by 2030 – The Official Microsoft Blog. The Official Microsoft Blog. https://blogs.microsoft.com/blog/2020/01/16/microsoft-will-be-carbon-negative-by-2030/",
    "Grainger Engineering Office of Marketing and Communications. (n.d.). AI’s challenging waters. Civil & Environmental Engineering | Illinois. https://cee.illinois.edu/news/AIs-Challenging-Waters",
    "Minnix, J. (2025b, April 19). 170 Data center stats (April-2025). Brightlio – Technology Iluminated. https://brightlio.com/data-center-stats/#pp-toc-huja89rng0qk-anchor-0",
    "Daka, N. (2024, October 25). ChatGPT’s carbon tab. Felix. https://felixonline.co.uk/articles/chatgpt-carbon-cost/#:~:text=Each%20message%20sent%20to%20ChatGPT,%25%20of%20that%2C%200.2%20grams.",
    "Selin, & Eckley, N. (2025b, March 21). Carbon footprint | Definition, Examples, Calculation, Effects, & Facts. Encyclopedia Britannica. https://www.britannica.com/science/carbon-footprint",
    "Power Moves: How CEOs can achieve both AI and climate goals. (2024, November 8). BCG Global. https://www.bcg.com/publications/2024/ceos-achieving-ai-and-climate-goals?utm_source=search&utm_medium=cpc&utm_campaign=ceo-agenda&utm_description=paid&utm_topic=ceo-role&utm_geo=global&utm_content=dsa_achieving-ai-climate-goals&gad_source=1&gbraid=0AAAAACKyBhpY5R3SoqxOCnVhtIx4NHvfb&gclid=CjwKCAjwq7fABhB2EiwAwk-YbFAcT0G33STBVu9Q5LC4Huie9TuBYkTPBmC3cJE8wB3mgMMV14Rd4RoCKboQAvD_BwE&gclsrc=aw.ds",
    "Understanding the carbon footprint of AI and how to reduce it | Carbon Direct. (n.d.). https://www.carbon-direct.com/insights/understanding-the-carbon-footprint-of-ai-and-how-to-reduce-it",
    "Ali, S. H. (2014). Social and environmental impact of the rare earth industries. Resources, 3(1), 123-134.",
    "European Commission. (2023). Green and Digital Transition: Policy Initiatives.",
    "Jones, N. (2018). How to stop data centres from gobbling up the world’s electricity. Nature, 561(7722), 163-166.",
    "Lacoste, A., Luccioni, A., Schmidt, V., & Dandres, T. (2019). Quantifying the Carbon Emissions of Machine Learning. arXiv preprint arXiv:1910.09700.",
    "Microsoft. (2023). Sustainability Report 2023.",
    "Mytton, D. (2020). Data center water consumption. Communications of the ACM, 63(9), 40-43.",
    "OpenAI. (2024). GPT-4 Technical Report.",
    "Patterson, D., Gonzalez, J., Le, Q., Liang, C., Munguia, L. M., Rothchild, D., … & Dean, J. (2021). Carbon Emissions and Large Neural Network Training. arXiv preprint arXiv:2104.10350.",
    "Schwartz, R., Dodge, J., Smith, N. A., & Etzioni, O. (2020). Green AI. Communications of the ACM, 63(12), 54-63.",
    "Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and Policy Considerations for Deep Learning in NLP.",
    "Thompson, N. C., Greenewald, K. H., Lee, K., & Manso, G. F. (2020). The Computational Limits of Deep Learning. Communications of the ACM, 63(5), 93-101.",
    "Vincent, J. (2022). AI’s Growing Carbon Footprint. The Verge.",
    "Xu, P., Lu, Y., & Song, Z. (2022). Sustainable Artificial Intelligence: Balancing Accuracy and Carbon Emissions. IEEE Transactions on Sustainable Computing, 7(2), 233-245.",
    "Introducing the Framework Desktop and newest Framework Laptop 13. (n.d.). Framework. https://frame.work/",
    "Apple trade in. (n.d.). Apple. https://www.apple.com/shop/trade-in#recycle",
    "Our goals for sustainable operations - Google Sustainability. (n.d.). Sustainability. https://sustainability.google/operating-sustainably/",
    "Responsible Minerals Initiative. (n.d.). https://www.responsiblemineralsinitiative.org/",
    "Forti, V., Baldé, C. P., Kuehr, R., & Bel, G. (2020). The Global E-waste Monitor 2020: Quantities, flows, and the circular economy potential. United Nations University (UNU)/United Nations Institute for Training and Research (UNITAR) – co-hosted SCYCLE Programme, International Telecommunication Union (ITU) & International Solid Waste Association (ISWA).",
    "Chemical Safety and Health Unit (CHE). (2021, June 15). Children and digital dumpsites: e-waste exposure and child health. https://www.who.int/publications/i/item/9789240023901",
    
]

const ReferenceSection = styled.section`
    width: 100%;
    color: #333;
    margin-bottom: 3rem;

    .referencesList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    }
    .referenceItem {
    display: flex;
    height: fit-content;
    align-items: flex-start;
    background-color: #ffffff;
    padding: 1rem 1.5rem;
    border-left: 4px solid #007BFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: transform 0.3s ease;
    }
    .referenceItem:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    }

    .referenceIndex {
    font-weight: bold;
    color: #007BFF;
    margin-right: 1rem;
    }

    .referenceText {
    flex: 1;
    font-size: 1rem;
    line-height: 1.5;
    overflow: hidden;
    }
    
`
const CopyrightSection = styled.section`
    &.copyrightSection {
    background-color: #f8f9fa;
    padding: 2rem;
    margin-top: 3rem;
    border-top: 1px solid #ccc;
    p, .titulo{
        margin-bottom: 1rem;
    }
    }

    .copyrightContainer {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 0.95rem;
    color: #444;
    }

    .copyrightContainer a {
    color: #0066cc;
    text-decoration: none;
    }

    copyrightContainer a:hover {
    text-decoration: underline;
    }
`