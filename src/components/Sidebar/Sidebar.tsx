import { ReactComponent as Logo } from '../../images/logo/logo.svg';
import { ReactComponent as Alert } from '../../images/sidebar/alert.svg';
import { ReactComponent as BriefcaseOutline } from '../../images/sidebar/briefcase-outline.svg';
import { ReactComponent as ChartTimelineVariant } from '../../images/sidebar/chart-timeline-variant.svg';
import { ReactComponent as Documents } from '../../images/sidebar/documents.svg';
import { ReactComponent as LocalLibrary } from '../../images/sidebar/local_library_black.svg';
import { ReactComponent as MailOutline } from '../../images/sidebar/mail_outline.svg';
import { ReactComponent as Orders } from '../../images/sidebar/orders.svg';
import { ReactComponent as People } from '../../images/sidebar/people.svg';
import { ReactComponent as PermIdentity } from '../../images/sidebar/perm_identity_black.svg';
import { ReactComponent as Plus } from '../../images/sidebar/plus.svg';
import { ReactComponent as Settings } from '../../images/sidebar/settings.svg';
import './styles/Sidebar.scss'
import { ReactComponent as Calls } from '../../images/sidebar/calls.svg';

const Sidebar = () => {

	return (
		<aside className="sidebar">
			<div className="sidebar__logo-wrapper">
				<Logo className='logo' />
			</div>

			<nav className="navigation">
				<ul className="navigation__wrapper">
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							<ChartTimelineVariant className='navigation__svg' />
							<span className="navigation__link-text">Итоги</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<Orders className='navigation__svg' />
							<span className="navigation__link-text">Заказы</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<MailOutline className='navigation__svg' />
							<span className="navigation__link-text">Сообщения</span>
						</a>
					</li>

					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<Calls className='navigation__svg' />
							<span className="navigation__link-text">Звонки</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<People className='navigation__svg' />
							<span className="navigation__link-text">Контрагенты</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<Documents className='navigation__svg' />
							<span className="navigation__link-text">Документы</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="" className="navigation__link">
							<PermIdentity className='navigation__svg' />
							<span className="navigation__link-text">Исполнители</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<BriefcaseOutline className='navigation__svg' />
							<span className="navigation__link-text">Отчеты</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<LocalLibrary className='navigation__svg' />
							<span className="navigation__link-text">База знаний</span>
						</a>
					</li>
					<li className="navigation__item">

						<a href="#" className="navigation__link">
							<Settings className='navigation__svg' />
							<span className="navigation__link-text">Настройки</span>
						</a>
					</li>
				</ul>
			</nav>

			<div className="button__wrapper">
				<button>Добавить заказ</button>
				<Alert className='navigation__svg' />
			</div>

			<div className="button-wrapper">
				<button>Добавить заказ</button>
				<Plus className='navigation__svg' />
			</div>

		</aside>
	)
}

export default Sidebar