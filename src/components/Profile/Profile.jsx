import css from './Profile.module.css';

export const Profile = props => {
	const {
		username,
		tag,
		location,
		avatar,
		stats: { followers, views, likes },
	} = props;
	return (
		<div className={css.profile}>
			<div className={css.profile__description}>
				<img src={avatar} alt={username} className={css.profile__avatar} />
				<p className={css.description__name}>{username}</p>
				<p className={css.description__tag}>@{tag}</p>
				<p className={css.description__location}>{location}</p>
			</div>

			<ul className={css.profile__stats}>
				<li className={css.profile__stats__item}>
					<span className={css.stats__label}>Followers</span>
					<span className={css.stats__followers}>{followers}</span>
				</li>
				<li className={css.profile__stats__item}>
					<span className={css.stats__label}>Views</span>
					<span className={css.stats__quantity}>{views}</span>
				</li>
				<li className={css.profile__stats__item}>
					<span className={css.stats__label}>Likes</span>
					<span className={css.stats__likes}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};
