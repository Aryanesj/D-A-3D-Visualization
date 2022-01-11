import React from 'react'
import Heroic from '../components/Heroic.js'
import InfoSection from '../components/InfoSection.js'
import { InfoData, InfoDataTwo } from '../data/InfoData.js'
import Listings from '../components/Listings.js'
import Features from '../components/Features.js'
import { SliderData } from '../data/SliderData.js'

const Home = () => {
	return (
		<>
			<Heroic slides={SliderData} />
      	<InfoSection {...InfoData}/>
      	<Listings />
      	<Features />
      	<InfoSection {...InfoDataTwo}/>
		</>
	)
}

export default Home