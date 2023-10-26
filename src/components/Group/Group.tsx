import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import s from './Group.module.css'

interface GroupProps {
    name: string
    users: IUser[]
}

const Group: FC<GroupProps> = ({name ,users}) => {

    return (
        <div className={s.group}>
            <p className={s.title}>{name}</p>
            <div className={s.items_block}>
                {
                    users.filter(el => el.show).map(el =>
                        <div className={s.item} key={el.id}>
                            <p className={s.name}>{el.first_name} {el.last_name}</p>
                            <p className={s.job}>{el.job}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Group;