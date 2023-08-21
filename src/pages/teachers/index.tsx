import Header from '@/components/Header/Header'
import React from 'react'

type teachersProps = {}

const TeachersPage: React.FC<teachersProps> = () => {
    return (
        <>
            <Header />
            <div className="px-2 m680:px-16 lg:px-32 border border-solid border-red-500"></div>
        </>
    )
}
export default TeachersPage
