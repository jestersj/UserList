import {IUser} from "./IUser";

export interface IData {
    success: boolean
    time: string
    message: string
    total_users: number
    offset: number
    limit: number
    users: IUser[]
}