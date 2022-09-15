import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button'
import Input from '../../components/input'
import { loginSchema } from '../../constants/authYup'
import { useAuth } from '../../context/useAuth'
import Style from './style.module.scss'

const Login = () => {

    const {login} = useAuth()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
          await  login(values.email, values.password)
        },
    });

    return (
        <div className={Style.Login}>
            <div className={Style.Container}>
                <h1>Login</h1>
                <Input
                    title="E posta"
                    name="email"
                    type="text"
                    placeholder='abc@abc.com'
                    onChange={formik.handleChange}
                    inputValue={formik.values.email}
                    error={formik.errors.email}
                />
                <Input
                    title="Şifre"
                    name="password"
                    type="password"
                    placeholder='xxxxxx'
                    onChange={formik.handleChange}
                    inputValue={formik.values.password}
                    error={formik.errors.password}
                />
                <div className={Style.Footer}>
                    <Button clss="primary" title="Giriş" click={formik.handleSubmit} />
                    <p>Need an accont? <Link to={'/register'}>SIGN UP</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login