import React from "react";
import styles from "../styles/footer.module.css"
import IconFacebook from "@/images/IconSocialMedia/iconFacebook";
import IconX from "@/images/IconSocialMedia/iconX";
import IconTikTok from "@/images/IconSocialMedia/iconTikTok";
import IconInstagram from "@/images/IconSocialMedia/iconInstagram";
import PaysMedias from "@/images/PaysMedias/PaysMedias";

const Footer = () => {
    return(
        <>
            <footer className={styles.backgroundImage}>
                <form action="" className={styles.FormSubscribe}>
                    <h4>Subscribe</h4>
                    <p>Do you want to recive offers and news in your email?</p>
                    <div className={styles.SearchSubscribe}>
                        <input type="email" placeholder="Your email" />
                        <button>Subscribe</button>
                    </div>
                    <div className={styles.InputCheckbox}>
                        <input type="checkbox" /> 
                        <p>I have read and accept the Legal Notice and Privacy Policy</p>
                    </div>
                </form>
                <section className={styles.LinksFooter}>
                    <div className={styles.SubLinks}>
                        <h3> About us </h3>
                        <a href="">About D-techStore</a>
                        <a href="">Help us improve</a>
                        <a href="">Afiliate Program</a>
                    </div>
                    <div className={styles.SubLinks}>
                        <h3> It may interested you </h3>
                        <a href="">Downloads</a>
                        <a href="">Offers</a>
                        <a href="">Begginer's guide</a>
                        <a href="">Videos</a>
                    </div>
                    <div className={styles.SubLinks}>
                        <h3> Purchase Assistence </h3>
                        <a href="">Shipping costs</a>
                        <a href="">Returns & Warranties</a>
                        <a href="">Payment Sistem</a>
                        <a href="">Gift with every purchase</a>
                    </div>
                    <div className={styles.SubLinks}>
                        <h3> Contact </h3>
                        <a href="">Support</a>
                        <a href="">Phone</a>
                        <a href="">Email</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </section>
                <figure className={styles.Figure}>
                    <div className={styles.Pays}>
                        <PaysMedias/>
                    </div>
                    <div className={styles.SocialMedias} >
                        <IconX/>
                        <IconInstagram/>
                        <IconFacebook/>
                        <IconTikTok/>
                    </div>
                </figure>
                <aside className={styles.Important} >
                    <p> 2024 - D techStore - Developed by Start4 - Legal Notice - Privacy Policy </p>
                </aside>
            </footer>
        </>
    )
};

export default Footer; 