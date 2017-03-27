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
    const randId = Math.random() * 10;
    return superagent
      .post('/api/maxim/')
      .send({maxim: maxim, challenge: challenge, maximId: randId});
  }
}

export default api;
