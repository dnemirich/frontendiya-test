import { ReactComponent as Search } from 'shared/assets/icons/searchIcon.svg';
import s from './searchInput.module.scss';
import { type FormEvent, useState } from 'react';
import { useSearchUserStore } from '../model';

export const SearchInput = () => {
  const [value, setValue] = useState('');
  const searchUser = useSearchUserStore((state) => state.searchUser);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    searchUser(value.trim());
  };

  return (
    <form className={s.inputWrapper} onSubmit={handleSubmit} id={'search-form'}>
      <div className={s.iconWrapper}>
        <Search className={s.icon} />
      </div>
      <input
        className={s.input}
        id={'search-input'}
        type="text"
        placeholder="Enter GitHub username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
