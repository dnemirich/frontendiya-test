import { type User, UserCard, userMapper } from 'entities/user';
import { LayoutContainer } from 'shared/ui/LayoutContainer';
import { mapRepo, RepoList } from 'entities/repository';
import s from './userProfile.module.scss';
import { useUserReposStore } from 'features/fetch-user-repos';
import { useEffect } from 'react';
import { Placeholder } from 'shared/ui/Placeholder';

type Props = {
  user: User;
};

const ITEMS_PER_PAGE = 4;

export const UserProfile = ({ user }: Props) => {
  const { repos, fetchRepos, currentPage } = useUserReposStore();
  const cardInfo = userMapper(user);
  const reposSummaries = repos.map(mapRepo);

  const totalPages = Math.ceil(user.public_repos / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchRepos(user.login, 1);
  }, [user.login, fetchRepos]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1;
    if (newPage > 0 && newPage <= totalPages) {
      fetchRepos(user.login, newPage);
    }
  };

  return (
    <LayoutContainer>
      <div className={s.wrapper}>
        <UserCard user={cardInfo} />
        {repos.length === 0 ? (
          <Placeholder type={'no-repos'} />
        ) : (
          <RepoList
            repos={reposSummaries}
            currentPage={currentPage}
            totalCount={user.public_repos}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </LayoutContainer>
  );
};
