import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import DesignOne from '../images/design-1.jpg'
import DesignTwo from '../images/design-2.jpg'

const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 3rem calc((100vw - 1300px) / 2);
	background-color: #525252;
`

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem 1rem;
`

const Heading = styled.div`
	font-size: 1.5rem;
	padding: 2rem 1rem;
	margin-bottom: 40px;
	letter-spacing: 1.5px;

	@media screen and(max-width: 768px) {
		text-align: start;
	}
`

const InfoRow = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem 0rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 0rem;
	}
`

const InfoWrap = styled.div`
	padding: 0rem 1rem;
	min-height: 550px;
	height: 100%;

	h2 {
		margin-bottom: 1rem;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		margin-bottom: 1rem;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	max-width: 600px;
	max-height: 400px;
	object-fit: cover;
	margin-bottom: 1rem;
`

const ImageTwo = styled.img`
	width: 100%;
	height: 100%;
	max-width: 600px;
	max-height: 400px;
	object-fit: cover;
	margin-bottom: 1rem;
	margin-top: 120px;

	@media screen and (max-width: 768px) {
		margin-top: 0px;
	}
`

const InfoLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: white;
	width: 190px;
	height: 25px;
	transition: 0.4s;
	letter-spacing: 1.5px;
	font-weight: bold;
	margin-top: 25px;

	p {
		padding-left: 15px;
	}

	&:hover {
		transform: translateX(3px);
		transition: 0.4s;
	}
`

const Arrow = styled(FaLongArrowAltRight)`
	margin-left: 10px;
`

const Listings = () => {
	return (
		<Section>
			<Container>
				<Heading>
					<h1 
						data-aos='zoom-out-right'
						data-aos-duration='1500'
						data-aos-delay='250'
						data-aos-once='true'
						data-aos-anchor-placement='center bottom'
					>View our newest projects</h1>
				</Heading>
				<InfoRow>
					<InfoWrap
						data-aos='zoom-out-up'
						data-aos-duration='1600'
						data-aos-delay='300'
						data-aos-once='true'
						data-aos-anchor-placement='center bottom'
					>
						<Image src={DesignOne} alt='design' />
						<h2>The first draft of the room visualization</h2>
						<InfoLink to='/'>
							<p>View details</p>
							<Arrow />
						</InfoLink>
					</InfoWrap>
					<InfoWrap
						data-aos='zoom-out-down'
						data-aos-duration='1700'
						data-aos-delay='450'
						data-aos-once='true'
						data-aos-anchor-placement='center bottom'
					>
						<ImageTwo src={DesignTwo} alt='design' />
						<h2>The second draft of the room visualization</h2>
						<InfoLink to='/'>
							<p>View details</p>
							<Arrow />
						</InfoLink>
					</InfoWrap>
				</InfoRow>
			</Container>
		</Section>
	)
}

export default Listings