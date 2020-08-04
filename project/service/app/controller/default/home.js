'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // let result = await this.app.mysql.get("blog_content", {})
    this.ctx.body = 'api hi'
  }

  async getArticleList() {
    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.publishTime, '%Y-%m-%d %H:%i:%s') as publishTime," +
              'article.view_count as view_count,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type on article.type_id = type.id'
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }

  async getArticleById() {
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              'article.article_content as article_content,' +
              "FROM_UNIXTIME(article.publishTime, '%Y-%m-%d %H:%i:%s') as publishTime," +
              'article.view_count as view_count,' +
              'type.typeName as typeName,' +
              'type.id as typeId ' +
              'FROM article LEFT JOIN type on article.type_id = type.id ' +
              'WHERE article.id=' + id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }

  // get type Info(type & catgoryid)
  async getTypeInfo() {
    const result = await this.app.mysql.select("type")
    this.ctx.body = {data: result}
  }

  // use categoryId to get article list
  async getListById() {
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.publishTime, '%Y-%m-%d %H:%i:%s') as publishTime," +
              'article.view_count as view_count,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type on article.type_id = type.id ' +
              'WHERE type_id =' + id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }
}

module.exports = HomeController;
