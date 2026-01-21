import React from 'react'

function Contact() {
  return (
    <section className='contact'>
      <form>
       <h1>Contact Us</h1>
       <div>
        <label>Name</label>
        <input type="text" placeholder='Enter your name' />
        <label>Email</label>
        <input type="email" placeholder='Enter your email' />
        <label>Message</label>
        <textarea placeholder='Enter your message' style={{height:'60px', width:'100%'}}></textarea>
        <button type="submit">Send Message</button>
       </div>
      </form>
    </section>  
  )
}

export default Contact
