import React from 'react'
import styles from "./Navbar.module.css";
import Link from "next/link"
import Image from 'next/image';
function Navbar() {

    let status = false;
    const handleMobile = () => {
        status = !status;

        let mobile = document.querySelector(".mobile");
        let addon = document.querySelector(".addon");

        if(status){
            mobile.style.transform = "translateX(0px)"
            addon.style.zIndex = "998"
            addon.style.visibility = "visible";
            setTimeout(() => {
                addon.style.opacity = "0.6";
            }, 300)
        }else{
            mobile.style.transform = "translateX(-500px)"
            addon.style.opacity = "0";
            addon.style.visibility = "hidden";
            setTimeout(() => {
                addon.style.zIndex = "-1"
            }, 300)
        }
    }

    return (
        <>  
            <div className={styles.addonMobile + " " + "addon"} onClick={() => handleMobile()}></div>
            <div className={styles.navbar + " " + "desktop"}>
                <div className={styles.hamburger} onClick={() => handleMobile()}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.logo}>
                    <Link passHref href="/">
                        <img src="/logo.png" alt="logo" width="250px" height="50"/>
                    </Link>
                </div>
                <div className={styles.icons}>
                    <Link passHref href="#twitter">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40:3665)">
                            <path d="M10.0669 29C22.1394 29 28.7444 18.9957 28.7444 10.3225C28.7444 10.0413 28.7381 9.75379 28.7256 9.47254C30.0105 8.54334 31.1193 7.3924 32 6.07379C30.8034 6.60619 29.5329 6.9539 28.2319 7.10504C29.6017 6.28394 30.6274 4.99402 31.1187 3.47442C29.8301 4.23814 28.4208 4.77688 26.9513 5.06754C25.9611 4.01548 24.652 3.31888 23.2262 3.08546C21.8005 2.85204 20.3376 3.09479 19.0637 3.77619C17.7897 4.45758 16.7757 5.53967 16.1785 6.85514C15.5812 8.17062 15.4339 9.64621 15.7594 11.0538C13.15 10.9228 10.5972 10.245 8.26664 9.06419C5.93604 7.88339 3.87959 6.22598 2.23062 4.19942C1.39253 5.64439 1.13608 7.35425 1.51337 8.98152C1.89067 10.6088 2.87342 12.0313 4.26188 12.96C3.2195 12.9269 2.19997 12.6463 1.2875 12.1413V12.2225C1.28657 13.7389 1.8108 15.2088 2.77108 16.3824C3.73136 17.556 5.06843 18.3608 6.555 18.66C5.58941 18.9242 4.57598 18.9627 3.59313 18.7725C4.01261 20.0766 4.82876 21.2172 5.92769 22.0352C7.02662 22.8531 8.35349 23.3075 9.72313 23.335C7.3979 25.1615 4.52557 26.1522 1.56875 26.1475C1.04438 26.1467 0.520532 26.1146 0 26.0513C3.00381 27.9784 6.49804 29.0019 10.0669 29Z" fill="#D21C0E"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_40:3665">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    <Link passHref href="#discord">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.184 13.424C12.272 13.424 11.552 14.224 11.552 15.2C11.552 16.176 12.288 16.976 13.184 16.976C14.096 16.976 14.816 16.176 14.816 15.2C14.832 14.224 14.096 13.424 13.184 13.424ZM19.024 13.424C18.112 13.424 17.392 14.224 17.392 15.2C17.392 16.176 18.128 16.976 19.024 16.976C19.936 16.976 20.656 16.176 20.656 15.2C20.656 14.224 19.936 13.424 19.024 13.424Z" fill="#D21C0E"/>
                                <path d="M26.8001 0H5.36008C3.55208 0 2.08008 1.472 2.08008 3.296V24.928C2.08008 26.752 3.55208 28.224 5.36008 28.224H23.5041L22.6561 25.264L24.7041 27.168L26.6401 28.96L30.0801 32V3.296C30.0801 1.472 28.6081 0 26.8001 0ZM20.6241 20.896C20.6241 20.896 20.0481 20.208 19.5681 19.6C21.6641 19.008 22.4641 17.696 22.4641 17.696C21.8081 18.128 21.1841 18.432 20.6241 18.64C19.8241 18.976 19.0561 19.2 18.3041 19.328C16.7681 19.616 15.3601 19.536 14.1601 19.312C13.2481 19.136 12.4641 18.88 11.8081 18.624C11.4401 18.48 11.0401 18.304 10.6401 18.08C10.5921 18.048 10.5441 18.032 10.4961 18C10.4641 17.984 10.4481 17.968 10.4321 17.952C10.1441 17.792 9.98408 17.68 9.98408 17.68C9.98408 17.68 10.7521 18.96 12.7841 19.568C12.3041 20.176 11.7121 20.896 11.7121 20.896C8.17608 20.784 6.83208 18.464 6.83208 18.464C6.83208 13.312 9.13608 9.136 9.13608 9.136C11.4401 7.408 13.6321 7.456 13.6321 7.456L13.7921 7.648C10.9121 8.48 9.58408 9.744 9.58408 9.744C9.58408 9.744 9.93608 9.552 10.5281 9.28C12.2401 8.528 13.6001 8.32 14.1601 8.272C14.2561 8.256 14.3361 8.24 14.4321 8.24C15.4081 8.112 16.5121 8.08 17.6641 8.208C19.1841 8.384 20.8161 8.832 22.4801 9.744C22.4801 9.744 21.2161 8.544 18.4961 7.712L18.7201 7.456C18.7201 7.456 20.9121 7.408 23.2161 9.136C23.2161 9.136 25.5201 13.312 25.5201 18.464C25.5201 18.464 24.1601 20.784 20.6241 20.896Z" fill="#D21C0E"/>
                            </svg>
                    </Link>
                </div>
                <div className={styles.links}>
                    <ul>
                        <Link passHref href="/airdrop"><li>AirDrop</li></Link>
                        <Link passHref href="#work"><li>How does it work?</li></Link>
                        <Link passHref href="#tokenomics"><li>Tokenomics</li></Link>
                        <Link passHref href="#roadmap"><li>Roadmap</li></Link>
                    </ul>
                </div>
            </div>

            <div className={styles.mobileNavbar + " " + "mobile"}>
                <div className={styles.mobileUpper}>
                    <div className={styles.close} onClick={() => handleMobile()}>
                        <div className={styles.closeLine}></div>
                        <div className={styles.closeLine}></div>
                    </div>
                    <div className={styles.mobileLogo}>
                        <Link passHref href="/">
                            <Image src="/logo.png" alt="logo" width="210px" height="45"/>
                        </Link>
                    </div>
                </div>

                <div className={styles.mobileLinks}>
                    <ul>
                        <Link passHref href="/airdrop"><li>AirDrop</li></Link>
                        <Link passHref href="#work"><li>How does it work?</li></Link>
                        <Link passHref href="#tokenomics"><li>Tokenomics</li></Link>
                        <Link passHref href="#roadmap"><li>Roadmap</li></Link>
                    </ul>
                </div>

                <div className={styles.mobileIcons}>
                    <Link passHref href="#twitter">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40:3665)">
                            <path d="M10.0669 29C22.1394 29 28.7444 18.9957 28.7444 10.3225C28.7444 10.0413 28.7381 9.75379 28.7256 9.47254C30.0105 8.54334 31.1193 7.3924 32 6.07379C30.8034 6.60619 29.5329 6.9539 28.2319 7.10504C29.6017 6.28394 30.6274 4.99402 31.1187 3.47442C29.8301 4.23814 28.4208 4.77688 26.9513 5.06754C25.9611 4.01548 24.652 3.31888 23.2262 3.08546C21.8005 2.85204 20.3376 3.09479 19.0637 3.77619C17.7897 4.45758 16.7757 5.53967 16.1785 6.85514C15.5812 8.17062 15.4339 9.64621 15.7594 11.0538C13.15 10.9228 10.5972 10.245 8.26664 9.06419C5.93604 7.88339 3.87959 6.22598 2.23062 4.19942C1.39253 5.64439 1.13608 7.35425 1.51337 8.98152C1.89067 10.6088 2.87342 12.0313 4.26188 12.96C3.2195 12.9269 2.19997 12.6463 1.2875 12.1413V12.2225C1.28657 13.7389 1.8108 15.2088 2.77108 16.3824C3.73136 17.556 5.06843 18.3608 6.555 18.66C5.58941 18.9242 4.57598 18.9627 3.59313 18.7725C4.01261 20.0766 4.82876 21.2172 5.92769 22.0352C7.02662 22.8531 8.35349 23.3075 9.72313 23.335C7.3979 25.1615 4.52557 26.1522 1.56875 26.1475C1.04438 26.1467 0.520532 26.1146 0 26.0513C3.00381 27.9784 6.49804 29.0019 10.0669 29Z" fill="#D21C0E"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_40:3665">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    <Link passHref href="#discord">
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.184 13.424C12.272 13.424 11.552 14.224 11.552 15.2C11.552 16.176 12.288 16.976 13.184 16.976C14.096 16.976 14.816 16.176 14.816 15.2C14.832 14.224 14.096 13.424 13.184 13.424ZM19.024 13.424C18.112 13.424 17.392 14.224 17.392 15.2C17.392 16.176 18.128 16.976 19.024 16.976C19.936 16.976 20.656 16.176 20.656 15.2C20.656 14.224 19.936 13.424 19.024 13.424Z" fill="#D21C0E"/>
                                <path d="M26.8001 0H5.36008C3.55208 0 2.08008 1.472 2.08008 3.296V24.928C2.08008 26.752 3.55208 28.224 5.36008 28.224H23.5041L22.6561 25.264L24.7041 27.168L26.6401 28.96L30.0801 32V3.296C30.0801 1.472 28.6081 0 26.8001 0ZM20.6241 20.896C20.6241 20.896 20.0481 20.208 19.5681 19.6C21.6641 19.008 22.4641 17.696 22.4641 17.696C21.8081 18.128 21.1841 18.432 20.6241 18.64C19.8241 18.976 19.0561 19.2 18.3041 19.328C16.7681 19.616 15.3601 19.536 14.1601 19.312C13.2481 19.136 12.4641 18.88 11.8081 18.624C11.4401 18.48 11.0401 18.304 10.6401 18.08C10.5921 18.048 10.5441 18.032 10.4961 18C10.4641 17.984 10.4481 17.968 10.4321 17.952C10.1441 17.792 9.98408 17.68 9.98408 17.68C9.98408 17.68 10.7521 18.96 12.7841 19.568C12.3041 20.176 11.7121 20.896 11.7121 20.896C8.17608 20.784 6.83208 18.464 6.83208 18.464C6.83208 13.312 9.13608 9.136 9.13608 9.136C11.4401 7.408 13.6321 7.456 13.6321 7.456L13.7921 7.648C10.9121 8.48 9.58408 9.744 9.58408 9.744C9.58408 9.744 9.93608 9.552 10.5281 9.28C12.2401 8.528 13.6001 8.32 14.1601 8.272C14.2561 8.256 14.3361 8.24 14.4321 8.24C15.4081 8.112 16.5121 8.08 17.6641 8.208C19.1841 8.384 20.8161 8.832 22.4801 9.744C22.4801 9.744 21.2161 8.544 18.4961 7.712L18.7201 7.456C18.7201 7.456 20.9121 7.408 23.2161 9.136C23.2161 9.136 25.5201 13.312 25.5201 18.464C25.5201 18.464 24.1601 20.784 20.6241 20.896Z" fill="#D21C0E"/>
                            </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar