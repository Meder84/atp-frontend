import React from "react";
import LinkToMain from "../LinkToMain/LinkToMain";
import CustomLink from "../CustomLink/CustomLink";
import ItemGallery from "../ItemGallery/ItemGallery";
import imagSubbotnik from '../../images/presentation/11-2.jpg';
import image1 from '../../images/presentation/1.jpg'
import image2 from '../../images/presentation/2.jpg'
import image3 from '../../images/presentation/3.jpg'
import image4 from '../../images/presentation/4.jpg'
import image5 from '../../images/presentation/5.jpg'
import image6 from '../../images/presentation/6.jpg'
import image7 from '../../images/presentation/7.jpg'
import entrance from '../../images/presentation/Entrance.png';
import other from '../../images/presentation/other.png';
import parking from '../../images/presentation/parking.png';
import './СompletedWork.css';

function CompletedWork() {
	return (
		<section className="completedWork">
			<main className="completedWork__wrapper wrapper">
				<div className="container-link">
					<LinkToMain text="События" />
				</div>
				<div className="completedWork__container">
					<h2 className="completedWork__title title general-title">
						Выполненные работы за последий год в Государственном учреждении "Автотранспортное предприятие"
						при Управлении делами Президента Кыргызской Республики
					</h2>

					<h4 className="completedWork__subtitle subtitle">Входная группа</h4>
					<ul className="completedWork__list">
						<ItemGallery
							image={image1}
							customItemGallery="completedWork__image"
						/>
						<li className="compeletedWork__arrow">
							<p className="text">&#8656; До</p>
							<p className="text">После &#8658;</p>
						</li>
						<ItemGallery
							image={image2}
							customItemGallery="completedWork__image"
						/>
					</ul>

					<h4 className="completedWork__subtitle subtitle">Стоянка 2-этаж</h4>
					<ul className="completedWork__list">
						<ItemGallery
							image={image3}
							customItemGallery="completedWork__image"
						/>
						<li className="compeletedWork__arrow">
							<p className="text">&#8656; До</p>
							<p className="text">После &#8658;</p>
						</li>
						<ItemGallery
							image={image4}
							customItemGallery="completedWork__image"
						/>
					</ul>

					<h4 className="completedWork__subtitle subtitle">Другие ремонтые работы</h4>
					<ul className="completedWork__list-grid">
						<ItemGallery
							image={image5}
							customItemGallery="completedWork__image"
						/>
						<ItemGallery
							image={image6}
							customItemGallery="completedWork__image"
						/>
						<ItemGallery
							image={image7}
							customItemGallery="completedWork__image"
						/>
					</ul>
				</div>
			</main>
		</section>
	)
}

export default CompletedWork;