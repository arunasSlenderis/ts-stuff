import fetch from 'node-fetch';
import { User } from './types';

export const loadUsers = async () => {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const result: User[] = await response.json();
  return result;
};

export const getNewUsers = async () => {
  const newUsers: User[] = await Promise.resolve([
    {
      id: 11,
      name: 'John Smith',
      email: 'mail@email.com',
    },
  ]);

  return newUsers;
};
