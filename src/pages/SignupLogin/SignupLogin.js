import React from 'react';
import styles from './SignupLogin.module.scss';
import SignupLoginHolder from '../../components/SignupLogin/SignupLoginHolder';

const SignupLogin = () => {
    const url = "https://www.callsign.com/media/general-images/Callsign-C-logo-1000x1000.png?mtime=20210511155927&focal=none";
    return (
      <div className={styles.container}>
          <div className={styles.imgContainer}>
              <img src={url} height={100} width={100}/>
              <div className={styles.headerContainer}>
                  <h1>allSign Ticketly</h1>
              </div>
          </div>
          <SignupLoginHolder/>
      </div>
    );
}

export default SignupLogin;