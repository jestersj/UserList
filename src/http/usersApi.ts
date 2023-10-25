import {$host} from "./index";
import {IData} from "../types/IData";

export const fetchUsers = async () => {
    const {data} = await $host.get<IData>('/users?limit=300')
    return data
}