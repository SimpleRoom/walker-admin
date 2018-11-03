// button wave effect while clicking
class ButtonWaveEffect {
    constructor() {
        this.duration = 750
        this.className = "JS-WAVE-EFFRCT"
    }
    resetStyle(styles) {
        let styleStr = ""
        for (let key in styles) {
            if (styles.hasOwnProperty(key)) styleStr += key + ':' + styles[key] + ';'
        }
        return styleStr
    }
    getPointerPosition(target) {
        let position = {
            top: 0,
            left: 0,
        }
        const elem = document.documentElement
        target.getBoundingClientRect && (position = target.getBoundingClientRect())
        return {
            top: position.top + window.pageYOffset - elem.clientTop,
            left: position.left + window.pageXOffset - elem.clientLeft,
        }
    }
    showWave(event) {
        const targetElem = event.target
        const waveElem = document.createElement('div')
        targetElem.appendChild(waveElem)
        // get target position
        const rectObject = this.getPointerPosition(targetElem)
        const _height = event.pageY - rectObject.top
        const _left = event.pageX - rectObject.left
        const _scale = 'scale(' + targetElem.clientWidth / 100 * 10 + ')'
        // default style
        const defaultStyle = {
            "position": "absolute",
            "border-radius": "50%",
            "width": "25px",
            "height": "25px",
            "opacity": "0",
            "background": "rgba(255, 255, 255, 0.3)",
            "transition": "all 0.7s ease-out",
            "transition-property": "transform, opacity, -webkit-transform",
            "-webkit-transform": "scale(0)",
            "transform": "scale(0)",
            "pointer-events": "none",
            "top": _height + 'px',
            "left": _left + 'px',
        }
        // set default style
        waveElem.setAttribute("style", this.resetStyle(defaultStyle))
        waveElem.className = this.className
        // add style
        const newStyle = { ...defaultStyle }
        newStyle["-webkit-transform"] = _scale
        newStyle["transform"] = _scale
        newStyle["opacity"] = "1"
        newStyle["-webkit-transition-duration"] = this.duration + "ms"
        newStyle["transition-duration"] = this.duration + "ms"
        newStyle["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)"
        newStyle["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)"
        // set new style
        waveElem.setAttribute("style", this.resetStyle(newStyle))
        // temp style
        const endStyle = { ...defaultStyle }
        endStyle["-webkit-transform"] = _scale
        endStyle["transform"] = _scale
        endStyle["-webkit-transition-duration"] = this.duration + "ms"
        endStyle["transition-duration"] = this.duration + "ms"
        // toggle style
        setTimeout(() => {
            waveElem.setAttribute("style", this.resetStyle(endStyle))
            // remove elem
            setTimeout(() => {
                targetElem.removeChild(waveElem)
            }, this.duration)
        }, 100)
    }
}

export default ButtonWaveEffect