import { LayoutContainer } from 'shared/ui/LayoutContainer/LayoutContainer.tsx';
import search from '/icons/searchIcon.svg';
import user from '/icons/userIcon.svg';

import s from './placeholder.module.scss';

type Props = {
  type: 'idle' | 'not-found';
};

export const Placeholder = ({ type }: Props) => {
  return (
    <LayoutContainer className={s.container}>
      <div className={s.wrapper}>
        <div className={s.iconWrapper}>
          {type === 'idle' && <img src={search} alt="search icon" className={s.icon} />}
          {type === 'not-found' && <img src={user} alt="user icon" className={s.icon} />}
        </div>
        <p className={s.text}>
          {type === 'idle' && 'Start with searching a GitHub user'}
          {type === 'not-found' && 'User not found'}
        </p>
      </div>
    </LayoutContainer>
  );
};
