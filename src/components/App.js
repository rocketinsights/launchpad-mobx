import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer class App extends Component {
  render () {
    return (
      <div className='app container'>
        <div className='columns'>
          <div className='column is-narrow'>
            Narrow Column Over On This Side
          </div>
          <div className='column'>
            main workspace
          </div>
        </div>
        <DevTools />
      </div>
    )
  }
}

export default App
