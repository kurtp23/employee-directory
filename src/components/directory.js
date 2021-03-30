import axios from "axios";

const URL = "https://randomuser.me/api/?page=3&results=10&seed=abc";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function () {
    return axios.get(URL);
  },
};
