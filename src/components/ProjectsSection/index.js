import React from 'react';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';

import stackToBasicsLogo from '../../assets/images/projects/StackToBasics.png';
import pokemonEasyCatch from '../../assets/images/projects/PokemonEasyCatch.png';
import drivingPassRate from '../../assets/images/projects/DrivingPassRates.png';

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title='Projects'>
        <div className='row'>
          <ExperienceUnit
            logo={stackToBasicsLogo}
            colour='#1e1e1e'
            title='Stack to Basics'
            link='https://stacktobasics.com/'
            subtitle='A blog which explains development concepts in a easy to understand format. Focues on a range of topics, from front to back end and everything inbetween.'
          />
          <ExperienceUnit
              logo={drivingPassRate}
              title='Driving Pass Rate'
              link='https://drivingpassrate.co.uk'
              subtitle='A Next.JS app where you can enter your postcode or select a city and it will show you the Driving Test Centres which have the best pass rates near you, backed by GOV.UK data.'
          />
          <ExperienceUnit
            logo={pokemonEasyCatch}
            colour='#CC0000'
            title='Pokemon Easy Catch'
            link='https://github.com/Zinbo/Pokemon-Easy-Catch'
            subtitle='A mobile app which tells you which Pokémon game has the best catch rate per Pokémon. Built using Flutter, Spring Boot, MongoDB, and the PokéAPI.'
          />
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
