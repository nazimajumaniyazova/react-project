import { store } from '../../store/store';
export type RootState = ReturnType<typeof store.getState>;
function About() {
  return (
    <div>
      <p>About</p>
    </div>
  );
}

export default About;
