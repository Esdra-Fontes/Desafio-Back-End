/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  filmes: {
    index: typeof routes['filmes.index']
    store: typeof routes['filmes.store']
    show: typeof routes['filmes.show']
    update: typeof routes['filmes.update']
    destroy: typeof routes['filmes.destroy']
  }
  categorias: {
    index: typeof routes['categorias.index']
    store: typeof routes['categorias.store']
    show: typeof routes['categorias.show']
    update: typeof routes['categorias.update']
    destroy: typeof routes['categorias.destroy']
  }
}
