import Head from 'next/head';
import style from '../styles/Home.module.css';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>SpacEx Launch Programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <h1 className={style.title}>
          SpacEx Launch Programs
        </h1>
        <Dashboard />
      </main>
    </div>
  )
}
