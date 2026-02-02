import axios from 'axios';
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setloading] = useState(false);

  const sendMail = async (e) =>{
    e.preventDefault();
    setloading(true);
    try {
       const  data = await axios.post("http://localhost:4000/send/mail",{
        name,
        email,
        message
       } ,{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
       });
       setName('');
       setEmail('');
       setMessage('');
       toast.success(data.message);
        setloading(false);
       
    } catch (error) {
      toast.error("Failed to send message");
      setloading(false);
    }
  }
  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>Contact Us</h1>
        <div>
          <label>Name</label>
          <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Message</label>
          <textarea placeholder='Enter your message' style={{ height: '60px', width: '100%' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit"   style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"15px"}} > {loading && <ClipLoader size={20} color="#ffffff" />} Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
