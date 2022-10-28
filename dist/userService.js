import fetch from 'node-fetch';
export const loadUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    return result;
};
export const getNewUsers = async () => {
    const newUsers = await Promise.resolve([
        {
            id: 11,
            name: 'John Smith',
            email: 'mail@email.com',
        },
    ]);
    return newUsers;
};
