import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import logo from '../../Assets/Img/logo.png'
import "./NavbarStyles.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="header">
			<Image
				marginLeft={'5%'}
				borderRadius='full'
				boxSize='60px'
				src={logo}
				alt='Dan Abramov'
			/>
			<nav ref={navRef}>
				<a href="/">Početna</a>
				<a href="/news">Novosti</a>
				<a href="/seminars">Seminari</a>
				<a href="/login">Prijavi se</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;