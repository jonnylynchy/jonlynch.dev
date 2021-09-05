import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CanvasBackground } from '../components/canvas-background';
import { Nav } from '../components/nav';
import Bouncer from '../animations/bouncer';
import logo from '../images/dev-tech-logo.svg';
import arrow from '../images/down-arrow.svg';

import '../css/main.css';

library.add(fab)

function App() {
    const [initialStyle, setInitialStyle] = useState('fade-initial');
    useEffect(() => {
        setTimeout(() => setInitialStyle('fade-in'), 500);
        window.addEventListener('scroll', () => {
            const scrollPerc = window.pageYOffset / document.body.offsetHeight;
            document.body.style.setProperty('--scroll', scrollPerc);
        }, false);
    }, []);

    return (
        <>
            <div className="progress"></div>
            <CanvasBackground />
            <section id="main">
                <div id="business-card">
                    <div className={ `flex ${initialStyle}` }>
                        <div>
                            <img src={ logo } alt="dev tech logo" className="logo" />
                        </div>
                        <div>
                            <h1>Jon Lynch</h1>
                            <h3>Teacher &amp; Full-stack Developer</h3>
                        </div>
                    </div>
                    <a href="#content">
                        <Bouncer>
                            <img src={ arrow } alt="click me" className="arrow" />
                        </Bouncer>
                    </a>
                </div>
            </section>
            <section id="content">
                <Router>
                    <Nav />
                    <Switch>
                        <Route path="/about">
                            <h2>About</h2>
                        </Route>
                        <Route path="/work">
                            <h2>Work</h2>
                        </Route>
                        <Route path="/connect">
                            <h2>Connect</h2>
                        </Route>
                    </Switch>
                </Router>
            </section>
            <footer id="connect">
                <h5>Connect with me</h5>
                <a href="http://www.linkedin.com/in/jonclynch/" target="_blank">
                    <FontAwesomeIcon icon={ ['fab', 'linkedin'] } size="2x" />
                </a>
                &nbsp;
                <a href="https://github.com/jonnylynchy" target="_blank">
                    <FontAwesomeIcon icon={ ['fab', 'github'] } size="2x" />
                </a>
                &nbsp;
                <a href="https://twitter.com/jonlynch" target="_blank">
                    <FontAwesomeIcon icon={ ['fab', 'twitter'] } size="2x" />
                </a>
                &nbsp;
            </footer>
        </>
    );
}

export default App;
