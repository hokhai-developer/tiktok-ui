import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BSE_URL,
});

//custom get put post delete...
export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export default httpRequest;
