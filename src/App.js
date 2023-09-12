import logo from "../src/images/logo.svg";

function Header() {
	return (
		<header>
			<nav>
				<div className="logo">
					<img src={logo} alt="logo" />
					<h1>ReactFacts</h1>
				</div>
				<div className="project-num">React Course- Project 2</div>
			</nav>
		</header>
	);
}
export default Header;
