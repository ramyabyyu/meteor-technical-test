const apiConfig = {
  noToken: {
    headers: {
      'Content-Type': 'application/json',
    },
  },

  withToken: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  },
};

export default apiConfig;
