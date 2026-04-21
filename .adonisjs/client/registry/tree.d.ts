/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  categorias: {
    index: typeof routes['categorias.index']
  }
  filmes: {
    index: typeof routes['filmes.index']
    store: typeof routes['filmes.store']
    show: typeof routes['filmes.show']
    update: typeof routes['filmes.update']
    destroy: typeof routes['filmes.destroy']
  }
}
