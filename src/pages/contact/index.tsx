import PageWrapper from '../../components/layouts/PageWrapper'
import NextScreenButton from '../../components/partials/NextScreen'
import TitleText from '../../components/partials/TitleText'
import FixedText from '../../components/partials/FixedText'
import {contactList } from '../../components/mocks'
import ContactList from './ContactList'

const Contact = () => {
    return (
        <>
            <PageWrapper>

                <div className='2xl:max-w-screen-lg max-w-screen-md mx-auto mb-12 pt-16'>

                    <TitleText
                        fontWeight='extrabold'
                        text='contact me.'
                        size='5xl'
                    />

                    <div className="mt-16">

                        <ContactList data={contactList} />

                        <div className="mt-12">

                            <NextScreenButton text='Click to go home' link='' />

                        </div>

                    </div>

                </div>

                {/* Fixed title text */}
                <FixedText
                    fontWeight='extrabold'
                    text='contact me'
                    size='xlarge'
                    position='fixed'
                />


            </PageWrapper>
        </>
    )
}

export default Contact