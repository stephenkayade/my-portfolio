import React from 'react'
import PageWrapper from '../../components/layouts/PageWrapper'
import Navbar from '../../components/header/Navbar'
import GlitchText from '../../components/partials/GitchText'
import NextScreenButton from '../../components/partials/NextScreen'
import SocialAccounts from '../../components/partials/SocialAccounts'
import TitleText from '../../components/partials/TitleText'
import FixedText from '../../components/partials/FixedText'
import TimeLine from '../../components/partials/TimeLine'
import { AboutTimelines, MyReadsTimelines } from '../../components/mocks'
import Reveal from '../../components/animations/Reveal'

const Home = () => {
    return (
        <>
            <PageWrapper>

                <div className='max-w-screen-md mx-auto mb-12 pt-16'>

                    <TitleText
                        fontWeight='extrabold'
                        text='about me.'
                        size='5xl'
                    />

                    <div className="mt-20">

                        <Reveal>

                            <TimeLine data={AboutTimelines} />

                        </Reveal>


                        <div className="mt-20">

                            <TitleText
                                fontWeight='extrabold'
                                text='My Reads.'
                                size='xl'
                                className='mb-12'
                            />


                            <TimeLine data={MyReadsTimelines} />



                        </div>

                        <div className="mt-12">

                            <NextScreenButton text='See more about me' link='projects' />

                        </div>

                    </div>


                </div>

                {/* Fixed title text */}
                <FixedText
                    fontWeight='extrabold'
                    text='about me'
                    size='xlarge'
                    position='fixed'
                />


            </PageWrapper>
        </>
    )
}

export default Home