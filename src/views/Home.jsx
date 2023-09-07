import React, { useState} from 'react';
import Chris from '../images/Chris_Morin2.png'


import { OpenAI } from "openai";

export default function Home() {
    // const configuration = new Configuration({
    //     organization: "org-mrhmm4bXaDJPBe0S5mpDJDAm",
    const [animal, setAnimal] = useState(null)
    async function handleSubmit(e){
        e.preventDefault();

        let creature = e.target.creature.value;
        if (creature === "Back to Human"){
            setAnimal(null)
        }else{
        const openai = new OpenAI({
                apiKey: process.env.REACT_APP_OPENAI_API_KEY,
                dangerouslyAllowBrowser: true 
        });
            
    
    
   
    await openai.images.generate({
        prompt: `A photo image of a ${creature} floating through space with a vibrant picture of space in the background.`,
        })
    .then((data)=> {
    setAnimal(data['data'][0]['url'])
    });

    }
}
    return (
        <div className="row topRow">
            
            <div className="col-12 col-lg-6 mt-5 p-5">
                <h1>👋 Hello I'm Chris Morin</h1>
                <h5 className='marginsTop'>I'm a newly graduated software engineer with a background in Quality Assurance and a passion for problem-solving challenges. I'm excited to leverage my diverse skills to create impactful software solutions. When not coding, I enjoy hiking, playing with artificial intelligence, and performing comedy at the Improv Asylum in Boston.<br></br><br></br>Have fun on the site playing with my favorite API from OpenAI. An API that let's you get creative using the power of artificial intelligence! <br></br><br></br>And remember to give the API a few moments to load, the tiny robots are doing their best!</h5>
            </div>
            
            <div className="col-12 col-lg-6 mt-5">
            {animal?
                <img src={animal} alt="tranformed_pic" className='homeImg'></img>
:
                <img src={Chris} alt="Chris Morin with Background by pikisuperstar on Freepik" className='homeImg'></img>
}
                <form action="" onSubmit={handleSubmit}>
                <p className='marginsTop'>Transform me into a:</p>
                <select className="form-select InputText" name = "creature">
                    {animal&&
                    <option value="Back to Human">Back to Human</option>
                    }
                    <option value="Aardvark">Aardvark</option>
                    <option value="Bear">Bear</option>
                    <option value="Beaver">Beaver</option>
                    <option value="Cat">Cat</option>
                    <option value="Cucumber">Cucumber</option>
                    <option value="Dinosaur">Dinosaur</option>
                    <option value="Dog">Dog</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Duck">Duck</option>
                    <option value="Elephant">Elephant</option>
                    <option value="Goat">Goat</option>
                    <option value="Gorilla">Gorilla</option>
                    <option value="Hippo">Hippo</option>
                    <option value="Horse">Horse</option>
                    <option value="Kangeroo">Kangeroo</option>
                    <option value="Lion">Lion</option>
                    <option value="Manta Ray">Manta Ray</option>
                    <option value="Mummy">Mummy</option>
                    <option value="Narwhal">Narwhal</option>
                    <option value="Otter">Otter</option>
                    <option value="Parrot">Parrot</option>
                    <option value="Pig">Pig</option>
                    <option value="Raccoon">Raccoon</option>
                    <option value="Robot">Robot</option>
                    <option value="Snake">Snake</option>
                    <option value="Turtle">Turtle</option>
                    <option value="Walrus">Walrus</option>
                    <option value="Yak">Yak</option>


                </select>
                <button type="submit" className="mb-3 buttonBlack">Transform
                <span className='arrow'>➔</span>
                </button>
                </form>
            </div>
        </div>


    )
}
