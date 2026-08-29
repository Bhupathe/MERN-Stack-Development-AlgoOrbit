import './contact.css'
import { useState } from 'react'

export default function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(event){
        //event.preventDefault();
        alert(`Hello Mr, ${name},\nWe are happy that you have visited our site. For your query, we will contact you through your email or phone number`)
    }

    return(
        <div className="contact">
            <div className='contact-container reason'>
                <h3>Let's explore more on this topic</h3>
                <p>Soul Land is an inspiring journey of courage, friendship, hard work, and self-belief. Follow Tang San as he faces powerful enemies, overcomes countless challenges, and grows stronger without giving up. If you love stories about **determination, loyalty, personal growth, and chasing your dreams, Soul Land is a great read that will motivate you to keep moving forward, no matter how difficult the journey becomes.
                </p>
            </div>
            <form action="" onSubmit={handleSubmit} className='contact-container form'>
                <div className="name input">
                    <span>Name:</span>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Your Name"
                    />
                </div>
                <div className="email input">
                    <span>Phone Number: </span>
                    <input 
                        type="text" 
                        name="phone_no" 
                        id="phone_no" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder="Your Phone Number"
                    />
                </div>
                <div className="email input">
                    <span>Email:</span>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Id"
                    />
                </div>
                <div className='content input'>
                    <span>Content:</span>
                    <textarea 
                        name="content" 
                        id="content" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </div>
                <input 
                    type="submit" 
                    value="Submit" 
                    className='submit input' 
                    placeholder='Your Content'
                />
            </form>
        </div>
    )
}