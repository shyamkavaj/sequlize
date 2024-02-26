import React from 'react'
// import { useContext } from 'react'
// import {AuthContext} from './authContext'
import {useAuth} from './authContext'
// import 
// console.log(Auth.login+"------------------------------------------------------------------------------------------------------")
const initialState = {
    email: '',
    password: ''
}

const IndexForm = () => {

    // console.log(useAuth().status+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    const {status:ContextStatus, login} = useAuth();
    console.log(useAuth());
    const {
        isLoginPending,
        isLoggedIn,
        loginError
    } = ContextStatus;

    console.log(isLoginPending.isLoginPending)

    const [state, setState] = React.useState(initialState);
    // console.log(authDetail)

    const onSubmit = (e) => {
        e.preventDefault();
        const {email,pass} = state;
        login(email,pass);
        setState({
            email:'',
            password:''
        });
    }
    return (
        <form name="loginForm" onSubmit={onSubmit}>

            <div className="row">

                <div className="col-sm-3 col-md-6">
                    <label htmlFor="email">Username</label>
                </div>

                <div className="col-sm-9 col-md-6">
                    <input
                        type="text"
                        name="email"
                        onChange={e => setState(prevState => ({ ...prevState, email: e.target.value }))}
                        value={state.email}
                        placeholder="admin"
                    />
                </div>

                <div className="col-sm-3 col-md-6">
                    <label htmlFor="password">Password</label>
                </div>
                <div className="col-sm-9 col-md-6">
                    <input
                        type="password"
                        name="password"
                        onChange={e => setState(prevState => ({ ...prevState, password: e.target.value }))}
                        value={state.password}
                        placeholder="admin"
                    />
                </div>

                <div className="col-sm-3 col-md-6">
                </div>
                <div className="col-sm-9 col-md-6">
                    <input className="primary" type="submit" value="Login" />
                </div>

            </div>
            
            {isLoginPending && <div>Please wait...</div>}
            {isLoggedIn && <div>Success.</div>}
            {loginError && <div>{loginError.message}</div>}
        </form>
    )
}

export default IndexForm