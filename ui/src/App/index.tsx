import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { Session } from '../models/session'

interface Props extends RouteComponentProps<any> {
  session: Session | null
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div>
        <h1>C</h1>
        <h1>R</h1>
        <h1>U</h1>
        <h1>D</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ session }: any) => ({ session })

export default connect(mapStateToProps)(App)
