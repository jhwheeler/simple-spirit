import superagent from 'superagent';

const api = {
  getKoans: () => {
    return superagent.get('/api/koans');
  },

  getKoanById: (koanId) => {
    return superagent.get(`/api/koan/${koanId}`);
  },

  getLatestKoan: () => {
    return superagent.get('/api/koan');
  },

  postKoan: (koan, inquiry) => {
      const koanArray = koan.split(" ");
      const randId = Math.floor(Math.random() * koanArray.length);
      const koanId = koanArray.slice((randId - 2), (randId + 3)).join("-");
    return superagent
      .post('/api/koan/')
      .send({koan: koan, inquiry: inquiry, koanId: koanId});
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
