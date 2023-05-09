export interface FPStateIdle {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'IDLE'
  ctx: {}
  data?: any
}

export interface FPStateFetch {
  loading: true
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'FETCH'
  ctx: {
    payload: any
    url: string
  }
  data?: any
}

export interface FPStateSuccess {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'SUCCESS'
  ctx: {
    url: string
  }
  data?: any
}
export interface FPStateError {
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
