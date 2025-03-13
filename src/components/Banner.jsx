import HomepageImage from "../res/homepage.jpg"; // 首頁背景圖片
import '../banner.css'
import '../index.css'
function Banner() {
    return (
        <div className="banner">
            <div className="banner_contents">
                <h1 className="banner_contents_h1">晢瑞實業有限公司</h1>
                <p className="banner_p">
                    ISO 9001認證<br />
                    專業DIP插件、組裝測試包裝廠<br />
                    維修、手焊加工
                </p>
                <a href="contact.html" className="contact-button">
                    聯絡我們
                </a>
            </div>
            <div className="banner_overlay"></div>
            <img
                src={HomepageImage}
                alt="晢瑞實業有限公司"
                className="banner_homepage_image"
            />
        </div >
    )
}
export default Banner;