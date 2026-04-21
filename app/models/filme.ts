import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Filme extends BaseModel {
  public static table = 'filmes' // importante!

  @column({ isPrimary: true })
  public id!: number

  @column()
  public nome!: string

  @column()
  public sinopse!: string

  @column()
  public duracao!: string

  @column()
  public classificacao!: string

  @column()
  public categoriaId!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}
