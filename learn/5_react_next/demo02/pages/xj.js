import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const xj = ({router, list}) => {
  return (
    <>
      <div>{router.query.name} is coming</div>
      <div>{list}</div>
      <Link href="/"><a>return to home</a></Link>
    </>
  )
}

xj.getInitialProps = async () => {
  const promise = new Promise((resolve, reject)=>{
    axios('https://raw.githubusercontent.com/yihangyang/react_blog/master/data/simpleList.json').then(
      (res) => {
        // console.log('result ist:' + res.data.toString())
        // console.log(res.typeof)
        resolve(res.data.data)
      }
    )
  })
  // console.log(promise['PromiseValue'])
  console.log(promise.toString())
  return await promise
}

export default withRouter(xj)