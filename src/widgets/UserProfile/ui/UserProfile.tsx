import { type User, UserCard, userMapper } from 'entities/user';
import { LayoutContainer } from 'shared/ui/LayoutContainer/LayoutContainer.tsx';
import { RepoList } from 'entities/repository';
import s from './userProfile.module.scss';

type Props = {
  user: User;
};

export const UserProfile = ({ user }: Props) => {
  const cardInfo = userMapper(user);

  return (
    <LayoutContainer>
      <div className={s.wrapper}>
        <UserCard user={cardInfo} />
        <RepoList />
      </div>
    </LayoutContainer>
  );
};
