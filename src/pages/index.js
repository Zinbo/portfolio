import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'
import CertificationsSection from "../components/CertificationsSection";

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Shane Jennings</span> 👋
      </h5>

        <h3 className="bold">
          Full stack software developer with 9 years' experience building applications in a variety of domains, from Fintech to Gaming.
        </h3>

        <ProjectsSection />
        <ExperienceSection />
          <CertificationsSection />
        <SkillsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
