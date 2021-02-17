import { CanvasBackground } from '../components/canvas-background';
import logo from '../images/dev-tech-logo.svg';
import arrow from '../images/down-arrow.svg';

import '../css/main.css';

function App() {
    return (
        <>
            <CanvasBackground />
            <section id="main">
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
            </section>
        </>
    );
}

export default App;
