import React from 'react';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';

import stackToBasicsLogo from '../../assets/images/projects/StackToBasics.png';
import pokemonEasyCatch from '../../assets/images/projects/PokemonEasyCatch.png';
import tobyCarveryLogo from '../../assets/images/projects/TobyCarveryLogo.png';

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
            subtitle='A blog which explains concepts in a easy to understand format. Focused on Java and back-end for now. Created using GatsbyJS and the JAMStack.'
          />
          <ExperienceUnit
            logo={pokemonEasyCatch}
            colour='#CC0000'
            title='Pokemon Easy Catch'
            link='https://github.com/Zinbo/Pokemon-Easy-Catch'
            subtitle='A mobile app which tells you which Pokémon game has the best catch rate per Pokémon. Built using Flutter, Spring Boot, MongoDB, and the PokéAPI.'
          />
          <ExperienceUnit
            logo={tobyCarveryLogo}
            colour='#a1172e'
            title='Toby Carvery Tracker'
            link='https://github.com/Zinbo/tobery-tracker'
            subtitle='A React PWA to track, score, and review each Toby Carvery to help with my mission to visit every restaurant in the UK.'
          />
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
