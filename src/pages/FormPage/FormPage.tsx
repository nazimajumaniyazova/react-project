import './FormPage.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState, useEffect } from 'react';
import WarningModal from '../../components/Modal/WarningModal';
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
  const [dataUser, setDataUser] = useState<Array<Idata>>([]);
  const [img, setImg] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Idata>();

  const onSubmit = (data: Idata) => {
    data.image = img;
    const newDataUser = [...dataUser, { ...data }];
    setDataUser(newDataUser);
    setIsModalVisible(true);
    reset({
      name: '',
      date: '',
      country: '',
      image: '',
      genres: [],
      status: '',
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setIsModalVisible(false);
    }, 3000);
  }, [isModalVisible]);
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
                onChange={handleFileChange}
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
                value="Comedy"
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
                value="Drama"
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
                value="Fantasy"
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
                value="Horror"
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
                value="Romance"
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
                value="Thriller"
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

      <div className="cards-section">
        <div className="container">
          <ul className="cards-container">
            {dataUser.map((item, index) => (
              <li key={index}>
                <div className="card">
                  <div className="card-img">
                    <img src={item.image} className="card-img__image" />
                  </div>
                  <div className="card-info">
                    <p className="card-name">{item.name}</p>
                    <p className="card-date">{item.date}</p>
                    <p className="card-score">Status: {item.status}</p>
                    <p className="card-score">Country: {item.country}</p>
                    <p className="card-score genres">
                      Genre:{' '}
                      {item.genres.map((i, index) => (
                        <span key={index}>{i}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalVisible ? <WarningModal /> : ''}
    </div>
  );
}

export default FormPage;
