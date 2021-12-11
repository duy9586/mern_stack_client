import { INIT_STATE } from '../../../constants/posts/index'
import { getType, showModal, hideModal } from '../../actions/index'

export default function modalReducers(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return { ...state, isOpen: true }
        case getType(hideModal):
            return { ...state, isOpen: false }
        default:
            return state
    }
}