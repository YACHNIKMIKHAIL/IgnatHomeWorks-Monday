export type ColorType = 'white' | 'red' | 'blue' | 'purple' | 'gray' | 'pink'
export type initStateColorType = {
    color: string
}
const initState: initStateColorType = {
    color: 'white'
};

export const themeReducer = (state = initState, action: ActionType): initStateColorType => { // fix any
    switch (action.type) {
        case CHANGE_COLOR: {
            return {...state,color:action.color};
        }
        default:
            return state;
    }
};

type ActionType = changeThemeCType

type changeThemeCType = ReturnType<typeof changeThemeC>
const CHANGE_COLOR = 'CHANGE_COLOR'
export const changeThemeC = (color: ColorType): { type: string, color: ColorType } => {
    return {type: CHANGE_COLOR, color} as const
}; // fix any