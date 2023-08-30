import React from "react";
import LinkToMain from "../LinkToMain/LinkToMain";
import CustomLink from "../CustomLink/CustomLink";
import ItemGallery from "../ItemGallery/ItemGallery";
import imagSubbotnik from '../../images/presentation/11-2.jpg';
import entrance from '../../images/presentation/Entrance.png';
import image7 from '../../images/rewarding/7.jpg';
import other from '../../images/presentation/other.png';
import parking from '../../images/presentation/parking.png';
import './Events.css';

function Events() {
	return (
		<section className="events">
			<main className="events__wrapper wrapper">
				<div className="container-link">
					<LinkToMain text="События" />
				</div>
				<div className="events__container">
					<h2 className="events__title title general-title">
						Мероприятия и События в Государственном учреждении "Автотранспортное предприятие"
						при Управлении делами Президента Кыргызской Республики
					</h2>
					<ul className="events__list">
						<li className="events__item">
							<CustomLink
								to="/rewarding"
								customNavigationLink="events__item-link"
							>
								<p className="text">Государственное учреждение "Автотранспортное предприятие" 
								  при Управлении делами Президента Кыргызской Республики,
									поздравило своих сотрудников с Днем независимости Кыргызстана.
								</p>
								<ItemGallery
									image={image7}
									customItemGallery="events__image"
								/>
							</CustomLink>
						</li>
						<li className="events__item">
							<CustomLink
								to="/news"
								customNavigationLink="events__item-link"
							>
								<p className="text">Государственное учреждение "Автотранспортное предприятие"
									при Управлении делами Президента Кыргызской Республики на общереспубликанском субботнике</p>
								<ItemGallery
									image={imagSubbotnik}
									customItemGallery="events__image"
								/>
							</CustomLink>
						</li>
						<li className="events__item">
							<CustomLink
								to="/completedWork"
								customNavigationLink="events__item-link"
							>
								<p className="text">Выполненные работы за последий год.</p>
								<ItemGallery
									image={entrance}
									customItemGallery="events__image"
								/>
							</CustomLink>
						</li>
					</ul>
				</div>
			</main>
		</section>
	)
}

export default Events;