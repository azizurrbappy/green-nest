import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://green-nest-server-iota.vercel.app',
});

const useAxios = () => {
  return instance;
};

export default useAxios;
