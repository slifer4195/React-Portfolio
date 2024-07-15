import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className='profile-container' id="about">
      <div className='profile-content'>
        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt='Sung Rung Yoo' className='profile-image' />
        <div className='profile-text'>
          <h2 className='about'>About Me</h2>
          <pre>
            <code>
              <span className="keyword">def</span> <span className="function-name">my(</span><span className='self'>self</span>
              <span className='function-name'>):</span><br/>
              <span className="variable">Education</span> <span className="equals">=</span> <span className="value">"Texas A&M University"</span> <br />
              <span className="variable">languages</span> <span className="equals">=</span> <span className="value">"Java, Python, C++, Javascript"</span> <br />
              <span className="variable">frameworks</span> <span className="equals">=</span> <span className="value">"Spring Boot, Flask, QT, React"</span> <br />
              <span className="variable">hobbies</span> <span className="equals">=</span> <span className="value">"Soccer, Netflix, Running, Music"</span> <br />
              <span className="keyword" id='return'>return</span> <span className="value">"Sung Rung Yoo"</span>
            </code> 
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Profile;
