import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'




const Program = () => {
  return (
    <div className='program'>
        <div className="programs">
            <img className = 'image'src={program_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Gradution Degree</p>
            </div>
            
        </div>
        <div className="programs">
            <img className='image' src={program_2} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Master Degree</p>
            </div>
            
        </div>
        <div className="programs">
            <img className='image' src={program_3} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Post Gradution Degree</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Program
