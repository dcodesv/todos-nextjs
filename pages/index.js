import {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const URL_FETCH = 'https://jsonplaceholder.typicode.com/todos?_end=10'
  const [todo, setTodo] = useState([])
  
  const getTodos = async (url) =>{
    const datos = await fetch(url)
    const todos = await datos.json()
    setTodo(todos)
  }

  useEffect(() => {
    getTodos(URL_FETCH)
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Testing API <a href="https://nextjs.org">NextJS</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {
            todo.map(todos => (
              <div className={styles.card}>
                <h3>{todos.title}</h3>
                <p className={todos.completed ? styles.completed : ''}>{todos.completed ? 'Completada' : 'En proceso'}</p>
              </div>
            ))
            
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dcodesv.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by dcodesv
        </a>
      </footer>
    </div>
  )
}
