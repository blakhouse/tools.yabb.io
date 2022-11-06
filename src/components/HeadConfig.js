import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'My Page Title'

class HeadConfig extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title> tools.yabb.io </title>
        </Helmet>
        ...
      </>
    )
  }
}

export default HeadConfig;