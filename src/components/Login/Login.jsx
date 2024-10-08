import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/Validators/validators';
import { connect } from "react-redux";
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
<form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
            <Field type="password" placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
            <Field type="checkbox" name={'rememberMe'} component={Input} />Remember Me
            </div>
            {captchaUrl && <img src={captchaUrl}></img>}
            {captchaUrl && <Field type=""  component={Input} />}


            { error && 
                <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);
