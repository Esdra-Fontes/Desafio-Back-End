import { BaseTransformer } from '@adonisjs/core/transformers'
import Categoria from '#models/categoria'

export default class CategoriaTransformer extends BaseTransformer<Categoria> {
  toObject() {
    return this.pick(this.resource, ['id'])
  }
}