import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Lütfen geçerli bir email adresi giriniz')
        .required('Email adresi zorunludur'),
    password: yup
        .string()
        .required('Şifrenizi girmeniz zorunludur')
})

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required('Kullanıcı adını girmek zorunludur')
        .min(2, 'Kullanıcı adı en az 2 karakter olmalıdır.')
        .max(20, 'Kullanıcı adı en fazla 20 karakter olmalıdır.'),
    email: yup
        .string()
        .email('Lütfen geçerli bir email adresi giriniz')
        .required('Email adresi zorunludur'),
    password: yup
        .string()
        .required('Şifrenizi girmeniz zorunludur')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"

        ),
})