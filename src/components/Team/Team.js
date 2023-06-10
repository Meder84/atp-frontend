import React from 'react';
import team1 from '../../images/team-1.png'
import team2 from '../../images/team-2.png'
import './Team.css'

function Team () {
  return (
    <section className='team'>
      <main className='team__wrapper wrapper'>
        <h2 className='team__title title general-title'>Сотрудники</h2>
        <h4 className='team__subtitle subtitle'>Наша команда состоит из высококвалифицированных специалистов своего дела</h4>
        <ul className='team__list'>
          <li className='team__list-item'>
            <figure className='team__figure'>
              <img className='team__image' src={team1} alt='иконка человека'></img>
              <figcaption className='team__figcaption'>
                <h3 className='team__subtitle subtitle'>Шаменова Чолпон</h3>
                <p className='team__text text'>Менеджер</p>
                <p className='team__text text'>+996 550 057 575</p>
              </figcaption>
              <div className='team__social'>
                <a href='https://www.instagram.com/gos.garaj/' target="_blank" className='team__social-link'>
                  <div className='team__social-icon facebook'></div>
                </a>
                <a href='https://www.instagram.com/gos.garaj/' target="_blank" className='team__social-link'>
                  <div className='team__social-icon tiktok'></div>
                </a>
                <a href='https://www.instagram.com/gos.garaj/' target="_blank" className='team__social-link'>
                  <div className='team__social-icon instagram'></div>
                </a>
                <a href='https://www.instagram.com/gos.garaj/' target="_blank" className='team__social-link'>
                  <div className='team__social-icon twitter'></div>
                </a>
              </div> 
            </figure>
          </li>
          <li className='team__list-item'>
            <figure className='team__figure'>
              <img className='team__image' src={team2} alt='иконка человека'></img>
              <figcaption className='team__figcaption'>
                <h3 className='team__subtitle subtitle'>Диспетчер АТП</h3>
                <p className='team__text text'>+996 555 923 218</p>
              </figcaption>
              <div className='team__social'>
                <a href='#' className='team__social-link'>
                  <div className='team__social-icon facebook'></div>
                </a>
                <a href='#' className='team__social-link'>
                  <div className='team__social-icon tiktok'></div>
                </a>
                <a href='https://www.instagram.com/gos.garaj/' className='team__social-link'>
                  <div className='team__social-icon instagram'></div>
                </a>
                <a href='#' className='team__social-link'>
                  <div className='team__social-icon twitter'></div>
                </a>
              </div>
            </figure>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Team;