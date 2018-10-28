import { cam } from "./cam"
import { ThreeD } from "./ThreeD"

const rnd = () => {
    return Math.sin(Math.floor(Math.random() * 360) * Math.PI / 180);
}

class CanvasBg {
    // @param{id} string,canvas id
    constructor(id) {
        this.num = 200
        this.vel = 0.04;
        this.lim = 360;
        this.diff = 200;
        this.initPos = 100;
        this.toX = 0;
        this.toY = 0;
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.canvas = document.getElementById(id);
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.go()
        this.run()
    }
    go() {
        this.conText2D = this.canvas.getContext("2d");
        this.conText2D.globalCompositeOperation = 'source-over';
        this.varr = [];
        this.dist = [];
        this.calc = [];

        for (var i = 0, len = this.num; i < len; i++) {
            this.add();
        }

        this.rotObj = {
            x: 0,
            y: 0,
            z: 0
        };
        this.objSz = {
            x: this.w / 5,
            y: this.h / 5,
            z: this.w / 5
        };
    }
    add() {
        this.varr.push(new ThreeD({
            vtx: {
                x: rnd(),
                y: rnd(),
                z: rnd()
            },
            sz: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 20,
                y: -20,
                z: 0
            },
            pos: {
                x: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),
                y: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),
                z: this.diff * Math.sin(360 * Math.random() * Math.PI / 180)
            }
        }));
        this.calc.push({
            x: 360 * Math.random(),
            y: 360 * Math.random(),
            z: 360 * Math.random(),
        });
    }
    run() {
        this.animation()
        // 跟随鼠标移动
        window.addEventListener("mousemove", e => {
            this.toX = (e.clientX - this.canvas.width / 2) * -0.8;
            this.toY = (e.clientY - this.canvas.height / 2) * 0.8;
        })
    }
    animation() {
        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var anim = function () {
            this.upd();
            this.draw();
            window.requestAnimationFrame(anim);
        }.bind(this);
        window.requestAnimationFrame(anim);
    }
    upd() {
        cam.obj.x += (this.toX - cam.obj.x) * 0.05;
        cam.obj.y += (this.toY - cam.obj.y) * 0.05;
    }
    draw() {
        this.conText2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        cam.upd();
        this.rotObj.x += 0.1;
        this.rotObj.y += 0.1;
        this.rotObj.z += 0.1;
        for (var i = 0; i < this.varr.length; i++) {
            for (var val in this.calc[i]) {
                if (this.calc[i].hasOwnProperty(val)) {
                    this.calc[i][val] += this.vel;
                    if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;
                }
            }

            this.varr[i].transIn.pos = {
                x: this.diff * Math.cos(this.calc[i].x * Math.PI / 180),
                y: this.diff * Math.sin(this.calc[i].y * Math.PI / 180),
                z: this.diff * Math.sin(this.calc[i].z * Math.PI / 180)
            };
            this.varr[i].transIn.rot = this.rotObj;
            this.varr[i].transIn.sz = this.objSz;
            this.varr[i].vupd();
            if (this.varr[i].transOut.p < 0) continue;

            let g = this.conText2D.createRadialGradient(
                this.varr[i].transOut.x,
                this.varr[i].transOut.y,
                this.varr[i].transOut.p,
                this.varr[i].transOut.x,
                this.varr[i].transOut.y,
                this.varr[i].transOut.p * 2,
            );
            this.conText2D.globalCompositeOperation = 'lighter';
            g.addColorStop(0, 'hsla(255, 255%, 255%, 1)');
            g.addColorStop(.5, 'hsla(' + (i + 2) + ',85%, 40%,1)');
            g.addColorStop(1, 'hsla(' + (i) + ',85%, 40%,.5)');

            this.conText2D.fillStyle = g;
            this.conText2D.beginPath();

            this.conText2D.arc(
                this.varr[i].transOut.x,
                this.varr[i].transOut.y,
                this.varr[i].transOut.p * 2, 0, Math.PI * 2,
                false,
            );
            this.conText2D.fill();
            this.conText2D.closePath();
        }
    }
}

export {
    CanvasBg
}