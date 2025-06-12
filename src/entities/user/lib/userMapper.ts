import type { User, UserSummary } from '../model';
import { formatNumber } from './numberFormatter.ts';

export const userMapper = (user: User): UserSummary => {
  const formatFollowersText = (count: number): string => {
    if (count === 0) return 'No followers';
    if (count === 1) return '1 follower';
    return `${formatNumber(count)} followers`;
  };

  const formatFollowingText = (count: number): string => {
    if (count === 0) return 'Not following anyone';
    if (count === 1) return '1 following';
    return `${formatNumber(count)} following`;
  };

  return {
    bio: user.bio,
    html_url: user.html_url,
    avatar_url: user.avatar_url,
    login: user.login,
    following: formatFollowingText(user.following),
    followers: formatFollowersText(user.followers),
  };
};
