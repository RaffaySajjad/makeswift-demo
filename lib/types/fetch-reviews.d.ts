export interface FRStateIdle {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'IDLE'
  ctx: {}
  data?: any
}

export interface FRStateFetch {
  loading: true
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'FETCH'
  ctx: {
    url: string
  }
  data?: any
}

export interface FRStatePostVote {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'POST_VOTE'
  ctx: {
    url: string
    stampedUrl: string
    vote: number
    reviewId: string
    stampedApiKey: string
  }
  data?: any
}

export interface FRStateSuccess {
  loading: false
  tries: number
  mode: 'ONE_TIME' | 'RETRY'
  state: 'SUCCESS'
  ctx: {
    url: string
  }
  data?: any
}
export interface FRStateError {
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
