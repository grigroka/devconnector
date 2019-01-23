const options = {
  clientId: process.env.REACT_APP_GITHUB_API_KEY,
  clientSecret: process.env.REACT_APP_GITHUB_API_SECRET,
  count: 5,
  sort: 'created: asc'
};

const getGithub = username =>
  fetch(
    `https://api.github.com/users/${username}/repos?per_page=${
      options.count
    }&sort=${options.sort}&client_id=${options.clientId}&client_secret=${
      options.clientSecret
    }`
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export default getGithub;
