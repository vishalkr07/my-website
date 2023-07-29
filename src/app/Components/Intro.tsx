import React from "react";

const Intro: React.FC = () => {
    return <section className="s1">
        <div className="profile-photo-wrapper">
            <div className="profile-photo">
                <img src="profile.jpg" alt="Spike's avatar" className="profile-photo" />
            </div>
            <div className="status">
                <div className="emoji-wrapper">
                    <span className="emoji"> 🎉 </span>
                </div>
            </div>
        </div>
        <div className="hero-text-wrapper">
            <h5> I develop softwares. </h5>
            <p>
                Hi, I’m Vishal, a Software Engineer in India. I currently work Amazon. Before that, I worked at Arcesium
                and Adobe. Outside of work, I also do calligraphy.
            </p>
            <div>
                <a href="/about/">Learn more → </a>
            </div>
        </div>
    </section>
}

export default Intro