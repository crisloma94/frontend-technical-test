import { useState } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

export default function NewMeetupForm({ setData }) {
  const [form, setForm] = useState({});
  function submitHandler(event) {
    event.preventDefault();
    const newMeetUp = {
      id: form.title,
      title: form.title,
      image: form.image,
      address: form.address,
      description: form.description,
    };
    setData((prevData) => [...prevData, ...[newMeetUp]]);
    setForm({});
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            onChange={(e) =>
              setForm((prevData) => ({ ...prevData, title: e.target.value }))
            }
            value={form.title || ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            onChange={(e) =>
              setForm((prevData) => ({ ...prevData, image: e.target.value }))
            }
            value={form.image || ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            onChange={(e) =>
              setForm((prevData) => ({ ...prevData, address: e.target.value }))
            }
            value={form.address || ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            onChange={(e) =>
              setForm((prevData) => ({
                ...prevData,
                description: e.target.value,
              }))
            }
            value={form.description || ''}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
