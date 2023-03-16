export const reducer = (state, action) => {
    switch(action.type){
        case "SORT_PRICE":
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            throw Error(`Unknown action: ${action.type}`)
    }
};