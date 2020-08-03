import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  Router.events.on('routeChangeStart',(...args) => {
    console.log('1. routeChangeStart, params sind:', ...args)
  })

  Router.events.on('beforeHistoryChange',(...args) => {
    console.log('2. beforeHistoryChange, params sind:', ...args)
  })

  Router.events.on('routeChangeComplete',(...args) => {
    console.log('3. routeChangeComplete, params sind:', ...args)
  })

  Router.events.on('routeChangeError',(...args) => {
    console.log('4. routeChangeError, params sind:', ...args)
  })

  Router.events.on('hashChangeStart',(...args) => {
    console.log('5. hashChangeStart, params sind:', ...args)
  })

  Router.events.on('hashChangeComplete',(...args) => {
    console.log('6. hashChangeComplete, params sind:', ...args)
  })



  function gotoA() {
    Router.push('/sampleA')
  }

  function gotoxjjenny() {
    Router.push('/xj?name=jenny')
  }

  function gotoxjcherry() {
    Router.push({
      pathname:"/xj",
      query: {
        name:'cherry'
      }
    })
  }

  return(
    <>
      <div>the main page</div>
      <div><Link href="/sampleA"><a>go to the sample A</a></Link></div>
      <div><Link href="/sampleB"><a>go to the sample B</a></Link></div>
      <div><button onClick={gotoA}>go to A</button></div>
      <div>
        <Link href="xj?name=jenny"><a>choose jenny</a></Link><br />
        <Link href={{pathname:"/xj", query:{name:"cherry"}}}><a>choose cherry</a></Link>
      </div>
      <div>
        <button onClick={gotoxjjenny}>chosse jenny</button>
        <button onClick={gotoxjcherry}>chosse cherry</button>
      </div>
      <div>
        <Link href="#yang"><a>choose yang</a></Link>
      </div>
    </>
  )
}

export default Home