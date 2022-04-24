import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="flex-row px-1">
            <h2>Ben Sharpe</h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2 my-1 nav-item">
                        <a 
                            href="#about" onClick={() => handlePageChange("About")}
                            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="mx-2 my-1 nav-item">
                        <a
                            href="#portfolio" onClick={() => handlePageChange("Portfolio")}
                            className={currentPage === "Portfolio" ? "nav-link-active" : "nav-link"}
                        >
                            My Portfolio
                        </a>
                    </li>
                    <li className="mx-2 my-1 nav-item">
                        <a a
                            href="#resume" onClick={() => handlePageChange("Resume")}
                            className={currentPage === "Resume" ? "nav-link-active" : "nav-link"}
                        >
                            My Resume
                        </a>
                    </li>
                    <li className="mx-2 my-1 nav-item">
                        <a 
                            href="#contact" onClick={() => handlePageChange("Contaact")}
                            className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;