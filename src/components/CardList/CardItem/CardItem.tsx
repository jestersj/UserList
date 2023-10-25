import React, {FC} from 'react';
import {IUser} from "../../../types/IUser";
import s from './CardItem.module.css'

interface CardItemProps {
    user: IUser
}
const CardItem: FC<CardItemProps> = ({user}) => {
    return (
        <div className={s.card}>
            <b>{user.first_name} {user.last_name}</b>
            <div className={s.img_cont}>
                <img
                    className={s.img}
                    src={user.profile_picture}
                    alt={user.first_name}
                />
            </div>
            <div>
                <p>{user.job}</p>
                <p>Телефон:</p>
                <p>{user.phone}</p>
            </div>
        </div>
    );
};

export default CardItem;