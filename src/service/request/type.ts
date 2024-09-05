import type {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse
} from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface HYInterceptors<T = any> extends AxiosRequestConfig {
  interceptor?: HYInterceptors<T>
  headers?: AxiosRequestHeaders
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>
}
