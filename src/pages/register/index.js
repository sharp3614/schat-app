import React, { useRef } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'

import Style from './style.module.scss'

const Register = () => {

    let usernameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()


    const handleSubmit = async () =>{
        console.log(emailRef, "----", passwordRef)
    }
    return (
        <div className={Style.Login}>
            <div className={Style.Container}>
                <h1>Kayıt Ol</h1>
                <Input inputRef={usernameRef} title="Kullanıcı Adı" name="username" type="text" placeholder='Lütfen kullanıcı adınızı giriniz' />
                <Input inputRef={emailRef} title="E posta" name="email" type="text" placeholder='Lütfen e-postanızı giriniz' />
                <Input inputRef={passwordRef} title="Şifre" name="password" type="password" placeholder='Lütfen şifrenizi giriniz' />
                
                <div className={Style.Footer}>
                    <Button clss="primary" title="Kayıt Ol" click={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Register