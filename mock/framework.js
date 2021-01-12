module.exports = [
  {
    url: '/framework/principal',
    type: 'get',
    response: config => {
      const { username } = config.body
      return { companyId: '8758', username: 'admin' }
    },
  },
  {
    url: '/framework/check',
    type: 'get',
    response: _ => {
      return true
    },
  },
]
