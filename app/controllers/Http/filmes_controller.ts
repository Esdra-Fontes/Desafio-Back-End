import Filme from '#models/filme'
import type { HttpContext } from '@adonisjs/core/http'

export default class FilmesController {
  index() {
    return Filme.query()
  }

  //Método CREATE
  show({ params }: HttpContext) {
    const id = params.id
    return Filme.findOrFail(id)
  }

  //Método READ
  async store({ request }: HttpContext) {
    const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id'])
    return await Filme.create(dados)
  }

  //Método UPDATE
  async update({ request, params }: HttpContext) {
    const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id'])

    const id = params.id
    const filme = await Filme.findOrFail(id)

    filme.merge(dados)
    await filme.save()

    return filme
  }

  //Método DELETE
  async destroy({ params }: HttpContext) {
    const id = params.id
    const filme = await Filme.findOrFail(id)

    filme.delete()
  }
}
