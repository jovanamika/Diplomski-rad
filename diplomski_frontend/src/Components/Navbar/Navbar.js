import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
			<h3>LOGO</h3>
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