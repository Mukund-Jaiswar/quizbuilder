const ModalReducer = (state, action) => {
    switch(action.type){
        case "OPEN": {
            return {
                ...state,
                isModalOpen: true,
            }
        }

        case "CLOSE": { 
            return {
                ...state,
                isModalOpen: false,
            }
        }

        case "id": {
            return {
                ...state,
                deleteID: action.payload,
            }
        }

        case "menu": {
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            }
        }

        default:
            return state;
    }
}

export default ModalReducer;