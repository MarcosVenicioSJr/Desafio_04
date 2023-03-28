export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "Joana",
    email: "joana@dio.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log("DB atualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUsers = (name: string) => {
    let index = this.db.findIndex((user) => user.name === name);
    console.log(db);
    this.db.splice(index, 1);
    console.log(db);
  };
}
