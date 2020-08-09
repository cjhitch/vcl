import Head from 'next/head'
import Lines from '../components/lines/Lines'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import styles from '../styles/Home.module.css'

const Home = () => {
	return (
		// <div className={styles.container}>
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Lines />
			<Header />
			<main className={`bg-light ${styles.main}`}>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</>
		// </div>
	)
}

export default Home;