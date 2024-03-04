const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  document.title = 'Home';
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Task manager welcome page </h1>
      </div>
    </>
  );
}
