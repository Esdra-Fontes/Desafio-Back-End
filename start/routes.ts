/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CategoriasController = () => import('#controllers/Http/categorias_controller')
const FilmesController = () => import('#controllers/Http/filmes_controller')

router.get('/', () => {
  return { hello: 'Esdra Fontes' }
})

router.resource('/filmes', FilmesController).apiOnly()
router.resource('/categorias', CategoriasController).apiOnly()
