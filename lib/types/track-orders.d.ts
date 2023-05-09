export interface TOStateIdle {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'IDLE'
  ctx: {}
  data?: any
}

export interface TOStateFetch {
  loading: true
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'FETCH'
  ctx: {
    url: string
  }
  data?: any
}

export interface TOStateSuccess {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'SUCCESS'
  ctx: {
    url: string
  }
  data?: any
}
export interface TOStateError {
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
