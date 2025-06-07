import PageWrapper from '../../components/layouts/PageWrapper'
import NextScreenButton from '../../components/partials/NextScreen'
import TitleText from '../../components/partials/TitleText'
import FixedText from '../../components/partials/FixedText'
import { Link } from 'react-router-dom'

const Resume = () => {

    return (
        <>
            <PageWrapper>

                <div className='xl:max-w-screen-md 2xl:max-w-screen-md md:max- max-w-screen-md mx-auto mb-12 pt-16'>

                    <TitleText
                        fontWeight='extrabold'
                        text='Resume.'
                        size='5xl'
                    />

                    <p className='pt-7'>
                        <span className='text-md text-slate-400 font-light'>Reach out to me via my</span>
                        <span>
                            <Link to='/contact' className='text-md text-white font-medium'> contact page,</Link>
                        </span>
                        <span>
                            <a href="https://drive.google.com/drive/folders/1bJIKwlk_5s_0MppXWMd7WQBhfvxpsUKc" target='_blank' rel="noreferrer" className='text-md text-white font-medium'> view,</a>
                        </span>
                        <span className='text-slate-400 font-light'> or </span>
                        <a href='../../../assets/files/Oluwakayode Adediran.pdf' download='Adediran Oluwakayode CV.pdf' className=' text-white font-medium'> download </a>
                        <span className='text-slate-400 font-light'> the resume </span>
                    </p>

                    <div className="mt-20">

                        <div className="mt-12">

                            <NextScreenButton text="Are you convinced to contact me now?" link='contact' />

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