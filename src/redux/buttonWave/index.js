/*
 * current button wave
 */
// initial default
import ButtonWaveEffect from "../../utils/ButtonWaveEffect"
import * as actionTypes from '../actionTypes'

export const initState = {
    ButtonWave: new ButtonWaveEffect(),
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_BUTTON_WAVE:
            return { ...state,
                ButtonWave: action.ButtonWave,
            }

        default:
            return state;
    }
}