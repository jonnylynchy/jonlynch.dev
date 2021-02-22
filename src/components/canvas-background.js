import { Pt, Group, Line, Create, Sound, Triangle, Const, Geom } from "pts";
import { PtsCanvas } from "react-pts-canvas";

export class CanvasBackground extends PtsCanvas {

    constructor() {
        super();
        this.noiseGrid = [];
        this.pColors = [];
        this.colors = [
            "#C23DF7",
            "#F73D8D",
            "#3DB2F7",
            "#3DF1F7",
            "#808080"
        ];
    }

    _create() {
        // how many rows and columns? Based on 50px spread
        const rows = Math.ceil(this.space.size.x / 100);
        const cols = Math.ceil(this.space.size.y / 100);

        // Create a line and a grid, and convert them to `Noise` points
        let gd = Create.gridPts(this.space.innerBound, rows, cols);
        this.noiseGrid = Create.noisePts(gd, 0.01, 0.1, rows, cols);
        this.space.setup({ bgcolor: "#fff", retina: true });
        this._chooseColors();
    }

    _chooseColors() {
        for (let i = 0; i < this.noiseGrid.length; i++) {
            const randColorIndex = Math.floor(Math.random() * this.colors.length);
            this.pColors.push(this.colors[randColorIndex]);
        }
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

        // Generate noise in a grid
        this.noiseGrid.forEach((p, i) => {
            p.step(0.0085 * (1 - speed.x), 0.0085 * (1 - speed.y));
            this.form
                .fillOnly(this.pColors[i])
                .point(
                    p,
                    Math.abs(p.noise2D() * 5),
                    "circle"
                );
        });

    }

}