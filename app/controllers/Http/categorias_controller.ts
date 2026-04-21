// import type { HttpContextContract } from '@ioc:Adonis/Core/HtppContext'

import Categoria from '#models/categoria'

export default class CategoriasController {
  index() {
    return Categoria.query()
  }
}
