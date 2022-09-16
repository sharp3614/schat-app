import React, { useState } from 'react'

import Style from './style.module.scss'
import option from '../../assets/menu.svg'
const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={Style.Dropdown}>
            <div className={Style.dropdown_btn} onClick={() => setIsActive(isActive ? false : true)}>
                <img className={Style.icon} src={option} alt="option" />
            </div>
            {
                isActive &&
                <div className={Style.dropdown_content}>
                    <div className={Style.dropdown_item}>
                        Setting
                    </div>
                    <div className={Style.dropdown_item}>
                        Logout
                    </div>
                </div>
            }

        </div>
    )
}

export default Dropdown