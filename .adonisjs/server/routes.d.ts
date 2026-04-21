import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'filmes.index': { paramsTuple?: []; params?: {} }
    'filmes.store': { paramsTuple?: []; params?: {} }
    'filmes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'filmes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'filmes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'filmes.index': { paramsTuple?: []; params?: {} }
    'filmes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'filmes.index': { paramsTuple?: []; params?: {} }
    'filmes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'filmes.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'filmes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'filmes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'filmes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}