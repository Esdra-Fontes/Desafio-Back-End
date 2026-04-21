/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'categorias.index': {
    methods: ["GET","HEAD"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.index']['types'],
  },
  'filmes.index': {
    methods: ["GET","HEAD"],
    pattern: '/filmes',
    tokens: [{"old":"/filmes","type":0,"val":"filmes","end":""}],
    types: placeholder as Registry['filmes.index']['types'],
  },
  'filmes.store': {
    methods: ["POST"],
    pattern: '/filmes',
    tokens: [{"old":"/filmes","type":0,"val":"filmes","end":""}],
    types: placeholder as Registry['filmes.store']['types'],
  },
  'filmes.show': {
    methods: ["GET","HEAD"],
    pattern: '/filmes/:id',
    tokens: [{"old":"/filmes/:id","type":0,"val":"filmes","end":""},{"old":"/filmes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['filmes.show']['types'],
  },
  'filmes.update': {
    methods: ["PUT","PATCH"],
    pattern: '/filmes/:id',
    tokens: [{"old":"/filmes/:id","type":0,"val":"filmes","end":""},{"old":"/filmes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['filmes.update']['types'],
  },
  'filmes.destroy': {
    methods: ["DELETE"],
    pattern: '/filmes/:id',
    tokens: [{"old":"/filmes/:id","type":0,"val":"filmes","end":""},{"old":"/filmes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['filmes.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
