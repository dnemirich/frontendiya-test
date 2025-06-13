import { Header } from 'widgets/Header';
import { Placeholder } from 'shared/ui/Placeholder';
import { UserProfile } from 'widgets/UserProfile';
import { useSearchUserStore } from 'features/search-user';

export const HomePage = () => {
  const { user, status } = useSearchUserStore();

  return (
    <>
      <Header />
      <main>
        {(status === 'idle' || status === 'not-found') && <Placeholder type={status} />}
        {status === 'success' && user && <UserProfile user={user} />}
      </main>
    </>
  );
};
