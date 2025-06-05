import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layouts({children}) {
  return (
    <>
        <Header />
        <div>{children}</div>
        <Footer />
    </>
  )
}

export default Layouts