import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Button } from './Button.js'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Section = styled.section`
	background: #151b1e;
	color: white;
	width: 100%;
	min-height: 600px;
	padding: 3rem calc((100vw - 1300px) / 2);

`

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem;
`

const FooterTop = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4rem 0rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const Quote = styled.div`
	flex: 1;
	padding: 2rem 0rem;

	h3 {
		font-size: clamp(2rem, 8vw, 5rem)
	}
`

const FooterInfo = styled.div`
	padding: 1rem;
	line-height: 3;
	display: flex;
	flex-direction: column;
	
	a {
		color: white;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		padding: 1rem 0rem;
	}
`

const FooterBottom = styled.div`
	display: flex;
	padding: 2rem 0rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const SocialIcons = styled.div`
	display: flex;
	width: 45%;

	@media screen and (max-width: 768px) {
		margin-bottom: 2rem;
		width: 100%;
	}
`

const Icons = css`
	font-size: clamp(1rem, 6vw, 2rem);
	margin-right: 1.5rem;
	color: #cd853f;
`

const Instagram = styled(FaInstagram)`
	${Icons};
`

const LinkedIn = styled(FaLinkedinIn)`
	${Icons};
`

const Contact = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 100%;
		justify-content: flex-start;
	}
`

const Footer = () => {
	return (
		<Section>
			<Container>
				<FooterTop>
					<Quote>
						<h3>Let`s find <br /> your Dream Design</h3>
					</Quote>
					<FooterInfo>
						{/*<h4>Contact Us</h4>
						<Link to='/homes'>FAQ</Link>
						<Link to='/homes'>Support</Link>
						<Link to='/homes'>Questions</Link>*/}
					</FooterInfo>
					<FooterInfo>
						<h2 style={{letterSpacing: '2px'}}>Horizon Interiors</h2>
						<h4>We</h4>
						<h4>Work</h4>
						<h4>Everywhere</h4>
					</FooterInfo>
				</FooterTop>
				<FooterBottom>
					<SocialIcons> {/*href='//название.(дабл слеш)'*/}
						<a href="//www.instagram.com/horizon_interior.s/" rel='noopener noreferrer' target='_blank'>
                     <Instagram />
						</a>
						<a href="//www.linkedin.com/in/aryanesj/" rel='noopener noreferrer' target='_blank'>
                     <LinkedIn />
						</a>
					</SocialIcons>
					<Contact>
						<Button to='/footer'style={{width: '100%', fontWeight: "bold"}}>Lets get in touch
							<AiOutlineCheck 
								style={{marginLeft: '7px', fontSize: '19px', color: 'white'}}
							/>
						</Button>
					</Contact>
				</FooterBottom>
			</Container>
		</Section>
	)
}

export default Footer