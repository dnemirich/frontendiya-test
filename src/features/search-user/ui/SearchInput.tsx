import icon from '/icons/searchIcon.svg';
import s from './searchInput.module.scss';

export const SearchInput = () => {
  return (
    <div className={s.inputWrapper}>
      <div className={s.iconWrapper}>
        <img src={icon} alt="search icon" className={s.icon} />
      </div>
      <input className={s.input} type="text" placeholder="Enter GitHub username" />
    </div>
  );
};
