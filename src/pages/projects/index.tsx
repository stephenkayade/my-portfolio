import React, { MouseEvent, useState } from 'react'
import PageWrapper from '../../components/layouts/PageWrapper'
import Navbar from '../../components/header/Navbar'
import GlitchText from '../../components/partials/GitchText'
import NextScreenButton from '../../components/partials/NextScreen'
import SocialAccounts from '../../components/partials/SocialAccounts'
import TitleText from '../../components/partials/TitleText'
import FixedText from '../../components/partials/FixedText'
import TimeLine from '../../components/partials/TimeLine'
import { AboutTimelines, MyReadsTimelines, ProjectsData } from '../../components/mocks'
import SideNav from './SideNav'

const Projects = () => {

    const [data, setData] = useState<any>({})
    const [show, setShow] = useState<boolean>(false)

    const toggleNav = (e: MouseEvent<HTMLElement>, data: any) => {

        if (e) e.preventDefault()

        if (data) {
            setData(data)
        }

        setShow(!show)

    }

    return (
        <>
            <PageWrapper>

                <div className='max-w-screen-md mx-auto mb-12 pt-16'>

                    <TitleText
                        fontWeight='extrabold'
                        text='Projects.'
                        size='6xl'
                    />

                    <div className="mt-20">

                        <div className="image-gallery grid gap-4 grid-cols-2">

                            {
                                ProjectsData.map((project) => (

                                    <div onClick={(e) => toggleNav(e, project)} key={project.id} className="min-h-96 rounded-lg bg-white content bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${project.img})` }}>

                                        <div className='inner px-5 pb-8'>

                                            <div>
                                                <h3 className='text-white text-xl'>{project.title}</h3>
                                                <p className='text-white text-sm font-light block text-wrap py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, exercitationem quaerat incidunt vitae maxime excepturi!</p>
                                                {
                                                    project.tags.map((tag) => (
                                                        <div className='inline-flex flex-wrap'>
                                                            <span className=" mr-3 rounded-full bg-[#020a13]/40 px-2 py-px text-xs font-light text-white outline-offset-2 outline outline-slate-600">{tag}</span>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>

                                ))
                            }


                        </div>

                        <div className="mt-12">

                            <NextScreenButton text='See more about me' link='/about' />

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

                <SideNav
                    data={data}
                    isShow={show}
                    closeModal={toggleNav}
                />


            </PageWrapper>
        </>
    )
}

export default Projects