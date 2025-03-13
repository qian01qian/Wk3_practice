import Logo from "../res/Full_Logo.jpeg"   // 請確認路徑正確
import MenuIcon from "../res/選單.svg";        // 請確認路徑正確
import React, { useState } from 'react';
import '../header.css'
function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // 定義 menuOpen

    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
    };
  

    return (
        <header className="header">        
            {/* 背景區塊 */}
            <div className="background"></div>

            <div className="header_index">
                {/* Logo 區塊 */}
                <div className="header_logo">
                    <a href="index.html" className="jr_homepage">
                        <img src={Logo} alt="晢瑞實業有限公司Logo" className="logo" />
                    </a>
                </div>

                {/* 桌機版導覽列 */}
                <div className="index">
                    <div className="dropdown">
                        <h4 className="trigger header_about_us" alt="認識晢瑞">
                            認識晢瑞
                        </h4>
                        <div className="dropdown-menu">
                            <a href="about_us.html">公司簡介</a>
                            <a href="promise.html">經營理念</a>
                            <a href="org.html">組織圖</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <h4 className="trigger header_product" alt="產品＆專業">
                            產品＆專業
                        </h4>
                        <div className="dropdown-menu">
                            <a href="product.html">生產產品系列</a>
                            <a href="sop.html">生產流程</a>
                            <a href="security.html">產品保全及保險</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <h4 className="trigger header_envionment" alt="廠區環境及設備">
                            廠區環境及設備
                        </h4>
                        <div className="dropdown-menu">
                            <a href="env.html#environment">廠區環境</a>
                            <a href="equiment.html">生產設備</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <h4 className="trigger header_contact" alt="聯絡我們">
                            聯絡我們
                        </h4>
                        <div className="dropdown-menu">
                            <a href="contact.html#method">聯絡方式</a>
                        </div>
                    </div>
                </div>

                {/* 手機版隱藏的 checkbox 控制選單（保留結構） */}
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                {/* 漢堡按鈕 */}
                <label
                    htmlFor="menu-toggle"
                    className="hamburger-label"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img src={MenuIcon} alt="選單圖示" />
                </label>

                {/* 手機版選單內容 */}
                {menuOpen && (
                    <div className="hamburger_menu">
                        <div className="hamburger_menu_content">
                            <input type="checkbox" id="collapse-about" className="collapse-toggle" />
                            <label htmlFor="collapse-about" className="collapse-label">
                                認識晢瑞
                            </label>
                            <ul className="hamburger_small collapse-content">
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="about_us.html" onClick={() => setMenuOpen(false)}>
                                            公司簡介
                                        </a>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="promise.html" onClick={() => setMenuOpen(false)}>
                                            經營理念
                                        </a>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="org.html" onClick={() => setMenuOpen(false)}>
                                            組織圖
                                        </a>
                                    </label>
                                </li>
                            </ul>

                            <input type="checkbox" id="collapse-product" className="collapse-toggle" />
                            <label htmlFor="collapse-product" className="collapse-label">
                                產品＆專業
                            </label>
                            <ul className="hamburger_small collapse-content">
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="product.html" onClick={() => setMenuOpen(false)}>
                                            生產產品系列
                                        </a>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="sop.html" onClick={() => setMenuOpen(false)}>
                                            生產流程
                                        </a>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="security.html" onClick={() => setMenuOpen(false)}>
                                            工廠保全及保險
                                        </a>
                                    </label>
                                </li>
                            </ul>

                            <input type="checkbox" id="collapse-environment" className="collapse-toggle" />
                            <label htmlFor="collapse-environment" className="collapse-label">
                                廠區環境及設備
                            </label>
                            <ul className="hamburger_small collapse-content">
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="env.html#environment" onClick={() => setMenuOpen(false)}>
                                            廠區環境
                                        </a>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="equiment.html" onClick={() => setMenuOpen(false)}>
                                            生產設備
                                        </a>
                                    </label>
                                </li>
                            </ul>

                            <input type="checkbox" id="collapse-contact" className="collapse-toggle" />
                            <label htmlFor="collapse-contact" className="collapse-label">
                                聯絡我們
                            </label>
                            <ul className="hamburger_small collapse-content">
                                <li>
                                    <label htmlFor="menu-toggle">
                                        <a href="contact.html#method" onClick={() => setMenuOpen(false)}>
                                            聯絡方式
                                        </a>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                <label htmlFor="menu-toggle" className="menu-overlay"></label>
            </div>
        </header>
    )
}
export default Header; 