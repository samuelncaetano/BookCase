export interface User {
  id: string;
  name: string;
  age: number;
}

export interface GetUserFilter {
  id: string | null;
  name: string | null;
}

export async function getUsers({ id, name }: GetUserFilter) {
  //delay de 0.5s
  await new Promise((resolve) => setTimeout(resolve, 500));

  let users = [
    { id: "0", name: "User_0", age: 15 },
    { id: "1", name: "User_1", age: 16 },
    { id: "2", name: "User_2", age: 17 },
    { id: "3", name: "User_3", age: 18 },
    { id: "4", name: "User_4", age: 19 },
    { id: "5", name: "User_5", age: 20 },
    { id: "6", name: "User_6", age: 21 },
    { id: "7", name: "User_7", age: 21 },
    { id: "8", name: "User_8", age: 23 },
    { id: "9", name: "User_9", age: 24 },
  ];

  if (id) {
    users = users.filter((users) => users.id.includes(id));
  }

  if (name) {
    users = users.filter((users) => users.name.includes(name));
  }

  return users;
}

interface CreateUserRequest {
  name: string;
  age: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createUser(_: CreateUserRequest) {
  //delay de 0.5s
  await new Promise((resolve) => setTimeout(resolve, 500));
  return;
}
