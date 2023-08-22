import CardList from '@/components/CardList/CardList'
import Filter from '@/components/Filter/Filter'
import Header from '@/components/Header/Header'
import React from 'react'

type teachersProps = {}

const TeachersPage: React.FC<teachersProps> = () => {
    return (
        <>
            <Header />
            <div className="px-3 m680:px-16 lg:px-32 bg-gray-100">
                <Filter />
                <CardList />
            </div>
        </>
    )
}
export default TeachersPage
