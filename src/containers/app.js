import { CanvasBackground } from '../components/canvas-background';
import logo from '../images/dev-tech-logo.svg';
import arrow from '../images/down-arrow.svg';

import '../css/main.css';

function App() {
    return (
        <>
            <section id="main">
                <CanvasBackground />
                <div id="business-card">
                    <div className="flex">
                        <div>
                            <img src={logo} alt="dev tech logo" className="logo" />
                        </div>
                        <div>
                            <h1>Jon Lynch</h1>
                            <h3>Teacher &amp; Full-stack Developer</h3>
                        </div>
                    </div>
                    <div>
                        <img src={arrow} alt="click me" className="arrow bounce" />
                    </div>
                </div>
            </section>
            <section id="content">
                <h1>Hello.</h1>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
                <p>And here is some more content. Etc. </p>
            </section>
        </>
    );
}

export default App;
