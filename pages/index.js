import {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import loadCustomRoutes from 'next/dist/lib/load-custom-routes';

//Componentes
import Skeleton from './components/skeleton'
import skeleton from './components/skeleton';

export default function Home() {
  let starPage = 0; 
  var endPage = 9;
  const [page, setPage] = useState(9)
  var URL_FETCH = `https://jsonplaceholder.typicode.com/todos?_end=${page}`
  
  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  //Paginación
  
    const getTodos = async (url) =>{
      const datos = await fetch(url)
      const todos = await datos.json()
      setTodo(todos)
      setLoading(false)
    }

  useEffect(() => {
    setTimeout( () => {
      getTodos(URL_FETCH)
      loadMore(URL_FETCH)
    }, 300)
    
  }, [page])

  const loadMore = async (url) =>{
      const datos = await fetch(url)
      const todos = await datos.json()
      setTodo(todos)
      setLoadingMore(false)
  }
  var animate = loadingMore ? ' animate-pulse' : ''
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
          Primeros pasos con Next JS
          <code className={styles.code}>/dcodesv</code>
        </p>

        <div className={styles.grid}>
          {
            loading ? <Skeleton/> : todo.map(todos => (
              
              <div className={styles.card}>
                <h3>{todos.title}</h3>
                <p className={todos.completed ? styles.completed : ''}>{todos.completed ? 'Completada' : 'En proceso'}</p>
              </div>
            )) 
          }
          {
          loadingMore ? <Skeleton/> : console.log("Load More..")
          }
        </div>

        <div>
          <p className="text-center mt-10 p-4 text-gray-600">Mostrando {todo.length} resultados</p>
          <button onClick={() => setPage(page + 9) & setLoadingMore(true)} className={styles.botton + " w-64 flex items-center justify-center"}>
            {loadingMore ? <span className="flex items-center justify-center"><div className={styles.loader + " ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"}></div> Cargando...</span> : 'Cargar más'}
          </button>
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
