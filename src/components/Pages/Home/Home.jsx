import DocumentTitle from '../../DocumentTitle/DocumentTitle';
import css from './Home.module.css'

export default function Home() {
  
  return (
    <>
    <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Contact manager welcome page </h1>
      </div>
    </>
  );
}