import React from "react";
import flag from '../../images/managment/flag.jpg';
import azaat from '../../images/structure/azaat.jpeg';
import aitu from '../../images/structure/aitu.jpeg';
import './Structure.css';

function Structure() {

	return (
		<section className="structure">
			<main className="structure__wrapper wrapper">
				<h2 className="structure__title title general-title">Структура</h2>
				<ul className="structure__list">
					<li className="structure__item">
						<img className="structure__image" src={flag} alt="руководителя" />
						<div className="structure__description">
							<h3 className="structure__description__title"> Тургунбаева Эльмира Болотбековна</h3>
							<p className="structure__description__text text">Главный бухгалтер Государственного учреждения
								"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="structure__description__text text">+996 312 436 060</p>
						</div>
					</li>
					<li className="structure__item">
						<img className="structure__image" src={azaat} alt="руководителя" />
						<div className="structure__description">
							<h3 className="structure__description__title">Ибраимов Азаат Таалайбекович</h3>
							<p className="structure__description__text">Начальник службы (по управлению человеческими ресурсами и делопроизводства) Государственного учреждения
								"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="structure__description__text">+996 312 680 911</p>
						</div>
					</li>
					<li className="structure__item">
						<img className="structure__image" src={flag} alt="руководителя" />
						<div className="structure__description">
							<h3 className="structure__description__title">Калыбаева Жыргал Акматалиевна</h3>
							<p className="structure__description__text">Начальник службы (диспетчерская) Государственного учреждения
								"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="structure__description__text">+996 312 434 763</p>
						</div>
					</li>
					<li className="structure__item">
						<img className="structure__image" src={aitu} alt="руководителя" />
						<div className="structure__description">
							<h3 className="structure__description__title">Музакеев Айту Мукамбетович</h3>
							<p className="structure__description__text">Начальник службы (по безопасности) Государственного учреждения
								"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="structure__description__text">+996 312 435 985</p>
						</div>
					</li>
					<li className="structure__item">
						<img className="structure__image" src={flag} alt="руководителя" />
						<div className="structure__description">
							<h3 className="structure__description__title">Молдалиев Жанадилалы Каналбекович</h3>
							<p className="structure__description__text">Начальник службы (по безопасности) Государственного учреждения
								"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="structure__description__text">+996 312 435 985</p>
						</div>
					</li>
					<li className="structure__item">
						<img className="structure__image" src={flag} alt="руководителя" />
						<div className="structure__description">
							<h3 className="structure__description__title">Султанбеков Зарылбек Омурканович</h3>
							<p className="structure__description__text">Начальник службы (по хоз части) Государственного учреждения
								"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="structure__description__text">+996 312 435 991</p>
						</div>
					</li>
				</ul>
			</main>
		</section>
	)
}

export default Structure;