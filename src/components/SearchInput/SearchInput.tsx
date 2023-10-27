import React, {ChangeEvent, FC, useState} from 'react';
import s from './SearchInput.module.css';

interface SearchInputProps {
    searchFunc: (val: string) => void
}
const SearchInput: FC<SearchInputProps> = ({searchFunc}) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        searchFunc(e.target.value)
    }
    return (
        <div>
            <h3>Поиск по фамилии:</h3>
            <input value={value} onChange={handleChange} className={s.input} placeholder={'Поиск'}/>
        </div>
    );
};

export default SearchInput;