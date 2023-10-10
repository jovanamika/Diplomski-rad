import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import logo from '../../Assets/Img/logo.png'
import "./NavbarStyles.css";
import { Avatar } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ isLogged }) {
	const navRef = useRef();
	const navigate = useNavigate();
	const location = useLocation();
	const isAtAdminPage = location.pathname === '/admin';


	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const handleLogo = () =>{
		navigate("/");
	}

	const handleClick = () => {
		navigate("/profil");
	}

	return (
		<header className="header">
			<Image
				marginLeft={'5%'}
				marginRight={'20%'}
				borderRadius='full'
				boxSize='60px'
				src={logo}
				alt='Dan Abramov'
				cursor={'pointer'}
				onClick={handleLogo}
			/>
			{!isAtAdminPage && (
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
				</nav>)}
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

			{isLogged && !isAtAdminPage &&
				(<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' onClick={handleClick} cursor="pointer" />
				)}

		</header>
	);
}

export default Navbar;