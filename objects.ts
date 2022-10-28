import { loadUsers, getNewUsers } from './userService';
import { User } from './types.js';

let users: Array<User> = [];

const assignAllUsers = (allUsers: User[]): void => {
  users = allUsers;
};

const updateUsersList = (newUsers: User[]) => {
  users = [...users, ...newUsers];
};

loadUsers()
  .then(assignAllUsers)
  .then(getNewUsers)
  .then((newUsers: User[]) => {
    updateUsersList(newUsers);
    const user1 = getUser(1);

    user1.email = 'mail@email.com';

    // do smth with this user
  });

function getUser(userId: number) {
  const user = users.find(({ id }) => userId === id);
  if (!user) throw new Error('User not found');
  return user;
}
