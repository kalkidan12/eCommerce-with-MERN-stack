import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
function Header() {
	const navRef = useRef();
	const [selected, setSelected] = useState(1);
	const menutoggle = () => {
		navRef.current.classList.toggle("responsive-nav");
		console.log(navRef.current);
	};

	return (
		<>
			<nav className="nav" ref={navRef}>
				<div className="logo">
					<h1> Logo</h1>
				</div>
				<div className="nav-content">
					<ul className="nav-links">
						<Link to="/">
							<li
								onClick={() => setSelected(1)}
								style={selected == 1 ? { color: "red" } : {}}
							>
								Home
							</li>
						</Link>
						<Link to="/phones">
							<li
								onClick={() => setSelected(2)}
								style={selected == 2 ? { color: "red" } : {}}
							>
								Phones
							</li>
						</Link>
						<Link to="/watches">
							<li
								onClick={() => setSelected(3)}
								style={selected == 3 ? { color: "red" } : {}}
							>
								Watches
							</li>
						</Link>

						<Link to="/earphones">
							<li
								onClick={() => setSelected(4)}
								style={selected == 4 ? { color: "red" } : {}}
							>
								Earphone
							</li>
						</Link>
						<Link to="/laptops">
							<li
								onClick={() => setSelected(5)}
								style={selected == 5 ? { color: "red" } : {}}
							>
								Laptops
							</li>
						</Link>
					</ul>
					<ul className="nav-right">
						<li className="input">
							<input type="search" placeholder="serach products.." />
						</li>
						<li className="icon">
							<span>
								<FaShoppingCart />
							</span>
							<i>2</i>
						</li>
						<li className="uicon">
							<RiAccountPinCircleFill />
						</li>
					</ul>
					<div className="close-btn" onClick={() => menutoggle()}>
						close
					</div>
				</div>
			</nav>
			<div className="open-btn" onClick={() => menutoggle()}>
				open
			</div>
		</>
	);
}

export default Header;
