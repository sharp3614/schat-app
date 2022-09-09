import React, { useRef } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Style from './style.module.scss'

const Login = () => {
    let emailRef = useRef()
    let passwordRef = useRef()

    const handleSubmit = () => {
        console.log(emailRef, "----", passwordRef)
    }

    return (
        <div className={Style.Login}>
            <div className={Style.Container}>
                <h1>Login</h1>
                <Input inputRef={emailRef} title="E posta" name="email" type="text" placeholder='Lütfen e-postanızı giriniz' />
                <Input inputRef={passwordRef} title="Şifre" name="password" type="password" placeholder='Lütfen şifrenizi giriniz' />
                <div className={Style.Footer}>
                    <Button clss="primary" title="Giriş" click={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Login