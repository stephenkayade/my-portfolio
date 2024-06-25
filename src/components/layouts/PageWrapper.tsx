import React from 'react'
import { IPageWrapper } from '../../utils/types'
import Navbar from '../header/Navbar'

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
    return (
        <>
            <main className="page-landing">
                <div className="max-w-screen-lg mx-auto pt-16 pb-10">
                    <Navbar />
                    {children}
                </div>
            </main>
        </>
    )
}

export default PageWrapper