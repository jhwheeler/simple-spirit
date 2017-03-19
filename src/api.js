import superagent from 'superagent';

const api = {
  getMaxims: () => {
    return superagent.get('/maxims');
  },

  getLatestMaxim: () => {
    return superagent.get('/maxim');
  }
}

export default api;
