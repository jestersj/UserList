import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import Group from "./Group/Group";
import s from './GroupsList.module.css';

interface GroupProps {
    users: IUser[]
}
interface Groups {
    [key: string]: IUser[]
}
const GroupsList: FC<GroupProps> = ({users}) => {
    //Функция формирует массив групп с нужными пользвателями
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

    //Функция проверяет, есть ли хоть один пользователь в группе, который подходит под поиск, чтобы определить,
    //надо ли отрендерить эту группу
    const filterGroups = () => {
        return makeGroups(users).filter(group => {
            for (let i = 0; i < group.users.length; i++) {
                if (group.users[i].show) {
                    return true
                }
            }
            return false
        })
    }
    return (
        <div className={s.list}>
            {
                filterGroups().map(el =>
                    <Group name={el.name} users={el.users} key={el.name}/>
                )
            }
        </div>
    );
};

export default GroupsList;