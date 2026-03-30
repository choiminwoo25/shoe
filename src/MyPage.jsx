import React from "react";
import "./MyPage.css";
import proFile from "./assets/react.svg";

function MyPage() {
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
          <h2>마이페이지</h2>

          <div className="menu">
            <h3>쇼핑 정보</h3>
            <p>최근 본 상품</p>
            <p>관심 상품</p>
          </div>

          <div className="menu">
            <h3>내 정보</h3>
            <p>로그인 정보</p>
            <p>프로필 정보</p>
          </div>
        </aside>

        {/* 메인 영역 */}
       <main className="main">
          {/* 사용자 정보 */}
          
          <div className="user-box">
              <div className="left">
                <div className="user-profile">
                  <img src={proFile} alt="profile" />
                </div> 

                 <div className="user-info">
                     <strong>5m08cs</strong>
                     <p>example@email.com</p>
                 </div>
             </div>
            <div className="user-bottons">
              <button>프로필 관리</button>
              <button>내 스타일</button>
            </div>
          </div>

          {/* 최근 본 상품 */}
          <section className="section">
            <h3>최근 본 상품</h3>

            <div className="item">
              <img src="https://via.placeholder.com/80" alt="" />
              <div>
                <p>Apple 2022 MacBook Air</p>
                <span>100원</span>
              </div>
            </div>

            <div className="item">
              <img src="https://via.placeholder.com/80" alt="" />
              <div>
                <p>Louis Vuitton Belt</p>
                <span>100원</span>
              </div>
            </div>

            <div className="item">
              <img src="https://via.placeholder.com/80" alt="" />
              <div>
                <p>Adidas Sneakers</p>
                <span>100원</span>
              </div>
            </div>
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

export default MyPage;
