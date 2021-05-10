import React from 'react';
import resume from '../../../assets/joel-cox-resume.pdf'

function Resume() {
  return (
    <div>
      <h2 className='section-header'>RESUME</h2>
      <div className='container'>
        <form>
          <h2 className='reach-out pro-header'>Proficiencies</h2>
          <ul className='proficiencies'>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• JQuery</li>
            <li>• APIs</li>
            <li>• Node.js</li>
            <li>• Express.js</li>
            <li>• Sequelize</li>
            <li>• MongoDB</li>
            <li>• PWAs</li>
            <li>• React</li>
          </ul>
          <button className='resume-btn'>
            <a href={resume} download>
              Download Resume PDF
            </a>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Resume;
