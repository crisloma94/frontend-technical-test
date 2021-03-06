import MeetupItem from '../components/meetups/MeetupItem';
import classes from './../components/meetups/MeetupList.module.css';

export default function AllMeetupsPage({ data, favorites, setFavorites }) {
  if (!data) return <p>Loading...</p>;
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data.map((meetupItemData) => (
          <MeetupItem
            item={meetupItemData}
            key={meetupItemData.id}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </ul>
    </section>
  );
}
