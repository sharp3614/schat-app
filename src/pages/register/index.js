import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import Button from '../../components/button'
import Input from '../../components/input'
import { register } from '../../constants/firebase'
import { registerSchema } from '../../constants/authYup'
import Style from './style.module.scss'


const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: registerSchema,
        onSubmit: values => {
            register(values.email, values.password)
        }
    })

    return (
        <div className={Style.Login}>
            <div className={Style.Container}>
                <h1>Kayıt Ol</h1>
                <Input
                    title="Kullanıcı Adı"
                    name="username"
                    type="text"
                    placeholder='Lütfen kullanıcı adınızı giriniz'
                    onChange={formik.handleChange}
                    inputValue={formik.values.username}
                    error={formik.errors.username}
                />
                <Input
                    title="E posta"
                    name="email"
                    type="text"
                    placeholder='Lütfen e-postanızı giriniz'
                    onChange={formik.handleChange}
                    inputValue={formik.values.email}
                    error={formik.errors.email}
                />
                <Input
                    title="Şifre"
                    name="password"
                    type="password"
                    placeholder='Lütfen şifrenizi giriniz'
                    onChange={formik.handleChange}
                    inputValue={formik.values.password}
                    error={formik.errors.password}
                />

                <div className={Style.Footer}>
                    <Button clss="primary" title="Kayıt Ol" click={formik.handleSubmit} />
                    <p>Already a user? <Link to={'/login'}>LOGIN</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register