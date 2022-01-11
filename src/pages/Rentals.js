import React from 'react'
import Heroic from '../components/Heroic.js'
import { SliderData } from '../data/SliderData.js'


const Rentals = () => {
	return (
		// Здесь можно сменить на sliderDataTwo/закоментировано в дате
		<Heroic slides={SliderData} /> 
	)
}

export default Rentals