import React from 'react';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';

import gsLogo from '../../assets/images/experience/gs.png';
import yokogawaLogo from '../../assets/images/experience/Yokogawa-Marex.png';
import stainlessLogo from '../../assets/images/experience/Stainless-Games.png';
import jpLogo from '../../assets/images/experience/jpmorgan.jpg';

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title='Experience'>
        <div className='row' style={{marginBottom: '10px'}}>
          <ExperienceUnit
              logo={jpLogo}
              colour='#00477B'
              title='J.P. Morgan'
              link='https://www.jpmorgan.com/'
              timeperiod='2020 - Present'
              subtitle="Working in the Investment Banking space as an IC. Leading the upskilling effort of 40+ Java developers through Spotify's Chapter Model. Playing a pivotal role in architecting the move to cloud-native and the cloud."
          />
          <ExperienceUnit
            logo={gsLogo}
            colour='#FFFFFF'
            title='Goldman Sachs'
            link='https://www.goldmansachs.com/'
            timeperiod='2015 - Present'
            subtitle='Led the development of revamping the existing CRM platform and development of banker productivity tools.'
          />
          <ExperienceUnit
            logo={yokogawaLogo}
            colour='#0000a4'
            title='Yokogawa Marex'
            link='https://ymx.yokogawa.com/'
            timeperiod='2014 - 2015'
            subtitle='Worked on the ExaQuantum system, a Plant Information Management System, written in C++.'
          />
        </div>
        <div className='row'>
          <ExperienceUnit
            logo={stainlessLogo}
            colour='#000000'
            title='Stainless Games'
            link='http://www.stainlessgames.com/'
            timeperiod='2014'
            subtitle='Worked on the game "Magic Duels", written in C++ using their own in-house games engine.'
          />
        </div>
      </Section>
    );
  }
}

export default ExperienceSection;
