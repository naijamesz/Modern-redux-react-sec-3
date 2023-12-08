import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana_.png';
import SiriImg from './images/siri.png';
import 'bulma/css/bulma.css';

function App() {
  return (
    <>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title has-text-centered is-1'>Personal Digital Assistants</p>
        </div>
      </section>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                image={AlexaImg}
                description='Alexa was created by Amazon and helps you buy things.'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Cortana'
                handle='@cortana32'
                image={CortanaImg}
                description='Cortana was made by Microsoft. Who knows what it does?'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Siri'
                handle='@siri01'
                image={SiriImg}
                description='Siri was made by Apple and is being phased out'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// practice with Props colors  with BrightText.js (notused)
// import React from 'react';
// import BrightText from './BrightText'

// function App() {
//     return (
//         <div>
//           <BrightText color="red" />
//           <BrightText color="green" />
//           <BrightText color="blue" />
//         </div>
//     );
// }

// export default App;
