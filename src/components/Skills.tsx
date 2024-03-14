import data from "../data/index.json";
import "../styles/Skills.css"

function Skills(){
    return(
        <section className="skills-section">
            <div className="skills-content-box">
                <div className="content-title">
                    <h2 className="primary-title">My skills</h2>
                    <p className="secondary-title">& experience</p>  
                </div>
                <div className="skills-container">
                    {data.skills.map((item, index)=>(
                        <div key={index} className="skill-card">
                            <div className="skill-img-container">
                               <img src={item.src} alt="svg" className="skill-image"/> 
                               <h3 className="skill-title">{item.title}</h3>
                            </div>
                            <div className="skill-content">
                                <p className="skill-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills

