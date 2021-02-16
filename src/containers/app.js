import { CanvasBackground } from '../components/canvas-background';
import logo from '../images/dev-tech-logo.svg';
import '../css/main.css';

function App() {
    return (
        <>
            <CanvasBackground />
            <section id="main">
                <div>
                    <img src={logo} alt="dev tech logo" class="logo" />
                </div>
                <div>
                    <h1>Jon Lynch</h1>
                    <h3>Teacher &amp; Full-stack Developer</h3>
                </div>

            </section>
        </>
    );
}

export default App;
