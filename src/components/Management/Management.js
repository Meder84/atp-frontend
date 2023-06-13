import React from "react";
import jenish from '../../images/managment/jenish.jpg'
import erlan from '../../images/managment/Erlan.jpeg'
import flag from '../../images/managment/flag.jpg'
import './Management.css';

function Management() {

	return (
		<section className="management">
			<main className="management__wrapper wrapper">
				<h2 className="management__title title general-title">Руководство</h2>
				<ul className="management__list">
					<li className="management__item">
						<img className="management__image" src={jenish} alt="руководителя" />
						<div className="management__description">
							<h3 className="management__description__title"> Апсаматов Жениш Гапарович</h3>
							<p className="management__description__text text">Директор Государственного учреждения 
							"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="management__description__text text">+996 312 434 848</p>
						</div>
					</li>
					<li className="management__item">
						<img className="management__image" src={erlan} alt="руководителя" />
						<div className="management__description">
							<h3 className="management__description__title">Альчинов Эрлан Токтомбекович</h3>
							<p className="management__description__text">Заместитель директора Государственного учреждения 
							"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="management__description__text">+996 312 680 911</p>
						</div>
					</li>
					<li className="management__item">
						<img className="management__image" src={flag} alt="руководителя" />
						<div className="management__description">
							<h3 className="management__description__title">Шамуратов Эржан Алтынбекович</h3>
							<p className="management__description__text">Заместитель директора Государственного учреждения 
							"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="management__description__text">+996 312 680 911</p>
						</div>
					</li>
					<li className="management__item">
						<img className="management__image" src={flag} alt="руководителя" />
						<div className="management__description">
							<h3 className="management__description__title">Сариев Раушан Айтикулович</h3>
							<p className="management__description__text">Главный инженер Государственного учреждения 
							"Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики</p>
							<p className="management__description__text">+996 312 437 621</p>
						</div>
					</li>
				</ul>
			</main>
		</section>
	)
}

export default Management;