export type InitStateType = {
    loading: boolean
}
const initState: InitStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

const LOADING = 'LOADING'
export type LoadingACType = {
    type: string,
    loading: boolean
}
export const loadingAC = (load:boolean): LoadingACType => {
    return {
        type: LOADING,
        loading: load
    } as const
} // fix any