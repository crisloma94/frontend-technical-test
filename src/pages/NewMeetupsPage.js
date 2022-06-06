import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetupsPage({ setData }) {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm setData={setData} />
    </section>
  );
}
