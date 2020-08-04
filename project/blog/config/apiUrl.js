let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList', // main page article list
  getArticleById: ipUrl + 'getArticleById/', // detail page
  getTypeInfo: ipUrl + 'getTypeInfo',  // get article type
  getListById: ipUrl + 'getListById/',  // use category id to get article list
}

export default servicePath