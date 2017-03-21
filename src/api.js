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
  }
}

export default api;
