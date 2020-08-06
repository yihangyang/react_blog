'use strict'

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = "hi api"
  }

  async checkLogin() {
    let username = this.ctx.request.body.username
    let password = this.ctx.request.body.password
    const sql = "SELECT username FROM admin_user WHERE username = '" +
                username + "' AND password = '" + password + "'"

    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      // account found, login successed
      let openId = new Date().getTime()
      this.ctx.session.openId = {'openId': openId}
      this.ctx.body =  {'data': 'login successed', 'openId': openId}
    } else {
      this.ctx.body =  {'data': 'login failed'}
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body={data: resType}
  }
}

module.exports = MainController