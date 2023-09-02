import Head from 'next/head';
import { Menu } from '../componentes/Menu';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main style={styles.main}>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Home;
