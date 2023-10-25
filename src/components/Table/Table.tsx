import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import s from './Table.module.css'

interface TableProps {
    users: IUser[]
}
const Table: FC<TableProps> = ({users}) => {
    return (
        <table width={'100%'} className={s.table}>
            <tbody className={s.tbody}>
            <tr>
                <td>Имя</td>
                <td>Фамилия</td>
                <td>Почта</td>
                <td>Должность</td>
                <td>Страна</td>
            </tr>
            {
                users.map(el =>
                    <tr key={el.id}>
                        <td>{el.first_name}</td>
                        <td>{el.last_name}</td>
                        <td>{el.email}</td>
                        <td>{el.job}</td>
                        <td>{el.country}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
};

export default Table;