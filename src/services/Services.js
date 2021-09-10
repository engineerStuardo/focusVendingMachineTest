import axios from 'axios';

const apiURL = 'https://vending-machine-test.vercel.app/api/products';

export const getData = async () => {
  const resp = await axios.get(apiURL);
  return resp.data.data;
};
