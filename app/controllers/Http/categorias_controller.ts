import Categoria from '#models/categoria'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriasController {
  index() {
    return Categoria.query()
  }

  //Método CREATE
  show({ params }: HttpContext) {
    const id = params.id
    return Categoria.findOrFail(id)
  }

  //Método READ
  async store({ request }: HttpContext) {
    const dados = request.only(['nome', 'filme_id'])
    return await Categoria.create(dados)
  }

  //Método UPDATE
  async update({ request, params }: HttpContext) {
    const dados = request.only(['nome', 'filme_id'])

    const id = params.id
    const categoria = await Categoria.findOrFail(id)

    categoria.merge(dados)
    await categoria.save()

    return categoria
  }

  //Método DELETE
  async destroy({ params }: HttpContext) {
    const id = params.id
    const categoria = await Categoria.findOrFail(id)

    categoria.delete()
  }
}
