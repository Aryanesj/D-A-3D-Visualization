import React from 'react'
import styled, { css } from 'styled-components/macro'

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
									</HeroicContent>
							</HeroicSlider>
						</HeroicSlide>
					)
				})}
			</HeroicWrapper>
		</HeroicSection>
	)
}

export default Heroic