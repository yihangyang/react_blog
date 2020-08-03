import { Avatar, Divider} from 'antd'
import { AppleOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

import '../styles/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Moha90.svg/640px-Moha90.svg.png"/></div>
      <div className="author-introduction">
      Then people don't know it, and they can't predict it. Your own destiny, of course, depends on your own struggle, but you must also consider the historical schedule.
        <Divider> Social Media </Divider>
        <Avatar size={28} className="account"><AppleOutlined /></Avatar>
        <Avatar size={28} className="account" ><GithubOutlined /></Avatar>
        <Avatar size={28} className="account" ><MailOutlined /></Avatar>
      </div>
    </div>
  )
}

export default Author