import React, { Component, Suspense, useEffect, useLayoutEffect, useState } from 'react'
import './css/Index.css'
import { AiFillFolderOpen } from 'react-icons/ai'
import { HiLogin, HiLogout } from 'react-icons/hi'
import { BsSunFill } from "react-icons/bs";

const MenuIndex = React.lazy(()=> import('./menu-component/MenuIndex'));

function Index() {

  

  const [closeSideBarStatus, setCloseSideBarStatus] = useState(false)
  const [pageCursor, setPageCursor] = useState(0)
  const [posScroll, setPosScroll] = useState(0)

  //document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
  useLayoutEffect(() => {
    function updatePosition() {
      if (window.pageYOffset < 60) {
        document.documentElement.style.setProperty('--headerColor', '#242424');
        document.documentElement.style.setProperty('--headerBgColor', '#f5f5f5');
      }
      if (window.pageYOffset > 60) {
        document.documentElement.style.setProperty('--headerColor', '#f5f5f5');
        document.documentElement.style.setProperty('--headerBgColor', '#242424');
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
  }, [])
  

  const closeSideBar = () => {
    if (closeSideBarStatus) {
      document.getElementById('sidebar-index').style.display = 'block'
      document.getElementById('sidebar-hide').style.display = 'none'
      setCloseSideBarStatus(!closeSideBarStatus)
    }else {
      document.getElementById('sidebar-index').style.display = 'none'
      document.getElementById('sidebar-hide').style.display = 'flex'
      setCloseSideBarStatus(!closeSideBarStatus)
    }
  }

  return (
    <div className='Index'>
        <div className="index-header" id='index-header'>
          <div className="header-logo"><h1>ThaiWBI</h1></div>
          <div className="header-content">
            <ul>
              <li><div className=""><BsSunFill /></div></li>
              
            </ul>
            <button id='login'>Sign In</button>
            <button id='register'>Sign Up</button>
          </div>
        </div>
        <div className="index-ads">Ads (Height: 100px)</div>
        <div className="index-body">
          <div className="sidebar-hide" id='sidebar-hide'>
              <button onClick={closeSideBar}><HiLogout /></button>
          </div>
          <div className="sidebar-index" id='sidebar-index'>
            <div className='sidebar-active' id='sidebar-active'>
              <div className="btn-close-sidebar"><button onClick={closeSideBar}><HiLogin /></button></div>
              <p><strong>Web Based Instruction</strong></p>
              <div className='hr-index'><hr /></div>
              <div className="sidebar-items-container">
                <div className="items-sidebar"><AiFillFolderOpen /> การพัฒนาสื่อมัลติมีเดียโดยโปรแกรม Scratch</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การเข้ารหัสและถอดรหัส QR Code</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การสร้าง Digital Content อย่างง่ายโดยโปรแกรม VoiceThread</div>
                <div className="items-sidebar"><AiFillFolderOpen /> เทคโนโลยีสารสนเทศและการสื่อสาร</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Web Site Design</div>
                <div className="items-sidebar"><AiFillFolderOpen /> คอมพิวเตอร์เบื้องต้น</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การสื่อสารข้อมูลเบื้องต้น</div>
                <div className="items-sidebar"><AiFillFolderOpen /> อินเทอร์เนตเบื้องต้น</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การใช้บริการ WWW</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การพัฒนา Homepage โดยภาษา HTML</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การพัฒนา Homepage โดย Netscape composer</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การใช้ Ws Ftp Up-Load ข้อมูล</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การใช้ Eudora รับส่ง E-mail</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Telnet และ Unix เบื้องต้น</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Unix เบื้องต้น</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การติดตั้ง Linux เป็น Internet Server</div>
                <div className="items-sidebar"><AiFillFolderOpen /> ฐานข้อมูล MySQL Unix</div>
                <div className="items-sidebar"><AiFillFolderOpen /> PHP Programing</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Perl Programing</div>
                <div className="items-sidebar"><AiFillFolderOpen /> ASP Programing</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การประมวลผลข้อมูล สถิติโดย Spss for Windows</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การพัฒนาบทเรียน คอมพิวเตอร์ช่วยสอน โดย Authorware</div>
                <div className="items-sidebar"><AiFillFolderOpen /> FrontPage2000</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Dreamweaver MX</div>
                <div className="items-sidebar"><AiFillFolderOpen /> PHP & MySQL Database On Web</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Dreamweaver 4 Multimedia Version</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Dreamweaver 4</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การพัฒนาฐานข้อมูล โดย MS Access</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การใช้ E-mail hotmail</div>
                <div className="items-sidebar"><AiFillFolderOpen /> การเชื่อมต่ออินเทอร์เนต</div>
                <div className="items-sidebar"><AiFillFolderOpen /> Web Conferencing</div>
              </div>
              <p><strong>Pre-Entrance</strong></p>
              <div className='hr-index'><hr /></div>
              <div className="sidebar-items-container">
                <div className="items-sidebar"><AiFillFolderOpen /> ชีววิทยา</div>
                <div className="items-sidebar"><AiFillFolderOpen /> ภาษาอังกฤษ</div>
                <div className="items-sidebar"><AiFillFolderOpen /> ภาษาอังกฤษ</div>
                <div className="items-sidebar"><AiFillFolderOpen /> ภาษาไทย</div>
              </div>
            </div>
          </div>
          <div className="content-index">
            <div className="container-content-index">
              <Suspense fallback={'Diw'}>
                {
                  (pageCursor == 0) ? (<MenuIndex />) : ""
                }
              </Suspense>
            </div>
          </div>
        </div>
        <div className="index-footer">
          <div className="footer-search">
            <a href="http://www.google.com/">
              <img src="http://www.google.com/logos/Logo_40wht.gif" alt="logo_google" />
            </a>
            <div className="box-search">
                <form action="http://www.google.com/search" method="get">
                  <div className="box-search-top">
                    <input type="text" placeholder='Search*' value/>
                    <input type="submit" value="Google Search" />
                  </div>
                  <div className="box-search-bottom">
                    <input type="radio" name="sitesearch" value/>
                    <label htmlFor='sitesearch'>&nbsp;Google</label>
                    <label>&nbsp;&nbsp;</label>
                    <input type="radio" name="sitesearch" value="http://www.thaiwbi.com/" checked/>
                    <label htmlFor='sitesearch'>&nbsp;ThaiWBI</label>
                  </div>
                </form>
            </div>
          </div>
          <div className="footer-copyright">
            <p>สงวนลิขสิทธิ์ 2550 โดย <a href="#">ผู้ช่วยศาสตราจารย์ ดร.ภาสกร เรืองรอง</a> (ThaiWBI.com)</p>
            <p>Copyright (C) 2007, Asst.Prof.Dr.Passkorn Roungrong (ThaiWBI.com) . All rights reserved.</p>
          </div>
        </div>
        
    </div>
  )
}

export default Index