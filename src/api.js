import superagent from 'superagent';

const api = {
  getMaxims: () => {
    return superagent.get('/api/maxims');
  },

  getMaximById: (maximId) => {
    return superagent.get(`/api/maxim/${maximId}`);
  },

  getLatestMaxim: () => {
    return superagent.get('/api/maxim');
  },

  postMaxim: (maxim, challenge) => {
      const maximArray = maxim.split(" ");
      const randId = Math.floor(Math.random() * maximArray.length);
      const maximId = maximArray.slice((randId - 1), (randId + 1)).join("-");
    return superagent
      .post('/api/maxim/')
      .send({maxim: maxim, challenge: challenge, maximId: maximId});
  },

  postUser: (username, email, password) => {
    return superagent
      .post('/api/users')
      .send({username: username, email: email, password: password})
  },

  loginUser: (username, password) => {
    return superagent
      .post('/login')
      .send({username: username, password: password})
  }
}

export default api;
