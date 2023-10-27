import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const IndexPage: FC = () => {
    return (
        <div className={'index_cont cont'}>
            <h1 className={'index_h1'}>Это просто приветственная страница.
                Все самое интересное на вкладке "Список пользователей"</h1>
            <NavLink to={'/users'} className={'index_link'}>Список пользователей</NavLink>
        </div>
    );
};

export default IndexPage;