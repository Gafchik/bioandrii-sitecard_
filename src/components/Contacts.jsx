import React from 'react';
import classes from './Contacts.module.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';
import { FaViber } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

function Contacts(props) {
    return (
        <div className={classes.container}>
            <div>
                <div className={classes.title}>
                    Ivan Bereza
                </div>
                <div className={classes.description}>
                    <span className={classes.bold}>Georgian olive planter</span>
                </div>
            </div>
            <div className={classes.holder}>
                {/*<a style={{animationDuration: '.6s'}} className={classes.icon} href="https://wa.me/995599427509">*/}
                {/*    <AiOutlineWhatsApp title="Whatsapp" />*/}
                {/*</a>*/}
                <a style={{animationDuration: '.9s'}} className={classes.icon} href="https://t.me/lat424532">
                    <TbBrandTelegram title="Telegram" />
                </a>
                {/*<a style={{animationDuration: '1.2s'}} className={classes.icon} href="viber://chat?number=+995599427509">*/}
                {/*    <FaViber title="Viber" />*/}
                {/*</a>*/}
                <a style={{animationDuration: '1.5s'}} className={classes.icon} href="mailto:Latifundistge@gmail.com?subject=&body=">
                    <HiOutlineMail title="Mail" />
                </a>
                {/*<a style={{animationDuration: '1.8s'}} className={classes.icon} href="tel:+995599427509">*/}
                {/*    <HiOutlinePhone title="Phone" />*/}
                {/*</a>*/}
            </div>
        </div>
    );
}

export default Contacts;