import React from 'react'
import PageWrapper from '../../components/layouts/PageWrapper'
import NextScreenButton from '../../components/partials/NextScreen'
import SocialAccounts from '../../components/partials/SocialAccounts'
import TitleText from '../../components/partials/TitleText'
import FixedText from '../../components/partials/FixedText'

const Resume = () => {

    return (
        <>
            <PageWrapper>

                <div className='max-w-screen-md mx-auto mb-12 pt-16'>

                    <TitleText
                        fontWeight='extrabold'
                        text='Resume.'
                        size='5xl'
                    />

                    <div className="mt-20">

                        <div className="mt-12">

                            <NextScreenButton text="Are you convinced to contact me now?" link='' />

                        </div>

                    </div>


                </div>

                {/* Fixed title text */}
                <FixedText
                    fontWeight='extrabold'
                    text='Resume'
                    size='xlarge'
                    position='fixed'
                />



            </PageWrapper>
        </>
    )
}

export default Resume