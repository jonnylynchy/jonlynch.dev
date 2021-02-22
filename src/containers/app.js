import { useState, useEffect } from 'react';
import { CanvasBackground } from '../components/canvas-background';
import Bouncer from '../animations/bouncer';
import logo from '../images/dev-tech-logo.svg';
import arrow from '../images/down-arrow.svg';

import '../css/main.css';

function App() {
    const [initialStyle, setInitialStyle] = useState('fade-initial');
    useEffect(() => {
        setTimeout(() => setInitialStyle('fade-in'), 500);
        window.addEventListener('scroll', () => {
            const scrollPerc = window.pageYOffset / document.body.offsetHeight; 
            document.body.style.setProperty('--scroll',scrollPerc);
        }, false);
    }, []);

    return (
        <>
            <div className="progress"></div>
            <section id="main">
                <CanvasBackground />
                <div id="business-card">
                    <div className={`flex ${initialStyle}`}>
                        <div>
                            <img src={logo} alt="dev tech logo" className="logo" />
                        </div>
                        <div>
                            <h1>Jon Lynch</h1>
                            <h3>Teacher &amp; Full-stack Developer</h3>
                        </div>
                    </div>
                    <Bouncer>
                        <a href="#content"><img src={arrow} alt="click me" className="arrow" /></a>
                    </Bouncer>
                </div>
            </section>
            <section id="content">
                {/* WIP */}
                <h1>Coming soon...</h1>
            </section>
        </>
    );
}

export default App;
