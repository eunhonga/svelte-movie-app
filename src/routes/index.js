import Home from './Home.svelte'
import Movie from './Movie.svelte'
import About from './About.svelte'
import NotFound from './NotFound.svelte'

export default {
  '/': Home,
  '/Movie/:id': Movie,
  '/about': About,
  '*': NotFound
}