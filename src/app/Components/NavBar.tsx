import React from "react";

const NavBar: React.FC = () => {
    return <header>
        <header>
            <div className="nav-bar">
                <div className="nav-bar-link-selected">
                    <a href="/">Vishal Kumar</a>
                </div>
                <div className="nav-bar-right">
                    <div className="nav-bar-link">
                        <a href="/project/">Projects</a>
                    </div>
                    <div className="nav-bar-link">
                        <a href="/about/">About</a>
                    </div>
                    <div className="nav-bar-link">
                        <a href="/play/">Play ✨</a>
                    </div>
                </div>
            </div>
        </header>
    </header>
}
export default NavBar