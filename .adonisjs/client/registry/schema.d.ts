/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'filmes.index': {
    methods: ["GET","HEAD"]
    pattern: '/filmes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['index']>>>
    }
  }
  'filmes.store': {
    methods: ["POST"]
    pattern: '/filmes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['store']>>>
    }
  }
  'filmes.show': {
    methods: ["GET","HEAD"]
    pattern: '/filmes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['show']>>>
    }
  }
  'filmes.update': {
    methods: ["PUT","PATCH"]
    pattern: '/filmes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['update']>>>
    }
  }
  'filmes.destroy': {
    methods: ["DELETE"]
    pattern: '/filmes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/filmes_controller').default['destroy']>>>
    }
  }
  'categorias.index': {
    methods: ["GET","HEAD"]
    pattern: '/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['index']>>>
    }
  }
  'categorias.store': {
    methods: ["POST"]
    pattern: '/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['store']>>>
    }
  }
  'categorias.show': {
    methods: ["GET","HEAD"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['show']>>>
    }
  }
  'categorias.update': {
    methods: ["PUT","PATCH"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['update']>>>
    }
  }
  'categorias.destroy': {
    methods: ["DELETE"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/Http/categorias_controller').default['destroy']>>>
    }
  }
}
