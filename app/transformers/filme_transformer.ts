import { BaseTransformer } from '@adonisjs/core/transformers'
import Filme from '#models/filme'

export default class FilmeTransformer extends BaseTransformer<Filme> {
  toObject() {
    return this.pick(this.resource, ['id'])
  }
}