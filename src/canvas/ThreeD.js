import { trans } from "./trans"
import { cam } from "./cam"
class ThreeD {
    constructor(option) {
        this.transIn = {};
        this.transOut = {};
        this.transIn.vtx = (option.vtx);
        this.transIn.sz = (option.sz);
        this.transIn.rot = (option.rot);
        this.transIn.pos = (option.pos);
    }
    vupd() {
        this.transOut = trans.steps(
            this.transIn.vtx,
            this.transIn.sz,
            this.transIn.rot,
            this.transIn.pos,
            cam.disp
        );
    }
}

export {
    ThreeD
}