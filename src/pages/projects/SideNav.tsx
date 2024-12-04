import { FC, MouseEvent, useEffect } from 'react'
import Modal from '../../components/partials/Modal'
import { ISideNav } from '../../utils/types'
import TitleText from '../../components/partials/TitleText'

const SideNav: FC<ISideNav> = ({ data, isShow, closeModal }) => {

    useEffect(() => {

        isShow === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    }, [isShow])

    const closeX = (e?: MouseEvent<HTMLElement>) => {

        if (e) e.preventDefault()

        closeModal(e)

    }

    return (
        <>
            <Modal isShow={isShow}>

                <aside className="absolute sidenav bg-[#020a13] 2xl:w-[550px] xl:w-[550px] lg:w-[550px] md:w-[550px] w-full  bottom-0 top-0 z-40 py-9 px-8">

                    <div className='overflow-y-auto h-full pb-12'>

                        <div className="flex items-center justify-between border-b-[0.5px] border-slate-50/15 pb-4">

                            <button onClick={(e) => closeX(e)} className="2xl:size-7 size-5 cursor flex items-center 2xl:border-none border-2 border-slate-400 rounded-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="rgb(148 163 184)" className="2xl:size-5 size-3 text-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </button>

                            <button onClick={(e) => closeX(e)} className='text-slate-500 2xl:text-base text-sm font-bold hover:underline capitalize'>Back to projects</button>

                        </div>

                        <div className='pt-7'>

                            <div className='mb-7'>


                                <TitleText
                                    fontWeight='bold'
                                    text={data.title}
                                    size='xl'
                                    className='mb-3'
                                />

                                <p className='text-slate-300 2xl:text-lg text-sm font-extralight'>{data.headline}</p>

                            </div>


                            <div className='mb-8'>

                                <img src={data.img} alt="" className='rounded-lg' />

                            </div>

                            <div className='mb-7'>

                                <TitleText
                                    fontWeight='medium'
                                    text='About'
                                    size='lg'
                                    className='mb-3'
                                />

                                <p className='text-slate-300 2xl:text-lg text-sm font-extralight'>{data.desc}</p>

                            </div>

                            <div className='mb-7'>

                                <TitleText fontWeight='medium' text='Technologies' size='lg' className='mb-2' />

                                <div className="pl-1">

                                    {
                                        data!.tags?.map((tag, index) => (
                                            <div key={index} className='inline-flex flex-wrap'>
                                                <span className={`${data!.tags!.length > 4 ? 'mb-3' : ''} bulge mr-4 bg-[#2d3d4d] rounded-sm px-3 py-1 2xl:text-[15px] text-xs font-medium text-white outline-offset-2 outline outline-slate-600`}>
                                                    {tag}
                                                </span>
                                            </div>

                                        ))
                                    }

                                </div>


                            </div>

                            <div className='mb-7'>

                                <TitleText fontWeight='medium' text='Website' size='lg' className='mb-2' />

                                <a href={`${data.link}`} target='_blank' rel="noreferrer" className='text-slate-400 2xl:text-lg text-sm font-medium hover:underline'>{data.link}</a>


                            </div>


                        </div>

                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center">

                        <a href={`${data.link}`} target='_blank' rel="noreferrer" className='flex items-center justify-center h-full bg-slate-700 w-full'>

                            <span className='text-sm font-semibold text-white pr-3 hover:underline'>Open Project</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>

                        </a>
                    </div>

                </aside>
            </Modal>
        </>
    )
}

export default SideNav