import Headphone from "../res/Homepage/headphone.jpg";
import Dip from "../res/Homepage/dip.jpg";
import Cctv from "../res/Homepage/cctv.jpg";
import MonitorImg from "../res/Homepage/monitor.jpg";
import Wifi from "../res/Homepage/wifi.jpg";
import Bowl from "../res/Homepage/bowl.jpg";
import Hdd from "../res/Homepage/hdd.jpg";
import Warning from "../res/Homepage/warning.jpg";
import '../index.css'
import '../homepage.css'
function Category (){
    return(
        <section className="category-section">
        <h2 className="category-title">代工類別</h2>
        <p className="category-subtitle">
          我們專注於提供<br />
          電子產品插件（DIP）、組裝、測試、維修及各式產品包裝等<br />
          代工服務
        </p>
        <p className="category-subtitle_mobile">
          我們專注於提供電子產品<br />
          插件（DIP）、組裝、測試、維修<br />
          及各式產品包裝等代工服務
        </p>
        {/* 卡片容器 */}
        <div className="category-container">
          <div className="category-card">
            <img
              src={Headphone}
              alt="頭戴式耳機"
              className="category-image"
            />
            <div className="category-info">
              <h3>頭戴式耳機</h3>
              <p>高品質耳機組包裝代工及測試</p>
            </div>
          </div>
          <div className="category-card">
            <img src={Dip} alt="DIP" className="category-image" />
            <div className="category-info">
              <h3>DIP</h3>
              <p>專業DIP插件</p>
            </div>
          </div>
          <div className="category-card">
            <img src={Cctv} alt="監視器" className="category-image" />
            <div className="category-info">
              <h3>監視器</h3>
              <p>各類監視器設備</p>
            </div>
          </div>
          <div className="category-card">
            <img src={MonitorImg} alt="觸控螢幕" className="category-image" />
            <div className="category-info">
              <h3>觸控螢幕</h3>
              <p>觸控螢幕組包測</p>
            </div>
          </div>
          <div className="category-card">
            <img src={Wifi} alt="網通消費性產品" className="category-image" />
            <div className="category-info">
              <h3>網通消費性產品</h3>
              <p>路由器、交換機等產品代工</p>
            </div>
          </div>
          <div className="category-card">
            <img src={Bowl} alt="生活用品包裝" className="category-image" />
            <div className="category-info">
              <h3>生活用品包裝</h3>
              <p>碗筷包裝、各類生活用品組包裝</p>
            </div>
          </div>
          <div className="category-card">
            <img src={Hdd} alt="HDD抽取盒" className="category-image" />
            <div className="category-info">
              <h3>HDD抽取盒</h3>
              <p>硬碟抽取盒精密代工</p>
            </div>
          </div>
          <div className="category-card">
            <img src={Warning} alt="道路警示器" className="category-image" />
            <div className="category-info">
              <h3>道路警示器</h3>
              <p>各式道路警示器</p>
            </div>
          </div>
        </div>
        {/* 手機、平板版輪播 */}
        <div className="carousel-container">
          <div className="carousel-inner">
            <div className="carousel-slide">
              <img
                src={Headphone}
                alt="頭戴式耳機"
                className="category-image"
              />
              <div className="slide-info">
                <h3>頭戴式耳機</h3>
                <p>高品質耳機組包裝代工及測試</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={Dip} alt="DIP" className="category-image" />
              <div className="slide-info">
                <h3>DIP</h3>
                <p>專業DIP插件</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={Cctv} alt="監視器" className="category-image" />
              <div className="slide-info">
                <h3>監視器</h3>
                <p>各類監視器設備</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={MonitorImg} alt="觸控螢幕" className="category-image" />
              <div className="slide-info">
                <h3>觸控螢幕</h3>
                <p>觸控螢幕組包測</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={Wifi} alt="網通消費性產品" className="category-image" />
              <div className="slide-info">
                <h3>網通消費性產品</h3>
                <p>路由器、交換機等產品代工</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={Bowl} alt="生活用品包裝" className="category-image" />
              <div className="slide-info">
                <h3>生活用品包裝</h3>
                <p>碗筷包裝、各類生活用品組包裝</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={Hdd} alt="HDD抽取盒" className="category-image" />
              <div className="slide-info">
                <h3>HDD抽取盒</h3>
                <p>硬碟抽取盒精密代工</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={Warning} alt="道路警示器" className="category-image" />
              <div className="slide-info">
                <h3>道路警示器</h3>
                <p>各式道路警示器</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img
                src={Headphone}
                alt="頭戴式耳機"
                className="category-image"
              />
              <div className="slide-info">
                <h3>頭戴式耳機</h3>
                <p>高品質耳機組包裝代工及測試</p>
              </div>
            </div>
          </div>
          <button className="carousel-button prev">&#10094;</button>
          <button className="carousel-button next">&#10095;</button>
        </div>
      </section>

    )
}
export default Category;