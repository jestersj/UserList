import React, {FC, useEffect, useRef, useState} from 'react';
import s from "./SortDropdown.module.css";
import {SortsEnum} from "../../types/SortsEnum";
import {IUser} from "../../types/IUser";

interface SortDropdownProps {
    sort: (type: keyof IUser) => void
}
const SortDropdown: FC<SortDropdownProps> = ({sort}) => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedSort, setSelectedSort] = useState<SortsEnum | null>(null)
    useEffect(() => {
        const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
            const targetNode = event.target as Node
            if (dropdownRef.current && !dropdownRef.current.contains(targetNode)) {
                setIsOpen(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleClickOutside);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const selectItem = (type: keyof IUser, text: SortsEnum) => {
        sort(type)
        setSelectedSort(text)
        setIsOpen(false)
    }
    return (
        <div>
            <h3>Сортировка по:</h3>
            <div ref={dropdownRef}>
                <button className={s.dropdown}
                        onClick={() => setIsOpen(!isOpen)}
                        style={isOpen ? {borderRadius: '7px 7px 0 0'} : {}}
                >
                    {selectedSort || 'Выберите сортировку'}
                </button>
                {isOpen &&
                    <div className={s.items_block}>
                        <button className={s.items}
                                onClick={() => {
                                    selectItem("last_name", SortsEnum.last_name)
                                }}
                        >
                            {SortsEnum.last_name}
                        </button>
                        <button className={s.items}
                                onClick={() => {
                                    selectItem("first_name", SortsEnum.first_name)
                                }}
                        >
                            {SortsEnum.first_name}
                        </button>
                        <button className={s.items}
                                         onClick={() => {
                                             selectItem("email", SortsEnum.email)
                                         }}
                        >
                        {SortsEnum.email}
                        </button>
                        <button className={s.items}
                                onClick={() => {
                                    selectItem("job", SortsEnum.job)
                                }}
                        >
                            {SortsEnum.job}
                        </button>
                        <button className={s.items}
                                onClick={() => {
                                    selectItem("country", SortsEnum.country)
                                }}
                                style={{borderRadius: '0 0 7px 7px'}}
                        >
                            {SortsEnum.country}
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default SortDropdown;