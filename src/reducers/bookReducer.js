export const actionType = {
    idChange: 'Change_id',
    nameChange: 'Change_name',
    authorChange: 'Change_author',
    errorsChange: 'Change_errors',
    touchesChange: 'Change_touches',
    resetForm: 'Reset_form'
}

export const initialState = {
    id: null,
    name: '',
    author: '',
    errors: {},
    touched: {}
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.idChange: {
            return {
                ...state,
                id: action.value
            }
        }
        case actionType.nameChange: {
            return {
                ...state,
                name: action.value
            }
        }
        case actionType.authorChange: {
            return {
                ...state,
                author: action.value
            }
        }
        case actionType.errorsChange: {
            return {
                ...state,
                errors: action.errors
            }
        }
        case actionType.touchesChange: {
            return {
                ...state,
                touched: {
                    ...state.touched,
                    [action.name]: true
                }
            }
        }
        case actionType.resetForm: {
            return initialState
        }
        default:
            return state;

    }
}