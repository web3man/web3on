import React, { useState, useEffect } from "react";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";

//импортитруется на все страницы
import "../css/index.scss";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export default function Hello() {
  let [state, setState] = useState({ opacity: "100%", delay: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      setState((s) => ({ ...s, delay: getRandomInt(0, 3) }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((s) => {
        if (!s.delay) {
          return { ...s, opacity: getRandomInt(70, 100) + "%" };
        }
        return s;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;

      if (target.classList.contains('navigation__mobile-button')) {
        let navigation = document.querySelector('.navigation');
        if (navigation) navigation.classList.toggle('navigation_active');
      } else if (target.classList.contains('navigation__item')) {
        const navigation = document.querySelector('.navigation');
        if (navigation) navigation.classList.remove('navigation_active');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);


  if (typeof window !== "undefined" && (window.location.hostname == 'web3on.io' || window.location.href == 'http://nc2.b3n.ru:3333?lang=en' || window.location.href == 'http://localhost:3000/?lang=en')) {
    // english
    return (
      <LayoutProvider>
        <>
          <div className="land">
            <div>
              <div className="land-container-wrapper bg-main sticky">
                <div className="land-container">
                  <nav className="navigation">
                    <div className="navigation__mobile-button" />
                    <div className="navigation__logo">
                      <a href="/">
                        <img
                          src="./images/main-logo.svg"
                          alt="Web3on"
                          className="navigation__logo-image"
                        />
                      </a>
                    </div>
                    <div className="navigation__mobile-top">
                      <div className="navigation__mobile-button" />
                      <div className="navigation__logo">
                        <a href="/">
                          <img
                            src="./images/main-logo.svg"
                            alt="Web3on"
                            className="navigation__logo-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="navigation__items">
                      <a
                        target="_blank"
                        href="https://board.web3on.ru/"
                        className="navigation__item"
                      >
                        Platform
                      </a>
                      <a href="./#pilot" className="navigation__item">
                        Pilot Projects
                      </a>
                      <a href="./#plans" className="navigation__item">
                        Our Plans
                      </a>
                      <a href="./#contacts" className="navigation__item">
                        Contacts
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="land-container-wrapper">
                <div className="land-container desktop-mt-50 mobile-mt-30 desktop-mb-60 mobile-mb-60">
                  <div className="first-screen">
                    <div className="first-screen__left-area">
                      <h1 className="first-screen__header desktop-mb-50 desktop-mt-110 mobile-mb-20">
                        No-code platform <br /> 
                        for learning web3 <br /> 
                        and prototyping projects
                      </h1>
                      <h3 className="first-screen__subheader desktop-mb-30 mobile-mb-20">
                        For universities, schools, and startups
                      </h3>
                      <a
                        className="first-screen__try-button mb-20"
                        target="_blank"
                        href="https://board.web3on.ru/"
                      >
                        Try for Free
                      </a>
                    </div>
                    <div className="first-screen__right-area">
                      <img
                        className="first-screen__mona desktop-mb-40 mobile-mb-30"
                        src="./images/mona75.webp"
                        style={{ opacity: state.opacity }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="land-container-wrapper bg-white" id="pilot">
                <div className="land-container standard-block desktop-mt-60 desktop-mb-60 mobile-mt-30 mobile-mb-50">
                  <h2 className="standard-block__header text-blue">Pilot Projects</h2>
                  <div className="grid-pilot-projects">
                    <div className="grid-pilot-projects__text">
                      <p>
                        We have initiated pilot projects with the State University of Management (Moscow) and the Nizhny Novgorod IT campus "Неймарк". In the course of these experimental educational events, we have found that even students of non-technical specialties can quickly master web3 technologies and then apply them in their projects using our platform.
                      </p>
                      <p>
                        We saw that universities are in great need of such a platform - as part of the National Program "Digital Economy", they are tasked with developing the competencies of students and teachers in the field of Transversal Technologies. However, universities lack teachers with the necessary skills, and they do not have a simple set of tools with which they can first train teachers, and then students.
                      </p>
                    </div>
                    <div className="grid-pilot-projects__image">
                      <img src="./images/pilot.png" alt="Пилотные проекты" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="land-container-wrapper bg-main" id="plans">
                <div className="land-container standard-block desktop-mt-60 desktop-mb-60 mobile-mt-30 mobile-mb-50">
                  <h2 className="standard-block__header text-light-blue">Our Plans</h2>
                  <div className="grid-our-plans">
                    <div className="grid-our-plans__item">
                      <div className="grid-our-plans__item-image">
                        <img src="./images/plan-1.svg" alt="Планы" />
                      </div>
                      <div className="grid-our-plans__item-body text-light-blue">
                        Server mode for no-code schemes, allowing the platform to be used as a backend, as well as a more efficient visual editor
                      </div>
                    </div>
                    <div className="grid-our-plans__item">
                      <div className="grid-our-plans__item-image">
                        <img src="./images/plan-2.svg" alt="Планы" />
                      </div>
                      <div className="grid-our-plans__item-body text-light-blue">
                        Expansion of the constructor block library, more blockchains and other technologies - machine learning, data science, IoT, and others
                      </div>
                    </div>
                    <div className="grid-our-plans__item">
                      <div className="grid-our-plans__item-image">
                        <img src="./images/plan-3.svg" alt="Планы" />
                      </div>
                      <div className="grid-our-plans__item-body text-light-blue">
                        A large Knowledge Base on the presented technologies and platform tools, including training videos, to quickly master the functionality
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="land-container-wrapper bg-additional">
                <div className="land-container standard-block desktop-mt-60 desktop-mb-60 mobile-mt-30 mobile-mb-50">
                  <h2 className="standard-block__header text-blue">Partners and Friends</h2>
                  <div className="grid-partners">
                    <div className="grid-partners__item">
                      <img src="./images/partners/1_neymark.png" className="i1_neymark" />
                    </div>
                    <div className="grid-partners__item">
                      <img src="./images/partners/2_univer.png" className="i2_univer" />
                    </div>
                    <div className="grid-partners__item">
                      <img src="./images/partners/3_univer.png" className="i3_univer" />
                    </div>
                    <div className="grid-partners__item">
                      <img
                        src="./images/partners/4_takemycode.png"
                        className="i4_takemycode"
                      />
                    </div>
                    <div className="grid-partners__item">
                      <img
                        src="./images/partners/5_centr_tech.png"
                        className="i5_centr_tech"
                      />
                    </div>
                    <div className="grid-partners__item">
                      <img src="./images/partners/6_gorky.png" className="i6_gorky" />
                    </div>
                    <div className="grid-partners__item">
                      <img
                        src="./images/partners/7_kvantorium.png"
                        className="i7_kvantorium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <div id="contacts"></div>
        <footer className="footer footer--dark">
          <div className="container container-fluid">
            <div className="row footer__links">
              <div className="col footer__col">
                <div className="footer__title">Contacts</div>
                <ul className="footer__items clean-list">
                  <li className="footer__item">Digital Solutions LLC</li>
                  <li className="footer__item">
                    Office 416-1, 3 Kostina st., Nizhny Novgorod, Russia
                  </li>
                  <li className="footer__item">Phone: +7 910 393 00 33</li>
                  <li className="footer__item">
                    <a
                      href="mailto:info@web3on.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link-item"
                    >
                      info@web3on.ru
                      <svg
                        width="13.5"
                        height="13.5"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="footer__item">
                    <br /> © 2023 Web3on. All rights reserved
                  </li>
                </ul>
              </div>
              <div className="col footer__col" style={{ display: 'none' }}>
                <div className="footer__title">Legal Information</div>
                <ul className="footer__items clean-list">
                  <li className="footer__item">
                    <a
                      className="footer__link-item"
                      href="/docs_legal/legal_info/privacy_policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      className="footer__link-item"
                      href="/docs_legal/legal_info/license_agreement"
                    >
                      License Agreement
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      className="footer__link-item"
                      href="/docs_legal/legal_info/price"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  
  
  
      </LayoutProvider>
    );
  } else {
    // russian
    return (
      <LayoutProvider>
        <>
          <div className="land">
            <div>
              <div className="land-container-wrapper bg-main sticky">
                <div className="land-container">
                  <nav className="navigation">
                    <div className="navigation__mobile-button" />
                    <div className="navigation__logo">
                      <a href="/">
                        <img
                          src="./images/main-logo.svg"
                          alt="Web3on"
                          className="navigation__logo-image"
                        />
                      </a>
                    </div>
                    <div className="navigation__mobile-top">
                      <div className="navigation__mobile-button" />
                      <div className="navigation__logo">
                        <a href="/">
                          <img
                            src="./images/main-logo.svg"
                            alt="Web3on"
                            className="navigation__logo-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="navigation__items">
                      <a
                        target="_blank"
                        href="https://board.web3on.ru/"
                        className="navigation__item"
                      >
                        Платформа
                      </a>
                      <a
                        target="_blank"
                        href="https://web3on.ru/docs/manual/"
                        className="navigation__item"
                      >
                        Руководство пользователя
                      </a>
                      <a href="./#pilot" className="navigation__item">
                        Пилотные проекты
                      </a>
                      <a href="./#plans" className="navigation__item">
                        Наши планы
                      </a>
                      <a href="./#contacts" className="navigation__item">
                        Контакты
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="land-container-wrapper">
                <div className="land-container desktop-mt-50 mobile-mt-30 desktop-mb-60 mobile-mb-60">
                  <div className="first-screen">
                    <div className="first-screen__left-area">
                      <h1 className="first-screen__header desktop-mb-50 desktop-mt-60 mobile-mb-20">
                        No-code платформа <br />
                        для изучения web3 <br />и прототипирования проектов
                      </h1>
                      <h3 className="first-screen__subheader desktop-mb-60 mobile-mb-30">
                        ВУЗам, школам и стартапам
                      </h3>
                      <div className="first-screen__video mobile-mb-40">
                        <iframe
                          src="https://www.youtube.com/embed/_XWjMH0mfF0"
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <a
                        className="first-screen__mobile-try-button mb-20"
                        target="_blank"
                        href="https://board.web3on.ru/"
                      >
                        Попробовать бесплатно
                      </a>
                      <a
                        className="first-screen__mobile-manual-button"
                        target="_blank"
                        href="https://web3on.ru/docs/manual/"
                      >
                        Руководство пользователя
                      </a>
                    </div>
                    <div className="first-screen__right-area">
                      <img
                        className="first-screen__mona desktop-mb-40 mobile-mb-30"
                        src="./images/mona75.webp"
                        style={{ opacity: state.opacity }}
                      />
                      <a
                        className="first-screen__desktop-try-button mb-30"
                        target="_blank"
                        href="https://board.web3on.ru/"
                      >
                        Попробовать бесплатно
                      </a>
                      <a
                        className="first-screen__desktop-manual-button"
                        target="_blank"
                        href="https://web3on.ru/docs/manual/"
                      >
                        Руководство пользователя
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="land-container-wrapper bg-white" id="pilot">
                <div className="land-container standard-block desktop-mt-60 desktop-mb-60 mobile-mt-30 mobile-mb-50">
                  <h2 className="standard-block__header text-blue">Пилотные проекты</h2>
                  <div className="grid-pilot-projects">
                    <div className="grid-pilot-projects__text">
                      <p>
                        Мы начали пилотные проекты с Государственным Университетом
                        Управления (Москва) и нижегородским IT-кампусом “Неймарк”. В ходе
                        этих экспериментальных образовательных мероприятий убедились, что
                        даже учащиеся нетехнических специальностей могут быстро осваивать
                        web3-технологии и потом применять их в своих проектах с помощью
                        нашей платформы.
                      </p>
                      <p>
                        Мы увидели, что ВУЗам очень нужна подобная платформа - в рамках
                        Национальной программы “Цифровая экономика” им поручено развитие
                        компетенций студентов и преподавателей в области Сквозных
                        технологий. Но ВУЗам не хватает преподавателей с необходимыми
                        навыками, и у них нет простого инструментария, с помощью которого
                        можно обучать сначала преподавателей, а потом и студентов.
                      </p>
                    </div>
                    <div className="grid-pilot-projects__image">
                      <img src="./images/pilot.png" alt="Пилотные проекты" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="land-container-wrapper bg-main" id="plans">
                <div className="land-container standard-block desktop-mt-60 desktop-mb-60 mobile-mt-30 mobile-mb-50">
                  <h2 className="standard-block__header text-light-blue">Наши планы</h2>
                  <div className="grid-our-plans">
                    <div className="grid-our-plans__item">
                      <div className="grid-our-plans__item-image">
                        <img src="./images/plan-1.svg" alt="Планы" />
                      </div>
                      <div className="grid-our-plans__item-body text-light-blue">
                        Серверный режим работы no-code схем, позволяющий использовать
                        плафторму как backend, а также более производительный визуальный
                        редактор
                      </div>
                    </div>
                    <div className="grid-our-plans__item">
                      <div className="grid-our-plans__item-image">
                        <img src="./images/plan-2.svg" alt="Планы" />
                      </div>
                      <div className="grid-our-plans__item-body text-light-blue">
                        Расширение библиотеки блоков конструктора, больше блокчейнов и
                        других технологий - машинное обучение, data science, IoT и другие
                      </div>
                    </div>
                    <div className="grid-our-plans__item">
                      <div className="grid-our-plans__item-image">
                        <img src="./images/plan-3.svg" alt="Планы" />
                      </div>
                      <div className="grid-our-plans__item-body text-light-blue">
                        Большая База Знаний по представленным технологиям и инструментарию
                        платформу, в т.ч. обучающие видео, позволяющие быстро освоить
                        функционал
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="land-container-wrapper bg-additional">
                <div className="land-container standard-block desktop-mt-60 desktop-mb-60 mobile-mt-30 mobile-mb-50">
                  <h2 className="standard-block__header text-blue">Партнеры и друзья</h2>
                  <div className="grid-partners">
                    <div className="grid-partners__item">
                      <img src="./images/partners/1_neymark.png" className="i1_neymark" />
                    </div>
                    <div className="grid-partners__item">
                      <img src="./images/partners/2_univer.png" className="i2_univer" />
                    </div>
                    <div className="grid-partners__item">
                      <img src="./images/partners/3_univer.png" className="i3_univer" />
                    </div>
                    <div className="grid-partners__item">
                      <img
                        src="./images/partners/4_takemycode.png"
                        className="i4_takemycode"
                      />
                    </div>
                    <div className="grid-partners__item">
                      <img
                        src="./images/partners/5_centr_tech.png"
                        className="i5_centr_tech"
                      />
                    </div>
                    <div className="grid-partners__item">
                      <img src="./images/partners/6_gorky.png" className="i6_gorky" />
                    </div>
                    <div className="grid-partners__item">
                      <img
                        src="./images/partners/7_kvantorium.png"
                        className="i7_kvantorium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <div id="contacts"></div>
        <Footer></Footer>
      </LayoutProvider>
    );
  }
}
