import { AppActionTypes } from '../actions/action.types'

const initialState: PriceState = {
  MGBPriceSuccessResponse: 0,
  MGBPriceChange: '+0%',
  MGBPriceDiff: 0,
  MGBPriceLoading: false,
  MGBPriceError: '',

  BTCPriceSuccessResponse: 0,
  BTCPriceLoading: false,
  BTCPriceError: '',
}

export interface PriceState {
  MGBPriceSuccessResponse: number
  MGBPriceChange: string
  MGBPriceDiff: number
  MGBPriceLoading: boolean
  MGBPriceError: string

  BTCPriceSuccessResponse: number
  BTCPriceLoading: boolean
  BTCPriceError: string
}

const priceReducer = (state: PriceState = initialState, action: AppActionTypes): PriceState => {
  switch (action.type) {
    case 'GET_MGB_PRICE_REQUEST':
      return {
        ...state,
        MGBPriceLoading: true,
        MGBPriceError: '',
      }

    case 'GET_MGB_PRICE_SUCCESS':
      return {
        ...state,
        MGBPriceLoading: false,
        MGBPriceError: '',
        MGBPriceSuccessResponse: action.payload.MGBPrice,
        MGBPriceChange: action.payload.MGBPriceChange,
        MGBPriceDiff: action.payload.PriceDiff,
      }

    case 'GET_MGB_PRICE_ERROR':
      return {
        ...state,
        MGBPriceLoading: false,
        MGBPriceError: action.payload.error,
        MGBPriceSuccessResponse: action.payload.MGBPrice,
        MGBPriceChange: action.payload.MGBPriceChange,
        MGBPriceDiff: action.payload.PriceDiff,
      }

    case 'GET_BTC_PRICE_REQUEST':
      return {
        ...state,
        BTCPriceLoading: true,
        BTCPriceError: '',
      }

    case 'GET_BTC_PRICE_SUCCESS':
      return {
        ...state,
        BTCPriceLoading: false,
        BTCPriceError: '',
        BTCPriceSuccessResponse: action.payload.BTCPrice,
      }

    case 'GET_BTC_PRICE_ERROR':
      return {
        ...state,
        BTCPriceLoading: false,
        BTCPriceError: action.payload.error,
      }

    default:
      return state
  }
}

export default priceReducer
