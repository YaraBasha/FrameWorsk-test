import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="d-flex flex-wrap fixed-top py-4 justify-content-between px-5">
                <div className="Right">
                    <h1>
                        <Link to={""} className="nav fw-bold">
                            START FRAMEWORK</Link></h1>
                </div>
                <div className="Left">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={"/about"} id="about" className="nav-link active text-white fw-bold" aria-current="page">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/portfolio"} className="nav-link text-white fw-bold" href="#">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link text-white fw-bold" href="#">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}