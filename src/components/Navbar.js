import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
 	height: 60px;
 	background: teal;
 `

const Logo = styled(Link)`
	color: white;
 `

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const Navbar = () => {
	return (
		<Nav>
			<Logo to='/'>There Logo</Logo>
			<MenuBars />
			<NavMenu />
			<h1>Navbar</h1>
		</Nav>
	)
}

export default Navbar