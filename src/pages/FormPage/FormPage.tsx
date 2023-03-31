import './FormPage.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Idata>();
  const onSubmit = (data: Idata) => {
    console.log(data);
  };
  return (
    <div className="form-page">
      <h2 className="form-title">Save your favourite movie</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="set">
          <div className="name">
            <label htmlFor="m-name" className="required">
              Name
            </label>
            <input
              type="text"
              id="m-name"
              {...register('name', {
                required: 'This field is required.',
                minLength: {
                  value: 3,
                  message: 'This input should contain at least 3 letters',
                },
              })}
              className={errors.name ? 'error-validate' : ''}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
          </div>
          <div className="poster">
            <div>
              <input
                type="file"
                accept="image/*"
                id="poster-upload"
                className="poster-upload-input"
                {...register('image', { required: 'This field is required.' })}
              />
              <label htmlFor="poster-upload" className="poster-upload-label required">
                <span className="poster-upload-icon">
                  <i className="fas fa-camera-retro"></i>
                </span>
                Upload a poster
              </label>
            </div>
            <div>
              <ErrorMessage
                errors={errors}
                name="image"
                render={({ message }) => <p className="error-message">{message}</p>}
              />
            </div>
          </div>
        </div>
        <div className="set">
          <div className="date">
            <label htmlFor="m-date" className="required">
              Premiere date
            </label>
            <input
              id="m-date"
              placeholder="MM/DD/YYYY"
              type="date"
              {...register('date', { required: 'This field is required.' })}
            />
            <ErrorMessage
              errors={errors}
              name="date"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
          </div>
          <div className="status">
            <label htmlFor="status-released" className="required">
              Status
            </label>
            <div className="radio-container">
              <input
                id="status-released"
                type="radio"
                value="Released"
                {...register('status', { required: 'This field is required.' })}
              />
              <label htmlFor="status-released">Released</label>
              <input
                id="status-upcoming"
                type="radio"
                value="Upcoming"
                {...register('status', { required: 'This field is required.' })}
              />
              <label htmlFor="status-upcoming">Upcoming</label>
            </div>
            <ErrorMessage
              errors={errors}
              name="status"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
          </div>
        </div>
        <div className="set set-checkbox">
          <label className="label required">Genres</label>
          <ul className="checkboxes">
            <li className="checkbox">
              <input
                className="checkbox-input"
                id="choice-0"
                type="checkbox"
                value="comedy"
                {...register('genres', { required: 'This field is required.' })}
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
                {...register('genres', { required: 'This field is required.' })}
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
                {...register('genres', { required: 'This field is required.' })}
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
                {...register('genres', { required: 'This field is required.' })}
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
                {...register('genres', { required: 'This field is required.' })}
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
                {...register('genres', { required: 'This field is required.' })}
              />
              <label className="checkbox-label" htmlFor="choice-5">
                Thriller
              </label>
            </li>
          </ul>
          <ErrorMessage
            errors={errors}
            name="genres"
            render={({ message }) => <p className="error-message">{message}</p>}
          />
        </div>
        <div className="set">
          <div className="countries">
            <label htmlFor="country" className="required">
              Country
            </label>
            <select
              id="country"
              defaultValue={''}
              {...register('country', { required: 'This field is required.' })}
            >
              <option disabled value="">
                Choose here
              </option>
              {countries.sort().map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <ErrorMessage
              errors={errors}
              name="country"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
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
