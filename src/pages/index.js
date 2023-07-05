import React, { useState, useEffect } from "react";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";

//импортитруется на все страницы
import "../css/index.css";
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
