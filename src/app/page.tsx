import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Base Web3 App</h1>
        <p>
          Next.js application with Node.js and Python support running in Docker
        </p>
      </div>

      <div className={styles.center}>
        <h2>Features</h2>
        <ul>
          <li>Next.js 14 with TypeScript</li>
          <li>Node.js runtime</li>
          <li>Python 3 support</li>
          <li>Docker containerization</li>
          <li>Docker Compose for development</li>
        </ul>
      </div>

      <div className={styles.grid}>
        <a
          href="/api/hello"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            API Test <span>-&gt;</span>
          </h2>
          <p>Test the Next.js API endpoint</p>
        </a>

        <a
          href="https://nextjs.org/docs"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Next.js Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </main>
  )
}
