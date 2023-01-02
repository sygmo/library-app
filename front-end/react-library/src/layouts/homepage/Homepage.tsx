import React from 'react'
import { ExploreTopBooks } from './components/ExploreTopBooks'
import { Carousel } from './components/Carousel'
import { Heroes } from './components/Heroes'
import { LibraryServices } from './components/LibraryServices'

export const Homepage = () => {
    return (
        <>
            <ExploreTopBooks />
            <Carousel />
            <Heroes />
            <LibraryServices />
        </>
    )
}
