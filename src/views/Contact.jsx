import React, { useState} from 'react';
import { OpenAI } from "openai";


export default function Contact() {
    const [joke, setJoke] = useState(null)
    async function handleSubmitContact(e){
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
            content: `Can you write a one line joke inspired by ${inspiration}`
        }],
        temperature: 0.7,
        max_tokens: 264,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
        })
    .then((data)=> {
    setJoke(data["choices"][0]['message']['content'])
    console.log(joke)
    });

    
}




  return (
    <div>
      <div className="row m-5">
        <h1 className='marginsTop'>🤙 Contact Me</h1>
        <h5 className='marginsTop'>Interested in connecting or having a chat? Then hit the contact button below or <a href="https://www.linkedin.com/in/chrisamorin/">contact me on LinkedIn</a>.</h5>
        <a href="mailto: cmorinster@gmail.com" className="mb-3 buttonBlack linkButton">Contact Me
                
                <span className='arrow'>➔</span>
                </a>

      </div>
      <div className="row m-5">
      <div className="col mt-5 leftMargin">
            <h1>Tell me a joke</h1>
            <p>Have ChatGPT tell a joke based on:</p>
            <form action="" onSubmit={handleSubmitContact}>
                <input className="form-control InputText" name="inspiration" placeholder='Enter Joke Inspiration' />
                <button type="submit" className="mb-3 buttonBlack">Create Joke
                
                <span className='arrow'>➔</span>
                </button>


            </form>
            {joke?
            <p>{joke}</p>
            :
            <p></p>
            }

        </div>


      </div>
    </div>
  )
}
