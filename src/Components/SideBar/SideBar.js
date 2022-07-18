import React from 'react';
import ChromeImg from "../../Assets/Chrome.jpg";
import style from "./SideBar.module.css";
import AmazonImg from "../../Assets/Amazon.jpg"
import AppleImg from "../../Assets/Apple.jpg"
import MicrosoftImg from "../../Assets/Microsoft.jpg"
import GoogleAnalyticsImg from "../../Assets/Google Analytics.jpg"
import GoogleNewsImg from "../../Assets/Google News.jpg"


function SideBar() {
    return (
        <div id={style.sideBarContainer}>
            <div id={style.affiliatedPagesContainer}>
                <h2>Affiliated pages</h2>
                <div id={style.pageContainer}>
                    <div className={style.pages}>
                        <span>
                            <img src={ChromeImg} alt='Chrome-img' />
                            <span>
                                <h2>Chrome Enterprise</h2>
                                <p>Information Technology and Services</p>
                                <p>Showcase page</p>
                                <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                            </span>
                        </span>
                    </div>
                    <div className={style.pages}>
                        <span>
                            <img src={GoogleAnalyticsImg} alt='google-analytics-img' />
                            <span>
                                <h2>Google Analytics</h2>
                                <p>Internet</p>
                                <p>Showcase page</p>
                                <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                            </span>
                        </span>
                    </div>
                    <div className={style.pages}>
                        <span>
                            <img src={GoogleNewsImg} alt='google-news-img' />
                            <span>
                                <h2>Google News Initiative</h2>
                                <p>Online Media</p>
                                <p>Showcase page</p>
                                <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                            </span>
                        </span>
                    </div>
                    <button id={style.allBtn}>See all affiliated pages</button>
                </div>
            </div>

            <div id={style.viewedPagesContainer}>
                <h2>Pages people also viewed</h2>
                <div id={style.pageContainer}>
                    <div className={style.pages}>
                        <span>
                            <img src={AmazonImg} alt='amazon-img' />
                            <span>
                                <h2>Amazon</h2>
                                <p>Internet</p>
                                <p>26,603,663 followers</p>
                                <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                            </span>
                        </span>
                    </div>
                    <div className={style.pages}>
                        <span>
                            <img src={MicrosoftImg} alt='microsoft-img' />
                            <span>
                                <h2>Microsoft</h2>
                                <p>Computer Software</p>
                                <p>17,318,035 followers</p>
                                <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                            </span>
                        </span>
                    </div>
                    <div className={style.pages}>
                        <span>
                            <img src={AppleImg} alt='apple-img' />
                            <span>
                                <h2>Apple</h2>
                                <p>Consumer Electronics</p>
                                <p>16,789,410 followers</p>
                                <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                            </span>
                        </span>
                    </div>
                    <button id={style.allBtn}>See all similar pages</button>
                </div>
            </div>

        </div>
    )
}

export default SideBar;