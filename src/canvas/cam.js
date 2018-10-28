let w = window.innerWidth;
let h = window.innerHeight;

const cam = {
    obj: {
        x: 0,
        y: 0,
        z: 150,
    },
    dest: {
        x: 0,
        y: 0,
        z: 1
    },
    dist: {
        x: 0,
        y: 0,
        z: 200
    },
    ang: {
        cplane: 0,
        splane: 0,
        ctheta: 0,
        stheta: 0
    },
    zoom: 1,
    disp: {
        x: w / 2,
        y: h / 2,
        z: 0
    },
    upd: function () {
        cam.dist.x = cam.dest.x - cam.obj.x;
        cam.dist.y = cam.dest.y - cam.obj.y;
        cam.dist.z = cam.dest.z - cam.obj.z;
        cam.ang.cplane = -cam.dist.z / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
        cam.ang.splane = cam.dist.x / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
        cam.ang.ctheta = Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) / Math.sqrt(cam.dist.x * cam.dist
            .x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);
        cam.ang.stheta = -cam.dist.y / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z *
            cam.dist.z);
    }
};

export {
    cam
}