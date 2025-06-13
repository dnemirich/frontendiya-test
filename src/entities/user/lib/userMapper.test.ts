import { describe, it, expect } from 'vitest';
import { userMapper } from './userMapper';
import type { User } from '../model';

describe('userMapper', () => {
  const baseUser: User = {
    login: 'dnemirich',
    id: 123,
    node_id: '',
    avatar_url: 'https://avatar.com/avatar.jpg',
    gravatar_id: '',
    url: '',
    html_url: 'https://github.com/dnemirich',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: false,
    bio: 'Darya Nemirich',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 1,
    following: 5,
    created_at: '',
    updated_at: '',
  };

  it('should format follower and following counts correctly', () => {
    const mapped = userMapper({ ...baseUser, followers: 0, following: 0 });
    expect(mapped.followers).toBe('No followers');
    expect(mapped.following).toBe('Not following anyone');

    const one = userMapper({ ...baseUser, followers: 1, following: 1 });
    expect(one.followers).toBe('1 follower');
    expect(one.following).toBe('1 following');

    const thousand = userMapper({ ...baseUser, followers: 1000, following: 1000 });
    expect(thousand.followers).toBe('1K followers');
    expect(thousand.following).toBe('1K following');

    const justBelowThousand = userMapper({ ...baseUser, followers: 999, following: 999 });
    expect(justBelowThousand.followers).toBe('999 followers');
    expect(justBelowThousand.following).toBe('999 following');

    const million = userMapper({ ...baseUser, followers: 1_000_000, following: 1_000_000 });
    expect(million.followers).toBe('1M followers');
    expect(million.following).toBe('1M following');
  });

  it('should preserve expected user fields', () => {
    const mapped = userMapper(baseUser);
    expect(mapped.login).toBe(baseUser.login);
    expect(mapped.avatar_url).toBe(baseUser.avatar_url);
    expect(mapped.html_url).toBe(baseUser.html_url);
    expect(mapped.bio).toBe(baseUser.bio);
  });
});
