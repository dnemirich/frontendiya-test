import type { UserSummary } from '../model';
import s from './userCard.module.scss';
import { ReactComponent as Followers } from 'shared/assets/icons/followersIcon.svg';
import { ReactComponent as Following } from 'shared/assets/icons/followingIcon.svg';

type Props = {
  user: UserSummary;
};

export const UserCard = ({ user }: Props) => {
  return (
    <div className={s.card}>
      <img src={user.avatar_url} alt={user.bio} className={s.avatar} />
      <div className={s.infoBlock}>
        <h2 className={s.name}>{user.bio}</h2>
        <a href={user.html_url} target={'_blank'} className={s.link}>
          {' '}
          {user.login}
        </a>
        <div className={s.stats}>
          <div className={s.statsItem}>
            <Followers className={s.icon} />
            <span>{user.followers}</span>
          </div>
          <div className={s.statsItem}>
            <Following className={s.icon} />
            <span>{user.following}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
