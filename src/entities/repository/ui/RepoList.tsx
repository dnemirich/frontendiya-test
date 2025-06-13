import type { RepositorySummary } from '../model';
import s from './repoList.module.scss';
import ReactPaginate from 'react-paginate';
import { ITEMS_PER_PAGE } from 'shared/config/constants.ts';
import { ReactComponent as RightArrow } from 'shared/assets/icons/rightArrow.svg';
import { ReactComponent as LeftArrow } from 'shared/assets/icons/leftArrow.svg';

type Props = {
  repos: RepositorySummary[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

export const RepoList = ({ repos, totalCount, totalPages, onPageChange, currentPage }: Props) => {
  const from = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const to = Math.min(currentPage * ITEMS_PER_PAGE, totalCount);
  return (
    <div className={s.listWrapper}>
      <h2 className={s.heading}>Repositories ({totalCount})</h2>
      <ul className={s.list}>
        {repos.map((repo) => (
          <li className={s.listItem} key={repo.id}>
            <a className={s.name} href={repo.html_url} target={'_blank'}>
              {repo.name}
            </a>
            <p className={s.description}>{repo.description}</p>
          </li>
        ))}
      </ul>
      <div className={s.paginationWrapper}>
        <p className={s.paginationSummary}>
          {' '}
          {from}–{to} of {totalCount} items
        </p>
        <ReactPaginate
          containerClassName={s.pagination}
          activeClassName={s.active}
          previousLabel={
            <div className={s.navBtn}>
              <LeftArrow />
            </div>
          }
          nextLabel={
            <div className={s.navBtn}>
              <RightArrow />
            </div>
          }
          breakLabel={'...'}
          pageCount={totalPages}
          forcePage={currentPage - 1}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
