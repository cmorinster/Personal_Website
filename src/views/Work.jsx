import React, { useState} from 'react';
import { OpenAI } from "openai";
import Robo from '../images/RoboArt.png'
import GitHub from '../images/GitHub.png'


export default function Work() {



    const [pitch, setPitch] = useState(null)
    async function handleSubmitWork(e){
        e.preventDefault();

        let inspiration = e.target.inspiration.value;
 
        const openai = new OpenAI({
                apiKey: process.env.REACT_APP_OPENAI_API_KEY,
                dangerouslyAllowBrowser: true 
        });
            
    
    
   
    await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:  [{
            role: "assistant",
            content: `Can you please create a 50 word pitch for a web app inspired by ${inspiration}`
        }],
        temperature: 0.7,
        max_tokens: 264,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
        })
    .then((data)=> {
    setPitch(data["choices"][0]['message']['content'])
    console.log(pitch)
    });

    
}
 
  
  
  return (
    <div>
      <div className="row">

        <div className="col-12 col-lg-6 mt-5">
            <h1>My Story</h1>
                <p className='story'>I'm a newly graduated software engineer, passionate about technology and continuous learning. My experience at Coding Temple has equipped me with Full Stack Development skills, complementing my extensive Quality Assurance background. This QA experience instilled a meticulous approach, ensuring top-notch software.<br></br><br></br>
                My transition to software engineering stems from a fervor for problem-solving. I'm eager to leverage my diverse background to drive meaningful change through impactful software solutions. In collaborative environments, I thrive, applying adaptability, commitment to excellence, and a hunger for growth to create tangible results.<br></br><br></br>
                If you're seeking a motivated, dedicated software engineer ready to make a positive impact, I'm eager to connect.
                </p>
        </div>

        <div className="col-12 col-lg-6 mt-5">
            <h1>Where I've Worked</h1>
            <div className="workHistoty">
                <h5 className='workDates'>Feb 2023 - May 2023 </h5>
                <h5 className='jobCompany'>Coding Temple</h5>
                <h5 className='jobLocation'>Remote</h5>
                <h5 className='jobTitle'>Software Engineer</h5>
            </div>
            <div className="workHistoty">
                <h5 className='workDates'>Jan 2022 - Present </h5>
                <h5 className='jobCompany'>Twin Rivers Technologies</h5>
                <h5 className='jobLocation'>Quincy MA</h5>
                <h5 className='jobTitle'>Automation Specialist-Part Time</h5>
            </div>
            <div className="workHistoty">
                <h5 className='workDates'>Oct 2020 - Jan 2022</h5>
                <h5 className='jobCompany'>Twin Rivers Technologies</h5>
                <h5 className='jobLocation'>Quincy MA</h5>
                <h5 className='jobTitle'>QA/QC Manager</h5>
            </div>
            <div className="workHistoty">
                <h5 className='workDates'>Jun 2019 - Oct 2020</h5>
                <h5 className='jobCompany'>Twin Rivers Technologies</h5>
                <h5 className='jobLocation'>Quincy MA</h5>
                <h5 className='jobTitle'>Operations Team Manager</h5>
            </div>
        </div>
      </div>
      <div className="row projectsDiv mt-5 leftMargin">
        <h1>My Projects</h1>
        <a href="https://www.roboartrumble.com" className='cardDivLink'>
        <div className="card cardDiv">
            
            <img src={Robo} alt='RoboArt Rumble' className='cardImg'></img>
            <div className="card-body">
                <h5 className='projectInfo'>Fun AI Art Web Game</h5>
                <h5 className='projectTitle'>RoboArt Rumble</h5>
            </div>
            
        </div>
        </a>
        <a href="https://github.com/cmorinster" className='cardDivLink'>
        <div className="card cardDiv">
            <img src={GitHub} alt='Git Hub Profile' className='cardImg'></img>
            <div className="card-body">
                <h5 className='projectInfo'>Other Projects</h5>
                <h5 className='projectTitle'>Github</h5>
            </div>
        </div>
        </a>
      </div>
    
      <div className="row">
        <div className="col mt-5 leftMargin">
            <h1>What's my next project?</h1>
            <p>Pitch an application by providing chatGPT words of inspiration:</p>
            <form action="" onSubmit={handleSubmitWork}>
                <input className="form-control InputText" name="inspiration" placeholder='Enter Word(s) of Inspiration' />
                <button type="submit" className="mb-3 buttonBlack">Create App Pitch 
                
                <span className='arrow'>➔</span>
                </button>


            </form>
            {pitch?
            <p>{pitch}</p>
            :
            <p>Whats the hot new App Pitch?</p>
            }

        </div>


      </div>

    </div>
  )
}
