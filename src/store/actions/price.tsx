import axiosInstance from '../../axios.config'
import {
  GetMGBPriceRequest,
  GetMGBPriceSuccess,
  GetMGBPriceError,
  GetBTCPriceRequest,
  GetBTCPriceSuccess,
  GetBTCPriceError,
} from './action.types'
import { Dispatch } from 'redux'
import { priceApiEndPoints, MGBPriceData } from '../../common/consts'

export const getMGBPrice =
  () => async (dispatch: Dispatch<GetMGBPriceRequest | GetMGBPriceSuccess | GetMGBPriceError>) => {
    try {
      dispatch({
        type: 'GET_MGB_PRICE_REQUEST',
        payload: {},
      } as GetMGBPriceRequest)

      const response = await axiosInstance.post<any>(priceApiEndPoints.MGB.api, priceApiEndPoints.MGB.req)

      console.log(response)
      const { Success } = response.data
      if (Success === true) {
        const { Data } = response.data
        dispatch({
          type: 'GET_MGB_PRICE_SUCCESS',
          payload: {
            MGBPrice: Data.Price || MGBPriceData.PRICE,
            MGBPriceChange: Data.Percent || MGBPriceData.PERCENT,
            MGBPriceDiff: Data.PriceDiff || MGBPriceData.PRICE_DIFF,
          },
        } as GetMGBPriceSuccess)
      } else {
        const { Error } = response.data
        dispatch({
          type: 'GET_MGB_PRICE_ERROR',
          payload: {
            error: Error.Msg,
            MGBPrice: MGBPriceData.PRICE,
            MGBPriceChange: MGBPriceData.PERCENT,
            MGBPriceDiff: MGBPriceData.PRICE_DIFF,
          },
        } as GetMGBPriceError)
      }

      //temporary dispatch without api, will be replaced after api integrated

      // dispatch({
      //   type: 'GET_MGB_PRICE_SUCCESS',
      //   payload: {
      //     MGBPrice: 1.187,
      //     MGBPriceChange: 9.45,
      //   },
      // } as GetMGBPriceSuccess)
    } catch (error: any) {
      dispatch({
        type: 'GET_MGB_PRICE_ERROR',
        payload: {
          error: error.message,
          MGBPrice: MGBPriceData.PRICE,
          MGBPriceChange: MGBPriceData.PERCENT,
          MGBPriceDiff: MGBPriceData.PRICE_DIFF,
        },
      } as GetMGBPriceError)
    }
  }

export const getBTCPrice =
  () => async (dispatch: Dispatch<GetBTCPriceRequest | GetBTCPriceSuccess | GetBTCPriceError>) => {
    try {
      dispatch({
        type: 'GET_BTC_PRICE_REQUEST',
        payload: {},
      } as GetBTCPriceRequest)

      // fetch btc data
      axiosInstance
        .get(priceApiEndPoints.BTC.api)
        .then(function (response: any) {
          // handle success
          console.log(response.data.data.amount)
          let btcToUsd = response.data.data.amount
          dispatch({
            type: 'GET_BTC_PRICE_SUCCESS',
            payload: {
              BTCPrice: btcToUsd,
            },
          } as GetBTCPriceSuccess)
        })
        .catch(function (error: any) {
          // handle error
          dispatch({
            type: 'GET_BTC_PRICE_ERROR',
            payload: {
              error: error.message,
            },
          } as GetBTCPriceError)
        })
    } catch (error: any) {
      dispatch({
        type: 'GET_BTC_PRICE_ERROR',
        payload: {
          error: error.message,
        },
      } as GetBTCPriceError)
    }
  }
