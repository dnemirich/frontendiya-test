import s from './header.module.scss';

import { Logo } from './Logo.tsx';
import { SearchInput } from 'features/search-user';
import { LayoutContainer } from 'shared/ui/LayoutContainer';

export const Header = () => {
  return (
    <header className={s.header}>
      <LayoutContainer className={s.headerContainer}>
        <div className={s.wrapper}>
          <Logo />
          <SearchInput />
        </div>
      </LayoutContainer>
    </header>
  );
};
