import '../footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer_left">
                <h1>晢瑞實業有限公司</h1>
                <h4>地址 : 桃園市平鎮區天津街203巷20號</h4>
                <h4>電話 : 03-403-0015</h4>
                <h4>電子郵件 : jherueijr@gmail.com</h4>
            </div>
            <hr className="line" />
            <div className="footer_right">
                <div className="section1">
                    <div className="sec1_title">
                        <h4>關於晢瑞</h4>
                    </div>
                    <div className="sec1_content">
                        <a href="about_us.html">公司簡介</a>
                        <a href="promise.html">經營理念</a>
                        <a href="org.html">組織圖</a>
                    </div>
                </div>
                <div className="section2">
                    <div className="sec2_title">
                        <h4>產品 & 專業</h4>
                    </div>
                    <div className="sec2_content">
                        <a href="product.html">生產產品系列</a>
                        <a href="sop.html">生產流程</a>
                        <a href="security.html">產品保全及保險</a>
                    </div>
                </div>
                <div className="section3">
                    <div className="sec3_title">
                        <h4>廠區環境及設備</h4>
                    </div>
                    <div className="sec3_content">
                        <a href="env.html">廠區環境</a>
                        <a href="equiment.html">生產設備</a>
                    </div>
                </div>
                <div className="section4">
                    <div className="sec4_title">
                        <h4>聯絡我們</h4>
                    </div>
                    <div className="sec4_content">
                        <a href="contact.html">聯絡方式</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;