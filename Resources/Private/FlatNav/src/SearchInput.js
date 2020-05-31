import React from 'react'
import style from './style.css';
import {IconButton, TextInput} from '@neos-project/react-ui-components';

const SearchInput = ({onChange, searchTerm, placeholder}) => {
  const onEnterKey = () => onChange(searchTerm)
  return (
    <div className={style.toolbarSearch}>
      <TextInput className={style.toolbarSearchInput} value={searchTerm} placeholder={placeholder} onChange={onChange} onEnterKey={onEnterKey} />
      {searchTerm ? <IconButton icon="times" onClick={() => onChange('')} className={style.toolbarSearchClearButton} /> : null}
    </div>
  );
}
export default SearchInput;
