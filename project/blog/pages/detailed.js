import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Ad from '../components/Ad'
import Footer from '../components/Footer'
import '../styles/pages/detailed.css'
import { CalendarOutlined, FolderOutlined, UserOutlined } from '@ant-design/icons';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'

import servicePath from '../config/apiUrl'
// import MarkNav from 'markdown-navbar'
// import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'

function Detailed(props) {

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    table: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">Video</a></Breadcrumb.Item>
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                American Goverment try to ban TikToc in China
              </div>
              <div className="center">
                <span><CalendarOutlined /> 2019-07-08 </span>
                <span><FolderOutlined /> Video </span>
                <span><UserOutlined /> 200 </span>
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML={{__html:html}}
              >
                {/* <ReactMarkdown
                  source={markdown}
                  escapeHtml={false}
                /> */}
                
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ad />
          <Affix offsetTop={5}>
            <div className="detailed-nav">
              <div className="comm-box">
                <div className="nav-title">Content</div>
                {/* <MarkNav
                  className="article-menu"
                  source={html}
                  // hidingTopOffset={0}
                  ordered={false}
                /> */}
                {tocify && tocify.renderer}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async(context) => {

  let id = context.query.id

  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then(
      (res) => {
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}

export default Detailed