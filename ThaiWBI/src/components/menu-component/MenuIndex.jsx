import React, { useEffect, useState } from 'react'
import './css/MenuIndex.css'
import { AiFillFolderOpen } from 'react-icons/ai'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FcSearch } from "react-icons/fc";
import { FaAngleRight, FaBook, FaUser, FaUsers } from "react-icons/fa";

function MenuIndex() {

    const [photo, setPhoto] = useState(0)

    useEffect(() => {
        const img1 = document.getElementById('template-img-1')
        const img2 = document.getElementById('template-img-2')
        if (photo == 0) {
            img1.style.display = 'none'
            img2.style.display = 'none'
        }
        if (photo == 1) {
            img1.style.display = 'block'
            img2.style.display = 'none'
        }
        if (photo == 2) {
            img1.style.display = 'none'
            img2.style.display = 'block'
        }
    }, [photo])

    const closePhoto = () => {
        setPhoto(0)
    }

  return (
    <div className='MenuIndex'>
        <div className="template-img-1" id='template-img-1'>
            <button onClick={closePhoto}><IoIosCloseCircleOutline /></button>
            <img src="/src/assets/TabletBasedLearning1.jpg" alt="tbl" />
        </div>
        <div className="template-img-2" id='template-img-2'>
            <button onClick={closePhoto}><IoIosCloseCircleOutline /></button>
            <img src="/src/assets/TabletBasedLearning1.jpg" alt="tbl" />
        </div>
        <section>
            <h3><FcSearch/> Webmaster</h3>
            <p>&nbsp;&nbsp;&nbsp; ThaiWBI มุ่งพัฒนาระบบการเรียน การสอน การฝึกอบรม ในรูปแบบ
                E-Learning โดยใช้ Web based instruction เป็นเครื่องมือ (Tool) หรือเรียกกันว่า WBI 
                ซึ่งเป็นการจำลองสถานการณ์การเรียนการสอนในห้องเรียน เป็นลักษณะ Virtual Classroom 
                กลุ่มเป้าหมายของ ThaiWBI คือ นิสิต/นักศึกษาที่กำลังศึกษาในสถาบัน เพื่อการเรียนการสอน 
                ผู้ที่เริ่มต้นศึกษา Internet และ ผู้ที่ต้องการหาความรู้เพิ่มเติมทั่วไป ก่อนที่จะศึกษาบทเรียนใน 
                Web site แห่งนี้จำเป็นต้องทำตาม <a href='#'>ข้อตกลงดังต่อไปนี้ </a><AiFillFolderOpen />
            </p>
            <div className="MenuIndex-hr"><hr /></div>
        </section>
        <section>
            <h3><FcSearch/> แนะนำหนังสือและ Fanpage</h3>
            <p>&nbsp;&nbsp;&nbsp; <AiFillFolderOpen /> <b>FanPage</b> <a href='#'>สำหรับ การพัฒบทเรียนบนคอมพิวเตอร์แบบพกพา หรือการพัฒนาบทเรียนบนแท็บเล็ต หรือการพัฒนาบทเรียนบน Tablet PC </a></p>
            <p>
                &nbsp;&nbsp;&nbsp; <AiFillFolderOpen /> 
                <b>หนังสือ</b>
                &nbsp;การพัฒนาบทเรียนบน Tablet PC เป็นคู่มือ เอกสารอ้างอิงด้านงานวิจัยและด้านการศึกษา มีจำหน่ายที่ 
                <a href='https://se-ed.com/s/cbgX'> ร้านหนังสือซีเอ็ด</a>
                &nbsp;และ&nbsp;
                <a href='http://www.chulabook.com/description.asp?barcode=9786163358264'> ศูนย์หนังสือจุฬาฯ</a>
                &nbsp;ทั่วประเทศ
                <div className="fanPage-img">
                    <img src="/src/assets/TabletBasedLearning1.jpg" alt="tbl" onClick={()=>setPhoto(1)}/>
                    <img src="/src/assets/TabletBasedLearning2.jpg" alt="tbl" onClick={()=>setPhoto(2)}/>
                </div>
                <p className='fanpage-about-img'><i>@คลิกเพื่อขยายดูภาพจริง</i></p>
            </p>
            <div className="MenuIndex-hr"><hr /></div>
        </section>
        <section>
            <h3><FcSearch/> ระบบฐานข้อมูล</h3>
            <p>&nbsp;&nbsp;&nbsp; ระบบฐานข้อมูลผู้เรียนที่เข้ามาทำการศึกษาใน Thaiwbi.com</p>
            <div className="search-user-index">
                <form action="http://www.thaiwbi.com/test/search.php" method="get" target='_blank'>
                    <p><FaUser /> ค้นหา ชื่อผู้เรียนหรือรหัส &nbsp;
                        <select name="list" id="list">
                            <option value="name">ผู้เรียน</option>
                            <option value="id">รหัส</option>
                        </select>
                        <input type="text" placeholder='พิมพ์ชื่อหรือรหัสผู้เรียน' name='search'/>
                        <input type="submit" value="ค้นหา" name='Submit' />
                    </p>
                </form>
            </div>
            <div className="search-user-index">
                <form action="http://www.thaiwbi.com/test/search_by_wbi.php" method="get">
                    <p><FaBook /> ค้นหาจากหลักสูตร &nbsp;
                        <select name="codewbi" id="list">
                            <option value="">เลือกหลักสูตร/บทเรียน</option>
                            <option value="A001">เทคโนโลยีสารสนเทศและการสื่อสาร</option>
                            <option value="A002">Web Site Design</option>
                            <option value="A003">คอมพิวเตอร์เบื้องต้น</option>
                            <option value="A004">การสื่อสารข้อมูลเบื้องต้น</option>
                            <option value="A005">อินเทอร์เนตเบื้องต้น </option>
                            <option value="A006">การใช้บริการ WWW</option>
                            <option value="A007">การพัฒนา Homepage โดยภาษา HTML</option>
                            <option value="A008">การพัฒนา Homepage โดย Net composer</option>
                            <option value="A009">การใช้ Ws Ftp Up-Load ข้อมูล</option>
                            <option value="A010">การใช้ Eudora รับส่ง E-mail </option>
                            <option value="A011">Telnet และ Unix เบื้องต้น </option>
                            <option value="A012">Unix เบื้องต้น </option>
                            <option value="A013">การติดตั้ง Linux เป็น Internet Server</option>
                            <option value="A014">ฐานข้อมูล MySQL Unix </option>
                            <option value="A015">PHP Programming</option>
                            <option value="A016">Perl Programming</option>
                            <option value="A017">ASP Programming</option>
                            <option value="A018">การประมวลผลข้อมูลสถิติโดย Spss </option>
                            <option value="A019">การพัฒนาคอมพิวเตอร์ช่วยสอนโดย Authorware </option>
                            <option value="A020">FrontPage2000</option>
                            <option value="A028">Macromedia Dreamweaver MX</option>
                            <option value="A021">Dreamweaver 4 Multimedia Version</option>
                            <option value="A022">Dreamweaver 4</option>
                            <option value="A023">การพัฒนาฐานข้อมูล โดย MS Access</option>
                            <option value="A024">การใช้ E-mail hotmail </option>
                            <option value="A025">การเชื่อมต่ออินเทอร์เนต</option>
                            <option value="A026">Web Conferencing </option>
                            <option value="A027">PHP&amp;MySQL Database On Web </option>
                        </select>
                        <input type="submit" value="ค้นหา" />
                    </p>
                </form>
            </div>
            <div className="search-user-index">
                <form action="http://www.thaiwbi.com/test/search_by_wbi.php" method="get" target='_blank'>
                    <p><FaUsers /> ค้นหาผู้เรียนทั้งหมด &nbsp;
                        <input type="submit" value="ค้นหา" />
                    </p>
                </form>
            </div>
            <div className="MenuIndex-hr"><hr /></div>
        </section>
        <section>
            <h3><FcSearch/> การสร้างแบบทดสอบ</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; ส่วนนี้ จัดทำเพื่อสนับสนุนท่านที่สนใจสร้างแบบทดสอบ เพื่อประกอบการจัดทำ Web-Based Instruction โดยไม่จำเป็นต้องมีความรู้ใดๆเกี่ยวกับ Programing ทั้งสิ้น ...</p>
            <ul>
                <li><a href="#">การสร้างแบบทดสอบโดย Dreamweaver Course Builder</a><label> สำหรับผู้ที่ไม่มีความรู้ภาษา HTML และการเขียน CGI</label></li>
                <li><a href="#">การสร้างแบบทดสอบ โดยภาษา ASP 1</a><label> สำหรับมือใหม่หัดเขียน CGI</label></li>
                <li><a href="#">การสร้างแบบทดสอบ โดยภาษา ASP 2</a><label> เป็นแบบทดสอบที่สามารถเก็บคะแนนลง ฐานข้อมูล Access</label></li>
                <li><a href="#">การสร้างแบบทดสอบ โดยภาษา ASP 3</a><label> เป็นแบบ Form ทดสอบที่แตกต่าง และสามารถเก็บคะแนนลงฐานข้อมูล Access ได้ด้วย</label></li>
                <li><a href="#">การสร้างแบบทดสอบ โดยภาษา PHP 1</a><label> สามารถตรวจคำตอบถูกผิดได้ สำหรับมือใหม่</label></li>
                <li><a href="#">การสร้างแบบทดสอบ โดยภาษา PHP 2</a><label> สามารถแสดงวันเวลา คำนวนคะแนน ได้</label></li>
                <li><a href="#">การสร้างแบบทดสอบ โดยภาษา PHP 3</a><label> สามารถเก็บข้อมูลลงฐานข้อมูล Mysql ได้</label></li>
            </ul>
            <div className="MenuIndex-hr"><hr /></div>
        </section>
        <section>
            <h3><FcSearch/> บทความทางการศึกษา</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; ส่วนนี้ จัดทำเพื่อเผยแพร่ข้อมูลทางการศึกษา ...</p>
            <ul>
                <li><a href="#">การประยุกต์ใช้บทเรียนบนเครือข่ายกับการเรียนรู้แบบสืบเสาะหาความรู้ (Inquiry Learning)</a></li>
                <li><a href="#">การประยุกต์ใช้บทเรียนบนเครือข่ายกับขั้นตอนการสอน 9 ขั้นของกาเย่</a></li>
                <li><a href="#">การประยุกต์ใช้บทเรียนบนเครือข่ายกับการเรียนรู้แบบร่วมมือเทคนิค STAD</a></li>
                <li><a href="#">Web-Based Instruction Strategy:</a><label> Course Relation การสร้างความสัมพันธ์เนื้อหา โดยการนำความรู้จากแหล่ง URL อื่นมาเป็นส่วนหนึ่งของ Web-Based Instrction</label></li>
                <li><a href="#">Web-Based Instruction Strategy:</a><label> Activity Model เคล็ดไม่ลับในการดำเนินการจัดกิจกรรมบน WBI</label></li>
                <li><a href="#">Commerce <FaAngleRight/> E-Education <FaAngleRight/> E-Learning <FaAngleRight/> Tool <FaAngleRight/> WBI <FaAngleRight/> Virtual Classroom</a><label> (PowerPoint Version)</label></li>
                <li><a href="#">E-Commerce</a><label> การค้าอิเลคโทรนิค</label></li>
                <li><a href="#">E-Education</a><label> (การศึกษาอิเลคโทรนิค)</label></li>
                <li><a href="#">Internet For School</a><label> ระบบอินเทอร์เนตสำหรับโรงเรียน ข้อมูลสำหรับโรงเรียนที่มีแนวความคิดจะติดตั้งระบบอินเทอร์เน็ต</label></li>
                <li><a href="#">WBI กับการสื่อสาร</a><label> มิติใหม่ของการเรียนการสอน โดยใช้การสื่อสารบนอินเทอร์เน็ต</label></li>
                <li><a href="#">e-Education & e-Commerec</a><label> ความเหมือนที่แตกต่าง...</label></li>
                <li><a href="#">WBI (Web-Based Instruction)</a><label> เป็นอย่างไร...</label></li>
                <li><a href="#">พระราชบัญญัติการศึกษาแห่งชาติ 1</a><label> หมวดที่ 9 เทคโนโลยีเพื่อการศึกษา แนวทางและความเป็นไปได้..</label></li>
                <li><a href="#">พระราชบัญญัติการศึกษาแห่งชาติ 2</a><label> หมวดที่ 9 เทคโนโลยีเพื่อการศึกษา มองภาพรวม....</label></li>
                <li><a href="#">e-Thailand</a><label> นโยบาย ICT ประเทศไทยแนวทาง...</label></li>
            </ul>
            <div className="MenuIndex-hr"><hr /></div>
        </section>
    </div>
  )
}

export default MenuIndex