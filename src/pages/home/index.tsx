import React from 'react'
import PageWrapper from '../../components/layouts/PageWrapper'
import Navbar from '../../components/header/Navbar'
import GlitchText from '../../components/partials/GitchText'
import Bio from './Bio'
import NextScreenButton from '../../components/partials/NextScreen'
import SocialAccounts from '../../components/partials/SocialAccounts'
import FixedText from '../../components/partials/FixedText'

const Home = () => {
    return (
        <>
            <PageWrapper>

                <div className='pt-16'>

                    <div className='mb-12'>

                        <GlitchText text="I'm Oluwakayode Adediran" />
                        <Bio />
                    </div>

                    <NextScreenButton text='See more about me' link='/about' />

                    {/* Social icons */}
                    <div className='mt-7'>
                        <SocialAccounts />
                    </div>

                </div>


                {/* Fixed title text */}
                <FixedText
                    text='UM.'
                    size='xlarge'
                    position='fixed'
                />

            </PageWrapper>
        </>
    )
}

export default Home