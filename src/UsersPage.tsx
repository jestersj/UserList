import React, {useEffect, useState} from 'react';
import {IUser} from "./types/IUser";
import {FormatEnum} from "./types/FormatEnum";
import {fetchUsers} from "./http/usersApi";
import Table from "./components/Table/Table";
import CardList from "./components/CardList/CardList";
import FormatDropdown from "./components/FormatDropdown/FormatDropdown";
import {useTypedSelector} from "./hooks/useTypedSelector";
import GroupsList from "./components/GroupsList/GroupsList";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import SearchInput from "./components/SearchInput/SearchInput";
import arrow from './static/icons/arrow-clockwise.svg'

const UsersPage = () => {
    //Помимо комментариев в коде, расписываю комметарии более подробно в README, пожалуйста, ознакомьтесь
    const {format} = useTypedSelector(state => state)
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    useEffect(() => {
        fetchUsers().then((res) => {
            const arr = res.users.map(el => {
                //Добавляю к каждому пользователю флаг, говорящий, нужно ли отрисовывать пользователя
                return {...el, show: true}
            })
            setUsers(arr)
            setIsLoaded(true)
        })
    }, [])
    const formatObj = {
        [FormatEnum.table]: <Table users={users}/>,
        [FormatEnum.cards]: <CardList users={users}/>,
        [FormatEnum.groups]: <GroupsList users={users}/>
    }
    const sortBy = (type: keyof IUser ) => {
        setUsers(prevState => {
            //Стандартная соритировка JS, писал не свою, так как к этой и так прикручены все возможные оптимизации
            //Не стоит дважды изобретать велосипед)
            //Работает за O(nlogn), что является хорошим результатом для сортировки
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
    const search = (val: string) => {
        const result = users.map(obj => {
            //В целях повышения производительности, поиск проходит только по фамилии
            return {...obj, show: obj.last_name.toLowerCase().includes(val.toLowerCase())}
        })
        setUsers(result)
    }
    return (
        <div>
            <div className={'sort_row'}>
                <FormatDropdown/>
                <SortDropdown sort={sortBy}/>
                <SearchInput searchFunc={search}/>
            </div>
            <div className={'found_cont'}>
                <h3>Найдено: {users.filter(el => el.show).length}</h3>
            </div>
            {
                isLoaded
                    ?
                    formatObj[format.format]
                    :
                    <div className={'loading_cont'}>
                        <img src={arrow} alt={'Загрузка'} className={'loading_icon'}/>
                    </div>
            }
        </div>
    );
};

export default UsersPage;