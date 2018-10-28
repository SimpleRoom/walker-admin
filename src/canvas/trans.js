import { cam } from "./cam"

const dtr = (d) => {
    return d * Math.PI / 180;
}
const trans = {
    parts: {
        sz: function (p, sz) {
            return {
                x: p.x * sz.x,
                y: p.y * sz.y,
                z: p.z * sz.z
            };
        },
        rot: {
            x: function (p, rot) {
                return {
                    x: p.x,
                    y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
                    z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))
                };
            },
            y: function (p, rot) {
                return {
                    x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
                    y: p.y,
                    z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))
                };
            },
            z: function (p, rot) {
                return {
                    x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
                    y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
                    z: p.z
                };
            }
        },
        pos: function (p, pos) {
            return {
                x: p.x + pos.x,
                y: p.y + pos.y,
                z: p.z + pos.z
            };
        }
    },
    pov: {
        plane: function (p) {
            return {
                x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
                y: p.y,
                z: p.x * -cam.ang.splane + p.z * cam.ang.cplane
            };
        },
        theta: function (p) {
            return {
                x: p.x,
                y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
                z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta
            };
        },
        set: function (p) {
            return {
                x: p.x - cam.obj.x,
                y: p.y - cam.obj.y,
                z: p.z - cam.obj.z
            };
        }
    },
    persp: function (p) {
        return {
            x: p.x * cam.dist.z / p.z * cam.zoom,
            y: p.y * cam.dist.z / p.z * cam.zoom,
            z: p.z * cam.zoom,
            p: cam.dist.z / p.z
        };
    },
    disp: function (p, disp) {
        return {
            x: p.x + disp.x,
            y: -p.y + disp.y,
            z: p.z + disp.z,
            p: p.p
        };
    },
    steps: function (_obj_, sz, rot, pos, disp) {
        var _args = trans.parts.sz(_obj_, sz);
        _args = trans.parts.rot.x(_args, rot);
        _args = trans.parts.rot.y(_args, rot);
        _args = trans.parts.rot.z(_args, rot);
        _args = trans.parts.pos(_args, pos);
        _args = trans.pov.plane(_args);
        _args = trans.pov.theta(_args);
        _args = trans.pov.set(_args);
        _args = trans.persp(_args);
        _args = trans.disp(_args, disp);
        return _args;
    }
};

export {
    trans
}