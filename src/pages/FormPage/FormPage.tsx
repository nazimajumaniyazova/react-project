import './FormPage.css';
import { useForm } from 'react-hook-form';
const countries = [
  'USA',
  'UK',
  'India',
  'Turkey',
  'France',
  'German',
  'Russia',
  'Korea',
  'Japan',
  'Austria',
];
interface Idata {
  name: string;
  date: string;
  country: string;
  status: string;
  genres: Array<string>;
  image: string;
}
function FormPage() {
  const { register, handleSubmit } = useForm<Idata>();
  const onSubmit = (data: Idata) => console.log(data);
  return (
    <div className="form-page">
      <h2 className="form-title">Save your favourite movie</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="set">
          <div className="name">
            <label htmlFor="m-name">Name</label>
            <input type="text" id="m-name" {...register('name')} />
          </div>
          <div className="poster">
            <input
              type="file"
              accept="image/*"
              id="poster-upload"
              className="poster-upload-input"
              {...register('image')}
            />
            <label htmlFor="poster-upload" className="poster-upload-label">
              <span className="poster-upload-icon">
                <i className="fas fa-camera-retro"></i>
              </span>
              Upload a poster
            </label>
          </div>
        </div>
        <div className="set">
          <div className="date">
            <label htmlFor="m-date">Premiere date</label>
            <input id="m-date" placeholder="MM/DD/YYYY" type="date" {...register('date')} />
          </div>
          <div className="status">
            <label htmlFor="status-released">Status</label>
            <div className="radio-container">
              <input id="status-released" type="radio" value="Released" {...register('status')} />
              <label htmlFor="status-released">Released</label>
              <input id="status-upcoming" type="radio" value="Upcoming" {...register('status')} />
              <label htmlFor="status-upcoming">Upcoming</label>
            </div>
          </div>
        </div>
        <div className="set set-checkbox">
          <label className="label">Genres</label>
          <ul className="checkboxes">
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-0"
                type="checkbox"
                value="comedy"
                {...register('genres')}
              />
              <label className="checkbox-label" htmlFor="choice-0">
                Comedy
              </label>
            </li>
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-1"
                type="checkbox"
                value="drama"
                {...register('genres')}
              />
              <label className="checkbox-label" htmlFor="choice-1">
                Drama
              </label>
            </li>
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-2"
                type="checkbox"
                value="fantasy"
                {...register('genres')}
              />
              <label className="checkbox-label" htmlFor="choice-2">
                Fantasy
              </label>
            </li>
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-3"
                type="checkbox"
                value="horror"
                {...register('genres')}
              />
              <label className="checkbox-label" htmlFor="choice-3">
                Horror
              </label>
            </li>
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-4"
                type="checkbox"
                value="romance"
                {...register('genres')}
              />
              <label className="checkbox-label" htmlFor="choice-4">
                Romance
              </label>
            </li>
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-5"
                type="checkbox"
                value="thriller"
                {...register('genres')}
              />
              <label className="checkbox-label" htmlFor="choice-5">
                Thriller
              </label>
            </li>
          </ul>
        </div>
        <div className="set">
          <div className="countries">
            <label htmlFor="country">Country</label>
            <select id="country" {...register('country')}>
              {countries.sort().map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="set">
          <button type="submit" className="btn-save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
