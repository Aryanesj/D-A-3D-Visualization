import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData.js'
import { Button } from './Button.js'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
 	height: 60px;
 	display: flex;
 	justify-content: space-between;
 	padding: 1rem 2rem;
 	z-index: 100;
 	position: fixed;
 	width: 100%;
 `

const NavLink = css`
 	color: white;
 	display: flex;
 	align-items: center;
 	padding: 0 1rem;
 	height: 100%;
 	cursor: pointer;
 	text-decoration: none;
 `

const Logo = styled(Link)`
	${NavLink}
	font-style: italic;
 `

const MenuBars = styled(FaBars)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		cursor: pointer;
		top: 0;
		right: 0;
		color: #fff;
	}
`

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
 `

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -48px;

	@media screen and (max-width: 768px) {
		display: none;
	}
 `

const NavMenuLinks = styled(Link)`
 	${NavLink}
 `

const Navbar = ({toggle}) => {
	const [navbar, setNavbar] = useState(false)
	const location = useLocation()

	const changeBackground = () => {
		if(window.pageYOffset >= 610) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener('scroll', changeBackground)
		}

		watchScroll()

		return () => {
			window.removeEventListener('scroll', changeBackground)
		}
	}, []);

	let style = {
		backgroundColor: navbar || location.pathname !== '/' ? '#CD853F' : 'transparent',
		transition: '0.5s'
	}

	return (
		<Nav style={style}>
			<Logo to='/'>There Logo</Logo>
			<MenuBars onClick={toggle}/>
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				<Button to='/contact' primary='true'>
					Contact Us
				</Button>
			</NavBtn>
		</Nav>
	)
}

export default Navbar