import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<footer>
			<ul className="container-social-links">
				<li>
					<a href="">
						<FaFacebook />
					</a>
				</li>
				<li>
					<a href="">
						<FaInstagram />
					</a>
				</li>
				<li>
					<a href="">
						<FaLinkedin />
					</a>
				</li>
			</ul>

			<p>
				Desenvolvido por <a href="#">Mateus Santos</a> &copy;
			</p>
		</footer>
	);
}

export default Footer;
