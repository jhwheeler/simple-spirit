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
    const randId = Math.floor(Math.random() * 10);
    return superagent
      .post('/api/maxim/')
      .send({maxim: maxim, challenge: challenge, maximId: randId});
  },

  postUser: (username, email, password) => {
    return superagent
      .post('/api/users')
      .send({username: username, email: email, password: password})
  },

  loginUser: (username, password) => {
    return superagent
      .post('/api/users/login')
      .send({username: username, password: password})
  }
}

export default api;
