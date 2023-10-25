import {FormatEnum} from "../../types/FormatEnum";

interface IAction {
    type: string
}
const initialState = {
    format: FormatEnum.table
}
export const formatReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case FormatEnum.table:
            return {format: FormatEnum.table}
        case FormatEnum.cards:
            return {format: FormatEnum.cards}
        case FormatEnum.groups:
            return {format: FormatEnum.groups}
        default:
            return state
    }
}