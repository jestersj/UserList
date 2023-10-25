import React, {useEffect, useState} from 'react';
import {IUser} from "./types/IUser";
import {fetchUsers} from "./http/usersApi";
import Table from "./components/Table/Table";
import CardList from "./components/CardList/CardList";
import FormatDropdown from "./components/FormatDropdown/FormatDropdown";
import {useTypedSelector} from "./hooks/useTypedSelector";
import GroupsList from "./components/GroupsList/GroupsList";
import SortDropdown from "./components/SortDropdown/SortDropdown";

let list: IUser[] = []
const UsersPage = () => {
    const {format} = useTypedSelector(state => state)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers().then((res) => {
            list = res.users
            setUsers(res.users)
        })
    }, [])

    const formatObj = {
        table: <Table users={users}/>,
        cards: <CardList users={users}/>,
        group: <GroupsList users={users}/>
    }
    const sortBy = (type: keyof IUser) => {
        setUsers(prevState => {
            return [...prevState].sort((a, b) => {
                if (a[type] > b[type]) {
                    return 1
                }
                if (a[type] < b[type]) {
                    return -1
                }
                return 0
            })
        })
    }
    return (
        <div>
            <div className={'sort_row'}>
                <FormatDropdown/>
                <SortDropdown sort={sortBy}/>
            </div>
            {
                format.format === "Таблица" &&
                <Table users={users}/>
            }
            {
                format.format === "Карточки" &&
                <CardList users={users}/>
            }
            {
                format.format === "Группы" &&
                <GroupsList users={users}/>
            }
        </div>
    );
};

export default UsersPage;