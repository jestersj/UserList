import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import Group from "../Group/Group";
import s from './GroupsList.module.css'

interface GroupProps {
    users: IUser[]
}
interface Groups {
    [key: string]: IUser[]
}
const GroupsList: FC<GroupProps> = ({users}) => {
    const makeGroups = (users: IUser[]) => {

        const groups: Groups = {}
        users.forEach(user => {
            if (!(user.country in groups)) {
                groups[user.country] = []
            }
            groups[user.country].push(user)
        })
        const res = []
        for (const key in groups) {
            res.push({name: key, users: groups[key]})
        }
        return res
    }
    return (
        <div className={s.list}>
            {
                makeGroups(users).map(el =>
                    <Group name={el.name} users={el.users} key={el.name}/>
                )
            }
        </div>
    );
};

export default GroupsList;