interface User {
    username: string;
    email: string;
}

const newUser: User = {
    username: "john_doe",
    email: "john@example.com"
};

console.log(`User: ${newUser.username}, Email: ${newUser.email}`);
