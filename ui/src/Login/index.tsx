import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import i18n from '../locale'
import { routePath } from '../appConfig/index'
import Header from '../Header'
import { Session } from '../models/session'
import { LoginRequestBody } from '../models/user'
import { login } from '../actions/user'
import { getSession } from '../actions/session'
import style from './style.sass'

interface Props extends RouteComponentProps<any> {
  readonly login: (data: LoginRequestBody) => void
  readonly session: Session
  readonly getSession: () => void
}

interface State {
  readonly email: string
  readonly password: string
}

class Login extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  public componentDidMount() {
    this.redirectIfLoggedIn(this.props)
    this.props.getSession()
  }

  public componentDidUpdate() {
    this.redirectIfLoggedIn(this.props)
  }

  public render() {
    const { email, password } = this.state
    return (
      <div className={style.app}>
        <Header />
        <div className={style.login}>
          <div className={style['login-content']}>
            <div className={style['login-content-logo']}>
              <h1>{i18n.login.labelLoginPage}</h1>
            </div>
            <form onSubmit={this.login} className={style['login-content-form']}>
              <input type="text" value={email} placeholder={i18n.login.labelLoginId} onChange={this.onChangeMail} />
              <input
                type="password"
                value={password}
                placeholder={i18n.login.labelLoginPassword}
                onChange={this.onChangePassword}
              />
              <button className={style['login-content-form-button']} type="submit">
                {i18n.login.buttonLogin}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  private readonly onChangeMail = (e: React.FormEvent<any>) =>
    this.setState({ ...this.state, email: e.currentTarget.value })

  private readonly onChangePassword = (e: React.FormEvent<any>) =>
    this.setState({ ...this.state, password: e.currentTarget.value })

  private readonly login = () => this.props.login(this.state)

  private redirectIfLoggedIn({ session, history }: Props) {
    if (session !== null) {
      history.push(routePath.root)
    }
  }
}

const mapStateToProps = ({ session }: any) => ({ session })
const actionCreators = { login, getSession }

export default connect(
  mapStateToProps,
  actionCreators,
)(Login)
