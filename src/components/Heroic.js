import React from 'react'
import styled, { сss } from 'styled-components/macro'
import { Button } from './Button.js'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const HeroicSection = styled.section`
	height: 100vh;
	max-height: 1100px;
	position: relative;
	overflow: hidden;
`

const HeroicWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
`

const HeroicSlide = styled.div``

const HeroicSlider = styled.div``

const HeroicImage = styled.img``

const HeroicContent = styled.div``

const Arrow = styled(IoMdArrowRoundForward)``

const SliderButtons = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50px;
	display: flex;
	z-index: 10;
`

const arrowButtons = styled.css`
	width: 50px;
	height: 50px;
	color: #fff;
	cursor: pointer;
	background: #000d1a;
	border-radius: 50px;
	padding: 10px;
	margin-right: 1rem;
	user-select: none;
	transition: 0.5s;

	&:hover {
		background: teal;
		transform: scale(1.05);
	}
`


const PrewArrow = styled(IoArrowForward)`
	${arrowButtons}
`

const NextArrow = styled(IoArrowBack)`
	${arrowButtons}
`

const Heroic = ({ slides }) => {
	return (
		<HeroicSection>
			<HeroicWrapper>
				{slides.map((slide, index) => {
					return (
						<HeroicSlide key={index}>
							<HeroicSlider>
								<HeroicImage />
									<HeroicContent>
										<h1>{slide.title}</h1>
										<p>{slide.price}</p>
										<Button to={slide.path} 
												  primary='true'
												  style={{maxWidth: '160px'}}
										>
											{slide.label}
										{<Arrow />}
										</Button>
									</HeroicContent>
							</HeroicSlider>
						</HeroicSlide>
					)
				})}
				<SliderButtons>
					<NextArrow />
					<PrewArrow />
				</SliderButtons>
			</HeroicWrapper>
		</HeroicSection>
	)
}

export default Heroic