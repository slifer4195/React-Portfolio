import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-content'>
        <img src='/images/profile.jpg' alt='Sung Rung Yoo' className='profile-image' />
        <div className='profile-text'>
          <h2 className='about'>About Me</h2>
          <pre>
            <code>
              <span className="keyword">def</span> <span className="function-name">myself</span>():<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">languages</span> <span className="equals">=</span> <span className="value">"Java, Python, C++, Javascript"</span> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">frameworks</span> <span className="equals">=</span> <span className="value">"Spring Boot, Flask, QT, React"</span> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">hobbies</span> <span className="equals">=</span> <span className="value">"Soccer, Netflix, Running, Music"</span> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="value">"Sung Rung Yoo"</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Profile;
