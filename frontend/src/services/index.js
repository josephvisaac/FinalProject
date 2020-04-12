import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  //? (baseURL = 'here should be your production endpoint')
  ? (baseURL = 'https://final-project-ironhack-full-st.herokuapp.com')
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });


const actions = {

  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },
  allTheologians: async () => {
    return await service.get('/theologians')
  },
  addFavTheo: async (object) => {
    return await service.post('/disptheo', { object: object })
  }
  
};

export default actions;
