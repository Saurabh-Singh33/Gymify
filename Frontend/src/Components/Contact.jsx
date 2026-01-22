import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setloading] = useState('false');
  return (
    <section className='contact'>
      <form>
        <h1>Contact Us</h1>
        <div>
          <label>Name</label>
          <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Message</label>
          <textarea placeholder='Enter your message' style={{ height: '60px', width: '100%' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" disabled={loading} style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"15px"}} > {!loading && <ClipLoader size={20} color="#ffffff" />} Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
