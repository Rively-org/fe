"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Styles from '../login.module.css';
import Logo from '../../../../../public/assets/logo_main.png';
import Google from '../../../../../public/assets/google.svg';
import Linkedin from '../../../../../public/assets/LinkedIn .png';



export default function Login() {
    return (
        <div className={Styles.landing_page}>
            <div className={Styles.left_landing}>
                <div className={Styles.logo_main}>
                <Image className={Styles.Logo_main_img} src={Logo} alt="Logo"/>
                <span className={Styles.logo_text}>RIVELY</span>
                </div>
                
                <div className={Styles.header_title}>
                    Welcome Back
                    <span className={Styles.header_subscript}>
                    Log in to see what your competitors are upto
                    </span>

                   
                </div>
                <div className={Styles.main_login_box}>
                  <form className={Styles.form}>
                    <div className={Styles.row_login}>
                    <label htmlFor="email" className={Styles.label_input}>Email Address</label>
                    <input type="email" id="email" className={Styles.input_box} placeholder="✉️ Enter your email" />
                    </div>
                    <div className={Styles.row_login}>
                      <span className={Styles.password_forgot}>
                      <label htmlFor="password" className={Styles.label_input}>Password</label> 
                      <a href="#">Forgot Password?</a>
                      </span>
                    
                    <input type="password" id="password" className={Styles.input_box} placeholder="🔒 Enter your password" /> 
                    </div>
                    <div className={Styles.lbtn}>

                  <button type="submit" className={Styles.loginButton}>Login</button>
                  </div>
                  <div className={Styles.oneliner}>
                    <hr className={Styles.gradient_line} />
                      <p>Or</p>
                    <hr className={Styles.gradient_line}/>
                  </div>
                  <div className={Styles.login_shortcuts}>
                        
                        <Image src={Google} className={Styles.shortcuts_logos} alt='google'/>
                        <Image src={Linkedin} className={Styles.shortcuts_logos} alt='linkedin'/>
                    </div>
                  
                  <div className={Styles.other_ways}><p>New to Platform?</p>
                  <Link href="../../../pages/auth/signup"> <p className={Styles.signup}>Sign Up</p></Link>
                  </div>
                  
                  </form>
                  
                </div>
                
            </div>
            <div className={Styles.right_landing}>
            <div className={Styles.ringcontainer}>
          <div className={Styles.outerring}>
              <div className={Styles.innerring}>
                <div className={Styles.news}>
                  <div className={Styles.newsItem_1}>
                    <p>Airtable and Notion are two highly rated project management software solutions.</p>
                    <span>- India Today</span>
                  </div>

                  <div className={Styles.newsItem_2}>
                    <p>Moon Pay now offers Tether (ERC-20) swaps with no processing fee and has earned an ISO 27001 Certification.</p>
                    <span>- The Hindu</span>
                  </div>

                  <div className={Styles.newsItem_3}>
                    <p>Airtable and Notion are two highly rated project management software solutions.</p>
                    <span>- India Today</span>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
            </div>
        </div>
    );
}
