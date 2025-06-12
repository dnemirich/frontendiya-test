import { Header } from 'widgets/Header';
import { Placeholder } from 'widgets/Placeholder';
import { UserProfile } from 'widgets/UserProfile';
import { useSearchUserStore } from 'features/search-user/model/searchUserStore.ts';

export const HomePage = () => {
  const { user, status } = useSearchUserStore();

  return (
    <>
      <Header />
      <main>
        {status === 'idle' && <Placeholder type="idle" />}
        {status === 'not-found' && <Placeholder type="not-found" />}
        {status === 'success' && user && <UserProfile user={user} />}
      </main>
    </>
  );
};
