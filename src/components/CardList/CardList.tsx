import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import CardItem from "./CardItem/CardItem";
import s from './CardList.module.css'

interface CardListProps {
    users: IUser[]
}
const CardList: FC<CardListProps> = ({users}) => {
    return (
        <div className={s.list}>
            {
                users.map(el =>
                    <CardItem user={el} key={el.id}/>
                )
            }
        </div>
    );
};

export default CardList;