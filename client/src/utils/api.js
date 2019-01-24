import axios from 'axios';

const getGithub = username =>
  axios
    .get(`/api/profile/github/${username}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export default getGithub;
