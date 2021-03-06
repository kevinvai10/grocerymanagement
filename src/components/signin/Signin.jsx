import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../utils/apicalls';
import { setLogin } from '../../redux/signin/signin.actions';
import LoadingCircle from '../loading/LoadingCircle';
import { store } from 'react-notifications-component';
import { signInFailed } from '../../utils/notifications';
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      isLoading: false
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = event => {
    const { signin } = this.props;
    const user = {
      email: this.state.signInEmail,
      password: this.state.signInPassword
    };

    signIn(user)
      .then(user => {
        if (user.id) {
          sessionStorage.setItem('user_id', user.id);
          this.setState({ isLoading: false });
          signin(true);
        }
      })
      .catch(err => {
        console.log('error =>', err);
        store.addNotification(signInFailed);
        this.setState({ isLoading: false });
      });
    this.setState({ isLoading: true });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && <LoadingCircle />}
        <article
          className={
            isLoading
              ? 'o-50 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'
              : 'br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'
          }
        >
          <main className='pa4 black-80'>
            <div className='measure'>
              <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                    Email
                  </label>
                  <input
                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='email'
                    name='email-address'
                    id='email-address'
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className='mv3'>
                  <label className='db fw6 lh-copy f6' htmlFor='password'>
                    Password
                  </label>
                  <input
                    className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='password'
                    name='password'
                    id='password'
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className=''>
                <input
                  onClick={this.onSubmitSignIn}
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  type='submit'
                  value='Sign in'
                />
              </div>
              <div className='lh-copy mt3'>
                <Link to='/register' className='f6 link dim black db pointer'>
                  Register
                </Link>
              </div>
            </div>
          </main>
        </article>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signin: value => dispatch(setLogin(value))
});

export default connect(
  null,
  mapDispatchToProps
)(Signin);
