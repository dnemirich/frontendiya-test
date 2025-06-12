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
      <div className={s.wrapper}>
        <div className={s.iconWrapper}>
          {type === 'idle' && <Search className={s.icon} />}
          {type === 'not-found' && <User className={s.icon} />}
          {type === 'no-repos' && <NoRepo className={s.icon} />}
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
