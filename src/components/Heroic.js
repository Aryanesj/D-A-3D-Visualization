import React, { useState, useRef, useEffect } from 'react'
import styled, {css} from 'styled-components/macro'
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

const HeroicSlide = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
`

const HeroicSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {     /* Затемняет контейнер */
		content: '';
		position: absolute; 
		z-index: 2;
		width: 100%;
		height: 100vh;
		bottom: 0vh;
		left: 0;
		overflow: hidden;
		opacity: 0.4;
		background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%,
													 rgba(0,0,0,0.2) 50%, 
													 rgba(0,0,0,0.6) 100%)

	}
`

const HeroicImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`

const HeroicContent = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	max-width: 1600px;
	width: calc(100% - 100px); /* Сдвигает объект с центра влево */
	color: white;

	h1 {
		font-size: clamp(1rem, 8vw, 2rem); /*Изменение шрифта от ширины экрана от малого к большему*/
		font-weight: 400;
		text-transform: uppercase;
		text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
		text-align: left;
		margin-bottom: 0.8rem;
	}

	p {
		margin-bottom: 1.2rem;
		text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
	}
`

const Arrow = styled(IoMdArrowRoundForward)`
	margin-left: 0.5rem;

`

const SliderButtons = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50px;
	display: flex;
	z-index: 10;
`

const arrowButtons = css`
	width: 50px;
	height: 50px;
	color: #fff;
	cursor: pointer;
	background: #000d1a;
	border-radius: 50px;
	padding: 10px;
	margin-right: 1rem;
	user-select: none; /* Ограницение безумного клика */
	transition: 0.5s; /* Время анимации */

	&:hover {
		background: teal;
		transform: scale(1.05); /* Увеличение объекта */
	}
`

const NextArrow = styled(IoArrowForward)`
	${arrowButtons}
`

const PrewArrow = styled(IoArrowBack)`
	${arrowButtons}
`



const Heroic = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

const nextSlide = () => {
	setCurrent(current === length - 1 ? 0 : current + 1)
	if(timeout.current) {
			clearTimeout(timeout, current)
		}
	// console.log(current)
}

const prevSlide = () => {
	setCurrent(current === 0 ? length - 1 : current - 1)
	if(timeout.current) {
			clearTimeout(timeout, current)
		}
	// console.log(current)
};

// useEffect(() => { /* Задает автоматическое пролистывание слайдов */
// 	const nextSlide = () => {
// 		setCurrent(current => (current === length - 1 ? 0 : current + 1))
// 	}
// 	timeout.current = setTimeout(nextSlide, 4000)
// 	return function() {
// 		if(timeout.current) {
// 			clearTimeout(timeout, current)
// 		}
// 	}
// }, [current, length]);

	if(!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<HeroicSection>
			<HeroicWrapper>
				{slides.map((slide, index) => {
					return (
						<HeroicSlide key={index}>
						  {index === current && (
						  		<HeroicSlider>
								<HeroicImage src={slide.image} alt={slide.alt}/>
									<HeroicContent>
										<h1>{slide.title}</h1>
										<p>{slide.price}</p>
										<Button to={slide.path} 
												  primary='true'
												  style={{maxWidth: '160px'}}
										>
											{slide.label}
										<Arrow />
										</Button>
									</HeroicContent>
							</HeroicSlider>
						  	)}
						</HeroicSlide>
					)
				})}
				<SliderButtons>
				 	<PrewArrow onClick={prevSlide}/>
					<NextArrow onClick={nextSlide}/>
				</SliderButtons>
			</HeroicWrapper>
		</HeroicSection>
	)
}

export default Heroic