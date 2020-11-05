export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction => transaction.id !== action.id)
            }
        default:
            return state;
    }
}