import { loadUsers, getNewUsers } from './userService.js';
let users = [];
const assignAllUsers = (allUsers) => {
    users = allUsers;
};
const updateUsersList = (newUsers) => {
    users = [...users, ...newUsers];
};
loadUsers()
    .then(assignAllUsers)
    .then(getNewUsers)
    .then((newUsers) => {
    updateUsersList(newUsers);
    const user1 = getUser(1);
    user1.email = 'notAnEmail';
    user1.email = 'mail@email.com';
    // do smth with this user
});
function getUser(userId) {
    const user = users.find(({ id }) => userId === id);
    if (!user)
        throw new Error('User not found');
    return user;
}
