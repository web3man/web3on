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

  return (
    <LayoutProvider>
      <div className="index-page">
        <div className="mobile-logo mt-45 mb-45">
          <img src="./images/web3on-logo-horisont-dark.png"></img>
        </div>
        <div className="tb-container">
          <div className="tb-grid">
            <div className="tb-grid__cell">
              <img
                className="tb-grid__image"
                src="./images/mona75.webp"
                style={{ opacity: state.opacity }}
              />
            </div>
            <div className="tb-grid__cell">
              <div className="cc text-center">
                <img
                  className="logo mb-45"
                  src="./images/web3on-logo-horisont-dark.png"
                ></img>
                <div className="cc__text mb-60">
                  <p>
                    No-code платформа для изучения web3
                    <br />и прототипирования проектов
                  </p>

                  <p>
                    Для ВУЗов, школ, стартапов и всех кому интересен мир web3
                  </p>

                  <p>
                    Развитие цифровых компетенций студентов и преподавателей,
                    подготовка профессионалов в области технологического
                    предпринимательства
                  </p>
                </div>
                <div className="cc__button-wrapper">
                  <a
                    href="https://board.web3on.ru"
                    className="cc__button"
                    style={{ marginBottom: 30 }}
                  >
                    Попробовать бесплатно
                  </a>
                </div>
                <div className="cc__button-wrapper">
                  <a href="/docs/manual/" className="cc__button">
                    Руководство пользователя
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </LayoutProvider>
  );
}
