import css from './Home.module.css'

export default function Home() {
  document.title = 'Home';
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Contact manager welcome page </h1>
      </div>
    </>
  );
}
