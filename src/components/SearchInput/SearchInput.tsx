import React, {ChangeEvent, FC, useRef, useState} from 'react';
import search from '../../static/icons/search.svg';
import cross from '../../static/icons/x.svg';
import s from './SearchInput.module.css';

interface SearchInputProps {
    searchFunc: (val: string) => void
}
const SearchInput: FC<SearchInputProps> = ({searchFunc}) => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        searchFunc(e.target.value)
    }
    const clearInput = () => {
        setValue('')
        inputRef.current?.focus()
        searchFunc('')
    }
    return (
        <div>
            <h3>Поиск по фамилии:</h3>
            <div className={s.input_cont}>
                <input value={value} onChange={handleChange} className={s.input} placeholder={'Поиск'}
                       ref={inputRef}
                />
                <img src={search} alt={'search'} className={s.search_icon}/>
                {
                    value.length > 0 &&
                    <button className={s.cross} onClick={clearInput}>
                        <img src={cross} alt={'clear'}/>
                    </button>
                }
            </div>
        </div>
    );
};

export default SearchInput;