import React from 'react';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';

import gsLogo from '../../assets/images/experience/gs.png';
import yokogawaLogo from '../../assets/images/experience/yokogawa-Marex.png';
import stainlessLogo from '../../assets/images/experience/Stainless-Games.png';

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title='Experience'>
        <div className='row'>
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
          <ExperienceUnit
            logo={stainlessLogo}
            colour='#000000'
            title='Stainless Games'
            link='http://www.stainlessgames.com/'
            timeperiod='2014'
            subtitle='Worked on the game "Magic: The Gathering - Duels of the Planeswalkers", written in C++ using their own in-house games engine.'
          />
        </div>
      </Section>
    );
  }
}

export default ExperienceSection;
