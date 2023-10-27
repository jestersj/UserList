import React, {FC, useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FormatEnum} from "../../types/FormatEnum";
import {useDispatch} from "react-redux";
import s from './FormatDropdown.module.css';

const FormatDropdown: FC = () => {
    const {format} = useTypedSelector(state => state)
    const dispatch = useDispatch()
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
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
    const chooseFormat = (format: FormatEnum) => {
        dispatch({type: format})
        setIsOpen(false)
    }
    return (
        <div>
            <h3>Формат:</h3>
            <div ref={dropdownRef}>
                <button className={s.dropdown}
                        onClick={() => setIsOpen(!isOpen)}
                        style={isOpen ? {borderRadius: '7px 7px 0 0'} : {}}
                >
                    {format.format}
                </button>
                {isOpen &&
                    <div className={s.items_block}>
                        <button className={s.items}
                                onClick={() => chooseFormat(FormatEnum.table)}
                        >
                            {FormatEnum.table}
                        </button>
                        <button className={s.items}
                                onClick={() => chooseFormat(FormatEnum.cards)}
                        >
                            {FormatEnum.cards}
                        </button>
                        <button className={s.items}
                                onClick={() => chooseFormat(FormatEnum.groups)}
                                style={{borderRadius: '0 0 7px 7px'}}>
                            {FormatEnum.groups}
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default FormatDropdown;