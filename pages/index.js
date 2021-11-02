import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MEME Marketplace</title>
        <meta name="description" content="Meme Marketplace" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar/>

      <div className={styles.hero}>
        <div className={styles.leftHero}>
          <div className={styles.heroContent}>
            <h1>Don&apos;t let<br/>Your Memes</h1>
            <h2>Be Dreams!</h2>

            <div className={styles.buttons}>
              <Link passHref href="/airdrop"><p>AirDrop <b>IN PROGRESS</b></p></Link>
              <Link passHref href="/memepaper"><p>MemePaper Coming Soon!</p></Link>
            </div>
          </div>
          <div className={styles.addon}></div>
        </div>
        <div className={styles.rightHero}>
        </div>
      </div>

      <div className={styles.phases}>
        <div className={styles.phaseOne}>
          <p className={styles.upper}>Phase 1</p>
          <div className={styles.down}>
            <h4>MemeMarketplace Exchange</h4>
            <p>Unite ALL Meme Tokens and NFTs in ONE place</p>
          </div>
        </div>
        <div>
          <svg className={styles.phaseArrow} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16H27" stroke="#D21C0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 7L27 16L18 25" stroke="#D21C0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.phaseTwo}>
          <p className={styles.upper}>Phase 2</p>
          <div className={styles.down}>
            <p>Normie Integration into the Solana NFT Ecosystem</p>
          </div>
        </div>
      </div>

      <div className={styles.sectionOne} id="work">
        <div className={styles.sectionContent}>
          <h1>How will we get the Normies?</h1>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLeft}>
              <Image alt="meme marketplace" width="600" height="340" src="/innerImage.png"/>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.criteria}>
                <div className={styles.number}>1</div>
                <p>Influencers are carefully selected based on specific criteria we deem worthy of our platform, using an exclusive Invite ONLY business model</p>
              </div>

              <div className={styles.criteria}>
                <div className={styles.number}>2</div>
                <p>MemeMarketplace offers an integrated A-Z solution allowing influencers the privilege of working One on One with our established team of Artists and Developers, giving Life to their ideas</p>
              </div>

              <div className={styles.criteria}>
                <div className={styles.number}>3</div>
                <p>Influencers inform their followers of their creation and upcoming sale</p>
              </div>

              <div className={styles.criteria}>
                <div className={styles.number}>4</div>
                <p>MemeMarketplace serves as the<br/> Normie NFT On-Ramp</p>
              </div>
            </div>
          </div>
        </div>

        <svg width="127" className={styles.sectionDecoration} height="269" viewBox="0 0 127 269" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M250.165 152.914C260.412 88.9564 216.872 28.8015 152.914 18.5542C88.9563 8.30704 28.8014 51.8479 18.5542 115.806C8.30701 179.763 51.8479 239.918 115.806 250.165C179.763 260.413 239.918 216.872 250.165 152.914Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M232.138 150.047C240.806 96.0484 204.058 45.2468 150.059 36.5788C96.0605 27.9107 45.2589 64.6586 36.5909 118.658C27.9228 172.656 64.6708 223.458 118.67 232.126C172.669 240.794 223.47 204.046 232.138 150.047Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M165.793 208.749C206.876 191.385 226.104 144.005 208.741 102.922C191.377 61.8386 143.997 42.6102 102.913 59.9739C61.8303 77.3375 42.6019 124.718 59.9655 165.801C77.3292 206.884 124.71 226.113 165.793 208.749Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M158.598 191.985C190.427 178.593 205.373 141.935 191.981 110.107C178.59 78.2781 141.931 63.3322 110.103 76.7238C78.2747 90.1154 63.3287 126.774 76.7203 158.602C90.1119 190.43 126.77 205.376 158.598 191.985Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M151.459 175.19C174.008 165.746 184.633 139.811 175.189 117.261C165.745 94.7119 139.81 84.0875 117.26 93.5312C94.7109 102.975 84.0865 128.91 93.5302 151.46C102.974 174.009 128.91 184.634 151.459 175.19Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M159.68 140.306C162.967 126.326 154.299 112.328 140.319 109.041C126.338 105.754 112.34 114.422 109.053 128.402C105.766 142.382 114.434 156.38 128.415 159.667C142.395 162.955 156.393 154.286 159.68 140.306Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M142.098 134.356C142.098 138.628 138.629 142.097 134.357 142.097C130.086 142.097 126.617 138.628 126.617 134.356C126.617 130.084 130.086 126.615 134.357 126.615C138.629 126.615 142.098 130.084 142.098 134.356Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        <svg width="84" className={styles.sectionDecorationTwo} height="269" viewBox="0 0 84 269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.1652 152.914C75.4124 88.9564 31.8715 28.8015 -32.0861 18.5543C-96.0437 8.30704 -156.199 51.8479 -166.446 115.806C-176.693 179.763 -133.152 239.918 -69.1945 250.165C-5.23688 260.413 54.918 216.872 65.1652 152.914Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M47.138 150.047C55.8061 96.0484 19.0582 45.2468 -34.9408 36.5788C-88.9397 27.9107 -139.741 64.6586 -148.409 118.658C-157.077 172.656 -120.329 223.458 -66.3305 232.126C-12.3316 240.794 38.47 204.046 47.138 150.047Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-19.2073 208.749C21.8758 191.385 41.1043 144.005 23.7406 102.922C6.37699 61.8387 -41.0035 42.6102 -82.0866 59.9739C-123.17 77.3375 -142.398 124.718 -125.034 165.801C-107.671 206.884 -60.2904 226.113 -19.2073 208.749Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-26.4016 191.985C5.42678 178.593 20.3728 141.935 6.98116 110.106C-6.41045 78.2781 -43.0685 63.3321 -74.8969 76.7237C-106.725 90.1154 -121.671 126.773 -108.28 158.602C-94.8881 190.43 -58.23 205.376 -26.4016 191.985Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-33.541 175.19C-10.9916 165.746 -0.367226 139.811 -9.81092 117.261C-19.2546 94.7118 -45.1902 84.0875 -67.7397 93.5312C-90.2891 102.975 -100.913 128.91 -91.4698 151.46C-82.0261 174.009 -56.0905 184.634 -33.541 175.19Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </div>

      <div className={styles.tokenomics} id="tokenomics">
        <div className={styles.tokenomicsContent}>
          <h2>Tokenomics</h2>
          <h1>1,000,000,000</h1>
          <p className={styles.token}>MEME</p>

          <div className={styles.badgets}>
            <span className={styles.badgeOne}>Max supply</span>
            <span className={styles.badgeTwo}>Strict Limit</span>
            <span className={styles.badgeThree}>Never Increased only BURNED</span>
          </div>
        
          <div className={styles.chart}>
            <div className={styles.pie}>
              <svg width="300" height="300" viewBox="0 0 330 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_114:15)">
                <path d="M51.7219 90.7328C45.016 85.8685 35.5641 87.3292 31.3936 94.4872C24.0265 107.132 18.5356 120.81 15.1177 135.095C10.5339 154.253 9.76838 174.125 12.8648 193.579C15.9612 213.032 22.8589 231.685 33.1641 248.473C43.4693 265.26 56.9802 279.854 72.9253 291.42C88.8704 302.986 106.938 311.299 126.095 315.882C145.253 320.466 165.125 321.232 184.579 318.135C204.032 315.039 222.685 308.141 239.473 297.836C251.991 290.152 263.288 280.685 273.021 269.757C278.53 263.57 276.984 254.131 270.278 249.267L161 170L51.7219 90.7328Z" fill="#EB4D4B"/>
                </g>
                <g filter="url(#filter1_d_114:15)">
                <path d="M303 157C308.523 157 313.035 152.517 312.667 147.007C310.788 118.869 301.007 91.7557 284.353 68.8322C265.733 43.2051 239.479 24.1302 209.353 14.3415C179.226 4.55282 146.774 4.55283 116.647 14.3415C89.6992 23.0975 65.8493 39.2837 47.7908 60.9434C44.2542 65.1853 45.2695 71.4638 49.7376 74.7101L160.371 155.09C162.08 156.331 164.137 157 166.249 157H303Z" fill="#BADC58"/>
                </g>
                <g filter="url(#filter2_d_114:15)">
                <path d="M286.435 251.053C288.672 252.672 291.806 252.177 293.35 249.888C309.123 226.507 317.986 199.149 318.918 170.961C319.009 168.201 316.761 165.962 314 165.962L184.421 165.996C179.574 165.997 177.564 172.203 181.489 175.045L286.435 251.053Z" fill="#F0932B"/>
                </g>
                <defs>
                <filter id="filter0_d_114:15" x="0" y="80.8904" width="287.37" height="254.11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.301961 0 0 0 0 0.294118 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114:15"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114:15" result="shape"/>
                </filter>
                <filter id="filter1_d_114:15" x="34.6606" y="0" width="289.027" height="172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.729412 0 0 0 0 0.862745 0 0 0 0 0.345098 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114:15"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114:15" result="shape"/>
                </filter>
                <filter id="filter2_d_114:15" x="168.413" y="158.962" width="161.508" height="108.039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.576471 0 0 0 0 0.168627 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114:15"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114:15" result="shape"/>
                </filter>
                </defs>
              </svg>
            </div>
          
            <div className={styles.content}>
              <div className={styles.wrapper}>
                <div className={styles.green}></div>
                <div className={styles.field}>40%</div>
                <div className={styles.field}>AirDrop</div>
                <div className={styles.field}>400,000,000</div>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.red}></div>
                <div className={styles.field}>50%</div>
                <div className={styles.field}>Project Development</div>
                <div className={styles.field}>500,000,000</div>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.orange}></div>
                <div className={styles.field}>10%</div>
                <div className={styles.field}>Angel Investors</div>
                <div className={styles.field}>100,000,000</div>
              </div>
            </div>
          </div>
        
          <div className={styles.grid}>
            <div className={styles.card1}>
              <p className={styles.cardUpper}>What will the <big><b>50%</b></big> Project Development Funds be Used for?</p>
            
              <div className={styles.cardGrid}>
                <div className={styles.row}>
                  <h1>50%</h1>
                  <p>Build MemeMarketplace network and allow for team development</p>
                </div>
                <div className={styles.row}>
                  <h1>40%</h1>
                  <p>Incentivize influencers and celebrities to become brand ambassadors</p>
                </div>
                <div className={styles.row}>
                  <h1>10%</h1>
                  <p>Emergency Reserve Fund</p>
                </div>
              </div>
            </div>
          
            <div className={styles.card2}>
              <div className={styles.innerCardOne}>
                <p className={styles.cardUpper}>Utility</p>
                <p className={styles.cardText}>
                <span>MEME</span> will be used to save on marketplace fees and receive discounts
                </p>
              </div>

              <div className={styles.innerCardTwo}>
                <p className={styles.cardUpper}>Discounts</p>
                <div>
                  <p className={styles.cardText}><span>1st</span> Year - 50%</p>
                  <p className={styles.cardText}><span>2nd</span> Year - 25%</p>
                  <p className={styles.cardText}><span>3rd</span> Year - 12.5%</p>
                  <p className={styles.cardText}><span>4th</span> Year - 6.75%</p>
                  <p className={styles.cardText}><span>5th+ Year</span> - No Discount</p>
                </div>
              </div>
            </div>
         
            <div className={styles.card3}>
              <p><span>MEME</span> is deflationary with its scarcity secured by Marketplace Profits</p>
              <p>BURN every <span className={styles.colorGreen}>3 months using 17.77%</span> of MemeMarketplace profits</p>
              <p>Profits will be used to purchase Tokens off the Floor and BURN them sending, them to the Shadow Realm <span className={styles.colorGreen}>NEVER</span> to return.  </p>
              <p>$MEME will continue to be burned in 3 month increments until <span>50%</span> of all Tokens are BURNED </p>
            </div>
          </div>
        </div>
      </div>
    
      <div className={styles.roadmap} id="roadmap">
        <div className={styles.extraWrapper}>
          <h1>Roadmap</h1>

          <div className={styles.roadmapContent}>

            <div className={styles.bigLine}></div>


            <div className={styles.one}>
              <p className={styles.date}>Q4 2021</p>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
              <div className={styles.roadmapText}>
                <span className={styles.innerDate}>Q4 2021</span>
                <p>- Social Media Campaign</p>
                <p>- First Meme Company to Release a Meme Token center stage</p>
                <p>- 40% of MEME Max Supply is Airdropped</p>
                <p>- Focus on Core Team expansion</p>
                <p>- Development of MemeMarketplace Exchange</p>
              </div>
            </div>

            <div className={styles.one}>
              <p className={styles.date}>Q1 2022</p>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
              <div className={styles.roadmapText}>
                <span className={styles.innerDate}>Q1 2022</span>
                <p>- Launch of MemeMarketplace Exchange</p>
                <p>- Start of MEME token BURN using exchange profits as referenced in Tokenomics</p>
                <p>- Partnerships and Collaborations with estabilished NFT projects</p>
              </div>
            </div>

            <div className={styles.one}>
              <p className={styles.date}>Q2 2022</p>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
              <div className={styles.roadmapText}>
                <span className={styles.innerDate}>Q2 2022</span>
                <p>- Secure partnerships with top influencers we invite to join our network</p>
                <p>- Launch of Limited Run exclusive NFT collections</p>
              </div>
            </div>

            <div className={styles.one}>
              <p className={styles.date}>Q3 2022</p>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
              <div className={styles.roadmapText}>
                <span className={styles.innerDate}>Q3 2022</span>
                <p>- Additional benefits and privileges awarded to MEME token holders</p>
                <p>- Strategic partnerships secured with NFT projects provide for additional utility for MEME</p>
                <p>- Establish the MemePool (not the mempool lol)</p>
                <ul style={{marginTop: "3px"}}><li>Will be used to invest in early development NFT related projects</li></ul>
              </div>
            </div>

            <div className={styles.one}>
              <p className={styles.date + " " + styles.beyond}>Q4 2022<span>and Beyond!</span></p>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
              <div className={styles.roadmapText}>
                <span className={styles.innerDate}>Q4 2022 and Beyond!</span>
                <p>- Creation of the MemeDAO</p>
                <p>- Continued community development and team expansion</p>
                <p>Ongoing addition of exchange features and upgrades</p>
                <p>MEME token BURN continues until 50% of token Max Supply Remains</p>
                <p><b>- WAGMI Frens!</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Footer/>
    </div>
  )
}
