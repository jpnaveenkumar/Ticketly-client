import React from 'react';
import styles from './Logo.module.scss';

const Logo = (props) => {
    const url = "https://www.callsign.com/media/general-images/Callsign-C-logo-1000x1000.png?mtime=20210511155927&focal=none";
    return (
        <div className={styles.imgContainer}>
            <img src={url} height={props.imgheight} width={props.imgWidth}/>
            <div className={styles.headerContainer}>
                <h1 style={{fontSize : props.fontSize ? props.fontSize : '2em'}} >allSign Ticketly</h1>
            </div>
        </div>
    );
};

export default Logo;