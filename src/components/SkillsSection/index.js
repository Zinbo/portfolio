import React from 'react';
import Section from '../Section';
import SkillUnit from '../SkillUnit';

import java from '../../assets/images/skills/java.png';
import spring from '../../assets/images/skills/spring.png';
import hibernate from '../../assets/images/skills/hibernate.png';
import mockito from '../../assets/images/skills/mockito.png';
import javascript from '../../assets/images/skills/javascript.svg';
import typescript from '../../assets/images/skills/typescript.svg';
import react from '../../assets/images/skills/react.svg';
import css3 from '../../assets/images/skills/css3.svg';
import html5 from '../../assets/images/skills/html5.svg';
import node from '../../assets/images/skills/node.svg';
import mongo from '../../assets/images/skills/mongodb.svg';
import sql from '../../assets/images/skills/sql.png';
import ddd from '../../assets/images/skills/DDD.png';

import kotlin from '../../assets/images/skills/Kotlin.svg';
import csharp from '../../assets/images/skills/C_Sharp.svg';
import rabbitmq from '../../assets/images/skills/rabbitmq.svg';
import angular from '../../assets/images/skills/angular.svg';
import rxjava from '../../assets/images/skills/rxjava.png';
import docker from '../../assets/images/skills/docker.png';
import kubernetes from '../../assets/images/skills/kube.png';

import './styles.scss';

class SkillsSection extends React.Component {
  render() {
    return (
      <Section className='skills' title='Skills'>
        <div className='skills'>
          <div className='subtitle'>Proficient:</div>
          <div className='row'>
            <SkillUnit
              logo={java}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={spring}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={hibernate}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={mockito}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={javascript}
              colour='#f7df1eff'
            />
            <SkillUnit
              logo={typescript}
              colour='#007acc'
            />
            <SkillUnit
              logo={react}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={css3}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={html5}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={node}
              colour='#000000'
            />
            <SkillUnit
              logo={mongo}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={sql}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={ddd}
              colour='#029ecf'
            />
          </div>

          <div className='subtitle'>Familar:</div>
          <div className='row'>
            <SkillUnit
              logo={kotlin}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={rxjava}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={csharp}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={angular}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={docker}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={kubernetes}
              colour='#FFFFFF'
            />
            <SkillUnit
              logo={rabbitmq}
              colour='#FFFFFF'
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default SkillsSection;
