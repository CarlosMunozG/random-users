import axios from 'axios'

class UserService {
  constructor(){
    this.user = axios.create({
      baseURL: 'https://randomuser.me/api',
    })
  }

  getRandomUser(){
    return this.user.get('/?results=1')
    .then(response => response);
  }

  getInitialUsers(){
    return this.user.get('/?results=3')
    .then(response => response);
  }

}

const userService = new UserService();
export default userService;