import React from "react";
import Feedback from "./Feedback";

const Contact: React.FC = () => {
    return <div className="content">
        <section className="s1">
            <div className="contact">
                <div className="contact-wrapper">
                    <h6>Contact</h6>
                    <div className="contact-link-wrapper">
                        <a href="mailto:kmrvishal207@gmail.com">Email ↗︎</a>
                        <a href="https://twitter.com/krvishal07" target="_blank" rel="noreferrer noopener">
                            Twitter ↗︎{" "}
                        </a>
                        <a href="https://www.linkedin.com/in/vishalkr07/" target="_blank" rel="noreferrer noopener">
                            Linkedin ↗︎{" "}
                        </a>
                    </div>
                </div>
                <Feedback />
            </div>
        </section>
    </div>
}

export default Contact