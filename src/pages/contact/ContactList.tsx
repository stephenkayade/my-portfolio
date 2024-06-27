import React, { FC } from 'react'
import { IContactList } from '../../utils/types'

const ContactList: FC<IContactList> = ({ data }) => {
    return (
        <>
            <div className='text-white/70 text-md font-light 2xl:leading-[2.3em] lg:leading-[2.3em] md:leading-[2.3em] leading-loose'>

                {
                    data?.map((detail) => (
                        <div key={detail.id} className='xl:w-96 w-full'>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    <a href={detail.link} target='_blank' className=''>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="2xl:size-5 lg:size-6 xl:size-5 size-4"
                                            fill={detail.fill}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d={`${detail.iconPath}`} />
                                        </svg>
                                    </a>
                                </div>
                                <div className="xl:w-96 w-full flex items-center justify-between pl-4">
                                    <p className='text-lg text-slate-100'>{detail.title}:</p>
                                    <a className='text-blue-100 underline' href={detail.link}>{detail.text}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div >
        </>
    )
}

export default ContactList