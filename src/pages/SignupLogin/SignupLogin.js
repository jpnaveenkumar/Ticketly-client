import React from 'react';
import styles from './SignupLogin.module.scss';
import Logo from '../../components/Common/Logo';
import SignupLoginHolder from '../../components/SignupLogin/SignupLoginHolder';

const SignupLogin = () => {
    const url = "https://www.callsign.com/media/general-images/Callsign-C-logo-1000x1000.png?mtime=20210511155927&focal=none";
    return (
      <div className={styles.container}>
          <div className={styles.imgContainer}>
              <Logo imgWidth={100} imgheight={100} />
          </div>
          <SignupLoginHolder/>
      </div>
    );
}

export default SignupLogin;