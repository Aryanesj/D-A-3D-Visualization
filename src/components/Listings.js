import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import DesignOne from '../images/design-1.jpg'
import DesignTwo from '../images/design-2.jpg'

const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 10rem calc((100vw - 1300px) / 2);
	background-color: #666666;
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
	width: 140px;
	transition: 0.4s;

	&:hover {
		transform: translateY(-2px);
	}
`

const Arrow = styled(IoMdArrowRoundForward)`
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
					>View our newest Design</h1>
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
						<h2>8 bed 10 bath House in Venice, California</h2>
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
						<h2>4 bed 2 bath House in Kiev, Usraina</h2>
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