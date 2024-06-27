import React from 'react'
import PageWrapper from '../../components/layouts/PageWrapper'
import NextScreenButton from '../../components/partials/NextScreen'
import SocialAccounts from '../../components/partials/SocialAccounts'
import TitleText from '../../components/partials/TitleText'
import FixedText from '../../components/partials/FixedText'
import ProjectList from './ProjectList'
import Skills from './Skills'

const Projects = () => {

    return (
        <>
            <PageWrapper>

                <div className='max-w-screen-md mx-auto mb-12 pt-16'>

                    <TitleText
                        fontWeight='extrabold'
                        text='Projects.'
                        size='5xl'
                    />

                    <div className="mt-16">

                        <TitleText
                            fontWeight='extrabold'
                            text='skills & Tools.'
                            size='xl'
                            className='mb-6'
                        />

                        <Skills />

                    </div>


                    <div className="mt-20">

                        <ProjectList />

                        <div className="mt-12">

                            <NextScreenButton text="Let's go to resume" link='resume' />

                        </div>

                    </div>


                </div>

                {/* Fixed title text */}
                <FixedText
                    fontWeight='extrabold'
                    text='Projects'
                    size='xlarge'
                    position='fixed'
                />



            </PageWrapper>
        </>
    )
}

export default Projects