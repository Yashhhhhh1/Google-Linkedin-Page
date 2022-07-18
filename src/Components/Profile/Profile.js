import React from 'react';
import style from "./Profile.module.css";
import backgroundImage from "../../Assets/Background-image.jpg";
import profilePic from "../../Assets/Profile.png";
import { useNavigate } from 'react-router-dom';


function Profile() {

    const navigate = useNavigate();
    const activeTab = (e) => {
        Array(e.target.parentElement.childNodes)[0].forEach( (item) => {
            item.className = "";
        })
        e.target.className = style.active;
        if(e.target.id === "home"){
            navigate(`/`);
        }else{
            navigate(`/${e.target.id}`);
        }
    }

    return (
        <div id={style.profileContainer}>
            <div>
                <img src={backgroundImage} alt='background-img' id={style.backgroundImg} />
                <img src={profilePic} id={style.profilePhoto} alt='profile-pic' />
            </div>
            <div id={style.userDetails}>
                <h1>Google</h1>
                <p>Our mission is to organize the world's information and make it universally accessible and useful.</p>
                <p>Technology, Information and Internet Mountain View, CA 25,450,328 followers</p>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/search/results/people/?currentCompany=%5B%221441%22%2C%2216140%22%2C%2217876832%22%2C%2210440912%22%2C%22791962%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH&sid=3T0'>See all 293,339 employees on LinkedIn</a>
                <div id={style.connectOptions}>
                    <button id={style.followBtn}><i className="fa-solid fa-plus"></i> Follow</button>
                    <button id={style.websiteLink}><a target="_blank" rel="noreferrer" href='https://careers.google.com/'>Visit website<i className="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                    <button id={style.moreBtn}>More</button>
                </div>
            </div>
            <ul id={style.links}>
                <li id='home' onClick={(e) => activeTab(e)} className={style.active}>Home</li>
                <li id='about' onClick={(e) => activeTab(e)}>About</li>
                <li id='posts' onClick={(e) => activeTab(e)}>Posts</li>
                <li id='jobs' onClick={(e) => activeTab(e)}>Jobs</li>
                <li id='life' onClick={(e) => activeTab(e)}>Life</li>
                <li id='people' onClick={(e) => activeTab(e)}>People</li>
                <li id='videos' onClick={(e) => activeTab(e)}>Videos</li>
            </ul>
        </div>
    )
}

export default Profile;