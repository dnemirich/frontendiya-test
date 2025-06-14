import { LayoutContainer } from 'shared/ui/LayoutContainer/LayoutContainer.tsx';
import { ReactComponent as Search } from 'shared/assets/icons/searchEnlargedIcon.svg';
import { ReactComponent as User } from 'shared/assets/icons/userIcon.svg';
import { ReactComponent as NoRepo } from 'shared/assets/icons/noRepoIcon.svg';

import s from './placeholder.module.scss';

type Props = {
  type: 'idle' | 'not-found' | 'no-repos';
};

export const Placeholder = ({ type }: Props) => {
  return (
    <LayoutContainer className={s.container}>
      <div className={s.wrapper} id={type}>
        <div className={s.iconWrapper}>
          {type === 'idle' && <Search />}
          {type === 'not-found' && <User />}
          {type === 'no-repos' && <NoRepo />}
        </div>
        <p className={s.text}>
          {type === 'idle' && 'Start with searching a GitHub user'}
          {type === 'not-found' && 'User not found'}
          {type === 'no-repos' && 'Repository list is empty'}
        </p>
      </div>
    </LayoutContainer>
  );
};
