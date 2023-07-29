import React from "react";

const Newsletter: React.FC = () => {
    return <section className="s2">
        <div className="bg-wrapper">
            <div>
                <h5>💌</h5>
            </div>
            <div>
                <h6>Join my newsletter</h6>
                <p>
                    If you want to be notified when I post new articles, subscribe to my
                    newsletter on Substack.
                </p>
                <button className="primary-btn">
                    <a href="#" target="_blank" rel="noreferrer noopener">
                        Subscribe
                    </a>
                </button>
            </div>
        </div>
    </section>
}

export default Newsletter
