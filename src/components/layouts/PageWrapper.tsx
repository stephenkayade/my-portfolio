import React from 'react'
import { IPageWrapper } from '../../utils/types'
import Navbar from '../header/Navbar'

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {

    return (
        <>
            <main className={`page-landing`}>
                <div className={`2xl:max-w-screen-xl max-w-screen-lg mx-auto pt-16 pb-10 2xl:px-0 xl:px-0 md:px-10 lg:px-10 px-8`}>
                    <Navbar />
                    {children}
                </div>
            </main>
        </>
    )
}

export default PageWrapper