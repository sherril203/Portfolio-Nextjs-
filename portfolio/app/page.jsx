import React from 'react'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Intro from '@/components/Intro'
import Education  from '@/components/Education'
const page = () => {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <Education/>
      <Work/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page