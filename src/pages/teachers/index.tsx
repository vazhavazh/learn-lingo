import Filter from '@/components/Filter/Filter'
import Header from '@/components/Header/Header'
import React from 'react'

type teachersProps = {}

const TeachersPage: React.FC<teachersProps> = () => {
    return (
        <>
            <Header />
            <div className="px-3 m680:px-16 lg:px-32 bg-gray-100 border border-solid border-red-500">
                <Filter />
            </div>
        </>
    )
}
export default TeachersPage
