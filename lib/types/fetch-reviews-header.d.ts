export interface FRSStateIdle {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'IDLE'
  ctx: {}
  data?: any
}

export interface FRSStateFetch {
  loading: true
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'FETCH'
  ctx: {
    url: string
    keywordsUrl?: string
    productIds?: string[]
  }
  data?: any
}

export interface FRSStateSuccess {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'SUCCESS'
  ctx: {
    url: string
  }
  data?: any
}
export interface FRSStateError {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'ERROR'
  ctx: {
    error: string
    errorStatus?: string
  }
  data?: any
}
