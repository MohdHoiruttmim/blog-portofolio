import './Education.css'
import sma from '../../assets/sma1spg.png'
import college from '../../assets/utm.png'
import syi from '../../assets/syi.png'

function Education() {
  return (
    <div className="edu-exp">
      <div className="edu-wrapper">
        <h2>Education</h2>
        <div className="education">
          <img src={college} alt="college-logo" />
          <div className="desc">
            <h3>Universitas Trunojoyo</h3>
            <p>Informatics Engineer</p>
            <p>2021 - Present</p>
          </div>
        </div>
        <div className="education">
          <img src={sma} alt="sma-logo" />
          <div className="desc">
            <h3>SMAN 1 Sampang</h3>
            <p>Science</p>
            <p>2018 - 2021</p>
          </div>
        </div>
      </div>
      <div className="edu-wrapper">
        <h2>Experience</h2>
        <div className="education">
          <img src={syi} alt="college-logo" />
          <div className="desc">
            <h3>Sampang Young Inspiration</h3>
            <p>Web Developer</p>
            <p>2021 - Present</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;