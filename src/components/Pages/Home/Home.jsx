import css from './Home.module.css'

export default function Home() {
  document.title = 'Home';
  return (
    <>
      <div style={css.container}>
        <h1 style={css.title}>Task manager welcome page </h1>
      </div>
    </>
  );
}
