import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage({favorites, setFavorites}) {
  return (
    <section>
    <h1>Favorites Page</h1>
    <ul className={classes.list}>
      {favorites.map((meetupItemData) => 
        <MeetupItem 
          item={meetupItemData} 
          key={meetupItemData.id}
          isFavorite={!!favorites.find((fav) => fav.id === meetupItemData.id)} 
          setFavorites={setFavorites}/>
      )}
    </ul>
  </section>
  );
}
