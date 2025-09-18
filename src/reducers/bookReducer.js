export const actionType = {
    idChange: 'Change_id',
    nameChange: 'Change_name',
    authorChange: 'Change_author',
    errorsChange: 'Change_errors',
    touchesChange: 'Change_touches',
    resetForm: 'Reset_form'
}


export const reducer = (state, action) => {
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
            return action.value
        }

    }
}