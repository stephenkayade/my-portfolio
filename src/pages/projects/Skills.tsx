import React from 'react'
import SkillsList from './SkillsList'
import { skills } from '../../components/mocks'

const Skills = () => {
  return (
    <>
        <SkillsList data={skills} />
    </>
  )
}

export default Skills