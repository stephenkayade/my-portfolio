import React, { FC } from 'react'
import { skills } from '../../components/mocks'
import { ISkillsData } from '../../utils/types'

const SkillsList:FC<ISkillsData> = ({data}) => {
    return (
        <>

            {
                data.map((skill, index) => (
                    <div key={index} className='inline-flex flex-wrap'>
                        <span className={`${data.length > 10 ? 'mb-2' : ''} bulge mr-3 rounded bg-[#020a13]/40 hover:bg-[#2d3d4d]/80 cursor-pointer px-2 py-px text-xs font-light text-white outline-offset-2 outline outline-slate-600`}>{skill}</span>
                    </div>
                ))
            }
        </>
    )
}

export default SkillsList