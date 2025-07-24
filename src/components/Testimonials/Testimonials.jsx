import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonialsData = [
  {
    img: user_1,
    name: 'William Sakspear',
    title: 'Edusity',
    message: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.',
  },
  {
    img: user_2,
    name: 'Emma Watson',
    title: 'Edusity',
    message: 'Edusity gave me the platform to grow both personally and professionally. The faculty is amazing and always supportive.',
  },
  {
    img: user_3,
    name: 'John Doe',
    title: 'Edusity',
    message: 'The environment at Edusity encourages learning and innovation. I made lifelong friends and mentors here.',
  },
  {
    img: user_4,
    name: 'Sophia Lee',
    title: 'Edusity',
    message: 'Great infrastructure, dedicated professors, and a wonderful learning experience overall. I highly recommend Edusity!',
  }
];

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
          {testimonialsData.map((user, index) => (
            <li key={index}>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user.img} alt={user.name} />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.title}</span>
                  </div>
                </div>
                <p>{user.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
