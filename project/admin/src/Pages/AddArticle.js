import React, { useState, useEffect } from 'react'
import marked from 'marked'
import '../static/css/addArticle.css'
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
const { Option } = Select
const { TextArea } = Input

function AddArticle(props) {

  const [articleId,setArticleId] = useState(0)  // article_ID，if 0 is new article，if not 0 is in editing
  const [articleTitle,setArticleTitle] = useState('')   //article title
  const [articleContent , setArticleContent] = useState('')  //markdown edit content
  const [markdownContent, setMarkdownContent] = useState('on show') //html content
  const [introduce,setIntroduce] = useState()            //introduce markdown content
  const [introducehtml,setIntroducehtml] = useState('wait for editing') // introduce html content
  const [showDate,setShowDate] = useState()   //publishDate
  const [updateDate,setUpdateDate] = useState() //updateDate
  const [typeInfo ,setTypeInfo] = useState([]) // article category type
  const [selectedType,setSelectType] = useState(1) //selected article category type

  useEffect(() => {
    getTypeInfo()
  })
  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  })

  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = (e) => {
    setIntroduce(e.target.value)
    let html = marked(e.target.value)
    setIntroducehtml(html)
  }

  const getTypeInfo = () => {
    axios({
      method: 'get',
      url: servicePath.getTypeInfo,
      withCredentials: true
    }).then(
      res => {
        if (res.data.data === 'You must login first') {
          // localStorage.removeItem('openId'),
          props.history.push('/')
        } else {
          setTypeInfo(res.data.data)
        }
      }
    )
  }

  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10}>
            <Col span={20}>
              <Input
                placeholder="blog title"
                size="large"
              />
            </Col>
            <Col span={4}>
              &nbsp;
              <Select defaultValue={selectedType} size="large">
                {
                  typeInfo.map((item, index) => {
                    return (
                      <Option key={index} value={item.id}>{ item.typeName }</Option>
                    )
                  })
                }
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className="markdown-content"
                rows={30}
                placeholder="content..."
                onChange={changeContent}
              />
            </Col>
            <Col span={12}>
              <div className="show-html"
                dangerouslySetInnerHTML={{__html: markdownContent}}
              ></div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={24}>
              <Button size="large" span={12}>Save</Button> &nbsp;
              <Button size="large" type="primary">Publish</Button>
              <br />
            </Col>
            <Col span={24}>
              <br/>
              <TextArea
                rows={4}
                placeholder="introduce"
                onChange={changeIntroduce}
              ></TextArea>
              <br/><br/>
              <div className="introduce-html"
                dangerouslySetInnerHTML={{__html: introducehtml}}
              >
              </div>
            </Col>
            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  placeholder="publish date"
                  siez="large"
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  placeholder="change date"
                  siez="large"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default AddArticle