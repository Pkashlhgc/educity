import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {
  const slide = useRef();
  let tx = 0;

  const slideForword = () => {
    if (tx > -75) {
      tx -= 25;
    }
    slide.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slide.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='naxt-btn' onClick={slideForword} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackword} />
      <div className='slider'>
        <ul ref={slide}>
          {[user_1, user_2, user_3, user_4].map((user, index) => (
            <li key={index}>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user} alt='' />
                  <div>
                    <h3>William Sakspear</h3>
                    
                    
                    <span>Edusity</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                  community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my
                  expectations.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
