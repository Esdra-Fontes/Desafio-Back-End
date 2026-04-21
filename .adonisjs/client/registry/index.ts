/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
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
  'categorias.index': {
    methods: ["GET","HEAD"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.index']['types'],
  },
  'categorias.store': {
    methods: ["POST"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.store']['types'],
  },
  'categorias.show': {
    methods: ["GET","HEAD"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.show']['types'],
  },
  'categorias.update': {
    methods: ["PUT","PATCH"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.update']['types'],
  },
  'categorias.destroy': {
    methods: ["DELETE"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.destroy']['types'],
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
