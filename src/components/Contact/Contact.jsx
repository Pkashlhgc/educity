import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8b35e302-9ec2-4d26-a3e9-7ef2f929d46e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const res = await response.json();

    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div className='Contact Us'>
        <div className='contact-col'>
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                
                <li><img src={mail_icon} alt="Mail Icon"  width='15px'/> Email -tprashant112@gmail.com</li>
                <li><img src={phone_icon} alt="Phone Icon" width="15px" /> Phone No- +91 6392912409</li>
            </ul>
        </div>
        <div className='contact-col'></div>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          
          <label>Your Phone No</label>

          <input type="text" name='phone' placeholder='Enter your Phone no' required/>

          <label>Write your message here</label>
          
          <textarea name="message" id="" rows="6" placeholder='inter your message'required></textarea>
          <button type='submimt' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          
        </form>
        <span>{result}</span>
      
    </div>
  )
}

export default Contact
