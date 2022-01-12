import React from 'react'
import styled from 'styled-components'
import { Button } from './Button.js'
import ImageOne from '../images/office.jpg'

const Section = styled.section`
	background: #464444;
	padding: 12rem 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: black;
`

const Container = styled.div`
	background: #e6e6e6;
	padding: 3rem 2rem;
	position: relative;
`

const Wrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`

const ColumnLeft = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0px -15px;
	justify-content: flex-start;
	padding: 1rem;
`

const Content = styled.div`
	flex: 0 0 50%;

	@media screen and (max-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
		margin-top: 250px;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 2rem;
	}

	p {
		margin-bottom: 1rem;
		line-height: 1.5;
	}
`

const ColumnRight = styled.div`
	position: absolute;
	top: -80px;
	right: 0;
	max-width: 850px;
	height: 140%;
	width: 45%;
	padding-left: 1rem;

	@media screen and (max-width: 768px) {
		height: 320px;
		top: -65px;
		width: 80%;
		margin: 0 auto;
		left: 0;
	}
`

const Image = styled.img`
	height: 90%;
	width: 110%;
	object-fit: cover;
`

const Features = () => {
	return (
		<Section>
			<Container>
				<Wrap>
					<ColumnLeft>
						<Content
							data-aos='fade-right'
							data-aos-duration='1200'
							data-aos-delay='300'
							data-aos-once='true'
							data-aos-anchor-placement='center bottom'
						>
							<h1>Stunning Interior</h1>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus harum nemo dignissimos quis sapiente animi odio eum error non.</p>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, non.</p>
							<Button to='/homes'>More Design</Button>
						</Content>
					</ColumnLeft>
					<ColumnRight>
						<Image 
							src={ImageOne} 
							alt='Design' 
							data-aos='fade-left'
							data-aos-duration='1300'
							data-aos-once='true'
							data-aos-anchor-placement='center bottom'
						/>
					</ColumnRight>
				</Wrap>
			</Container>
		</Section>
	)
}

export default Features