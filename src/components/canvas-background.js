import { Pt, Group, Line, Create, Sound, Triangle, Const, Geom } from "pts";
import { PtsCanvas } from "react-pts-canvas";

export class CanvasBackground extends PtsCanvas {

    constructor() {
        super();
        this.noiseGrid = [];
    }

    _create() {
        // Create a line and a grid, and convert them to `Noise` points
        let gd = Create.gridPts(this.space.innerBound, 20, 20);
        this.noiseGrid = Create.noisePts(gd, 0.01, 0.1, 20, 20);
        this.space.setup({ bgcolor: "#fff", retina: true });
    }

    componentDidUpdate() {
        if (this.props.pause) {
            this.space.pause();
        } else {
            this.space.resume();
        }
    }


    // Override PtsCanvas' start function
    start(space, bound) {
        this._create();
    }


    // Override PtsCanvas' resize function
    resize() {
        this._create();
    }


    // Override PtsCanvas' animate function
    animate(time, ftime) {

        if (!this.noiseGrid) return;

        // Use pointer position to change speed
        let speed = this.space.pointer.$subtract(this.space.center).divide(this.space.center).abs();

        // console.log('SPEED?', speed);
        // Generate noise in a grid
        this.noiseGrid.forEach(p => {
            p.step(0.01 * (1 - speed.x), 0.01 * (1 - speed.y));
            this.form.fillOnly("#808080").point(
                p,
                Math.abs(p.noise2D() * this.space.size.x / 300),
                "square"
            );
            // const randSize = Math.abs(Math.random() * 3);
            // this.form.fillOnly("#333").point(p, p.noise2D() * randSize, "square");
        });

    }

}