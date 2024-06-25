import React, { FC, MouseEvent } from 'react'
import Modal from '../../components/partials/Modal'
import { ISideNav } from '../../utils/types'

const SideNav: FC<ISideNav> = ({ data, isShow, closeModal }) => {

    const closeX = (e:MouseEvent<HTMLElement>) => {

        if(e)e.preventDefault()

        closeModal()

    }

    return (
        <>
            <Modal isShow={isShow}>
                <aside className="absolute bg-[#020a13] w-[550px] right-0 bottom-0 top-0 z-40 py-9 px-8">

                    <div>

                        <div className="flex items-center justify-between border-b-[0.5px] border-slate-50/10 pb-5">

                            <div onClick={(e) => closeX(e)} className="h-5 w-5 flex items-center border-2 border-slate-400 rounded-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="rgb(148 163 184)" className="size-5 text-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </div>

                            <button onClick={(e) => closeX(e)} className='text-slate-500 text-sm font-bold hover:underline capitalize'>Back to project</button>

                        </div>

                        <div>
                            <h3>{data.title}</h3>
                        </div>

                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center">

                        <button className='flex items-center justify-center h-full bg-slate-700 w-full'>

                            <span className=' text-white pr-3'>Open Projects</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>

                        </button>
                    </div>

                </aside>
            </Modal>
        </>
    )
}

export default SideNav