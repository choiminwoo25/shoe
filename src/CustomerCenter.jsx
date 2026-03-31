import React from "react";
import "./CustomerCenter.css";
import proFile from "./assets/react.svg";

export default function CustomerCenter() {
  return (
    <div className="container">
      {/* 헤더 */}
      <header className="header">
        <div className="logo">로고</div>
        <div className="nav">
          <span>고객센터</span>
          <span>마이페이지</span>
          <span>로그아웃</span>
        </div>
      </header>


      <div className="content">
        {/* 좌측 메뉴 */}
        <aside className="sidebar">
          <h2>고객센터</h2>

          <div className="menu">
            <h3>공지사항</h3>
            
          </div>

          <div className="menu">
            <h3>자주 묻는 질문</h3>
            
          </div>
        </aside>

        {/* 메인 영역 */}
       <main className="main">
          
          {/* 공지사항 내용 */}
         <section className="notice">
            <h2>공지사항</h2>
         </section>
        
        <section className="contents">
            <h2>이벤트</h2>
            <p> Kream draw 3월 3주차 서비스  웰컴 드로우 신규회원</p>
        </section>

         <section className="contents">
            <h2>이벤트</h2>
            <p> Kream draw 3월 3주차 서비스  웰컴 드로우 신규회원</p>
        </section>

         <section className="contents">
            <h2>공지</h2>
            <p> Kream draw 3월 3주차 서비스  웰컴 드로우 신규회원</p>
        </section>

         <section className="contents">
            <h2>공지</h2>
            <p> Kream draw 3월 3주차 서비스  웰컴 드로우 신규회원</p>
        </section>
        
        
        
        </main>
      </div>

      {/* 푸터 */}
      <footer className="footer">
        <p>회사 정보 | 이용약관 | 개인정보처리방침</p>
        <p>© 2026 Your Company</p>
      </footer>
    </div>
  );
}


