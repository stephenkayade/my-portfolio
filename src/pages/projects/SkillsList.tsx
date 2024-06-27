import React, { FC } from 'react'
import { skills } from '../../components/mocks'
import { ISkillsData } from '../../utils/types'

const SkillsList:FC<ISkillsData> = ({data}) => {
    return (
        <>

            {
                data.map((skill, index) => (
                    <div key={index} className='inline-flex flex-wrap'>
                        <span className={`${data.length > 10 ? '2xl:mb-4 mb-2' : ''} bulge mr-3 rounded  bg-[#2d3d4d]/70 hover:bg-[#020a13]/80 cursor-pointer 2xl:px-3 px-2 2xl:py-1 py-px 2xl:text-base text-xs font-light text-white outline-offset-2 outline outline-slate-600`}>{skill}</span>
                    </div>
                ))
            }
        </>
    )
}

export default SkillsList