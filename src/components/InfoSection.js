import React from 'react'
import styled from 'styled-components'
import { Button } from './Button.js'

const Section = styled.section`
	background: #414141;
	width: 100%;
	height: 100%;
	padding: 4rem 0rem;
`

const Container = styled.div`
	padding: 3rem calc((100vw - 1300px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 700px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const ColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	line-height: 1.4;
	padding: 1rem 2rem;
	order: ${({reverse}) => (reverse ? '2' : '1')};

	h1 {
		margin-bottom: 2.5rem;
		font-size: clamp(1.5rem, 6vw, 2rem);
	}

	p {
		margin-bottom: 2rem;
	}
`

const ColumnRight = styled.div`
	padding: 1rem 2rem;
   /* order: ${({reverse}) => (reverse ? '1' : '2')}; */
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		order: ${({reverse}) => (reverse ? '1' : '2')};
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;

		@media screen and (max-width: 768px) {
			width: 90%;
			height: 90%;
		}
	}
`

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, delay}) => {
	return (
		<Section>
			<Container>
				<ColumnLeft
					reverse={reverse}
					data-aos='fade-up'
					data-aos-duration='900'
					// -откл повтор анимации при прокрутке
					data-aos-delay='600'
					data-aos-once='true'
					data-aos-anchor-placement='center buttom'
				>
					<h1 style={{color: 'white'}}>{heading}</h1>
					<p style={{color: '#ddd9d9', fontSize: '18px'}}>{paragraphOne}</p>
					<p style={{color: '#ddd9d9', fontSize: '18px'}}>{paragraphTwo}</p>
					<Button to='/homes' primary='true' style={{fontWeight: "bold", marginTop: '20px'}}>
						{buttonLabel}
					</Button>
				</ColumnLeft>
				<ColumnRight reverse={reverse}>
					<img src={image}
						  alt="home" 
						  data-aos='zoom-out'
						  data-aos-duration='700'
						  data-aos-delay='200'
						  data-aos-once='true'
						  data-aos-anchor-placement='center buttom'
						  />
				</ColumnRight>
			</Container>
		</Section>
	)
}

export default InfoSection