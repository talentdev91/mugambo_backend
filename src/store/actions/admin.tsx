import { authInstance } from '../../axios.config'
import axios from 'axios'
import {
  GetRequestLogStatisticsRequest,
  GetRequestLogStatisticsSuccess,
  GetRequestLogStatisticsError,
  GetRequestLogStatisticsAnalyzeRequest,
  GetRequestLogStatisticsAnalyzeError,
  GetRequestLogStatisticsAnalyzeSuccess,
  GetFeedbacksRquest,
  GetFeedbacks,
  GetFeedbacksError,
   GetNameTaggingRquest,
   GetNameTagging,
   GetNameTaggingError,
  SendMessageRequest,
  SendMessageSuccess,
  SendMessageError,
  DeleteMessageRequest,
  DeleteMessageSuccess,
  DeleteMessageError,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

// const getHeader = () => {
//   return {
//     headers: {
//       Authorization: `${localStorage.getItem('jwtToken')}`,
//     },
//   }
// }

export const getRequestLogStatistics =
  () =>
  async (
    dispatch: Dispatch<GetRequestLogStatisticsRequest | GetRequestLogStatisticsSuccess | GetRequestLogStatisticsError>,
  ) => {
    try {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_REQUEST',
        payload: {},
      } as GetRequestLogStatisticsRequest)

      const response = await authInstance.get<any>(`${BackendURL}/admin/listUserActivity`)

      const { success } = response.data
      if (success === true) {
        const { data } = response.data
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_SUCCESS',
          payload: {
            data: data,
          },
        } as GetRequestLogStatisticsSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_ERROR',
          payload: {
            error: error,
          },
        } as GetRequestLogStatisticsError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_ERROR',
        payload: {
          error: error.message,
        },
      } as GetRequestLogStatisticsError)
    }
  }

export const extractRouter =
  () =>
  async (
    dispatch: Dispatch<
      | GetRequestLogStatisticsAnalyzeRequest
      | GetRequestLogStatisticsAnalyzeError
      | GetRequestLogStatisticsAnalyzeSuccess
    >,
  ) => {
    console.log('extractRouter Action part')
    try {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_REQUEST',
        payload: {},
      } as GetRequestLogStatisticsAnalyzeRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/extractRouter`)

      const { success } = response.data
      if (success === true) {
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_SUCCESS',
          payload: {},
        } as GetRequestLogStatisticsAnalyzeSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR',
          payload: {
            error: error,
          },
        } as GetRequestLogStatisticsAnalyzeError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR',
        payload: {
          error: error.message,
        },
      } as GetRequestLogStatisticsAnalyzeError)
    }
  }
export const getFeedbacks =
  (page: any, rowsPerPage: any, type: number) =>
  async (
    dispatch: Dispatch<
      GetFeedbacksRquest | DeleteMessageRequest | SendMessageRequest | GetFeedbacks | GetFeedbacksError
    >,
  ) => {
    try {
      console.log(type)
      dispatch({
        type: 'GET_FEEDBACKS_REQUEST',
      } as GetFeedbacksRquest)

      dispatch({
        type: 'SEND_MESSAGE_REQUEST',
      } as SendMessageRequest)

      dispatch({
        type: 'DELETE_MESSAGE_REQUEST',
      } as DeleteMessageRequest)
      const response = await axios.get<any>(`${BackendURL}/admin/listAllUserFeedback/${type}/${page}/${rowsPerPage}`)

      const { success } = response.data
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'GET_FEEDBACKS',
          payload: {
            data: data.feedbacks,
            totalCount: data.totalCount,
          },
        } as GetFeedbacks)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_FEEDBACKS_ERROR',
          payload: {
            error: error,
          },
        } as GetFeedbacksError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_FEEDBACKS_ERROR',
        payload: {
          error: 'error',
        },
      } as GetFeedbacksError)
    }
  }

  export const getNameTagging =
  (page: any, rowsPerPage: any, type: number) =>
  async (
    dispatch: Dispatch<
      GetNameTaggingRquest | DeleteMessageRequest | SendMessageRequest | GetNameTagging | GetNameTaggingError
    >,
  ) => {
    try {
      console.log(type)
      dispatch({
        type: 'GET_NAME_TAGGING_REQUEST',
      } as GetNameTaggingRquest)
  
        const response = await axios.get<any>(`${BackendURL}/admin/listAllUserFeedback/${type}/${page}/${rowsPerPage}`)
  
      const { success } = response.data
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'GET_NAME_TAGGING',
          payload: {
            data: data.feedbacks,
            totalCount: data.totalCount,
          },
        } as GetNameTagging)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_NAME_TAGGING_ERROR',
          payload: {
            error: error,
          },
        } as GetNameTaggingError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_NAME_TAGGING_ERROR',
        payload: {
          error: 'error',
        },
      } as GetNameTaggingError)
    }
  }

export const sendMessage =
  (id: string, response: string) =>
  async (dispatch: Dispatch<SendMessageRequest | SendMessageSuccess | SendMessageError>) => {
    const req = {
      id: id,
      response: response,
    }
    try {
      dispatch({
        type: 'SEND_MESSAGE_REQUEST',
      } as SendMessageRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/sendFeedbackResponseEmailToUser`, req)

      const { success } = response.data
      if (success) {
        dispatch({
          type: 'SEND_MESSAGE_SUCCESS',
          payload: {
            status: '1',
          },
        } as SendMessageSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'SEND_MESSAGE_ERROR',
          payload: {
            error: error,
          },
        } as SendMessageError)
      }
    } catch (error: any) {
      dispatch({
        type: 'SEND_MESSAGE_ERROR',
        payload: {
          error: 'error',
        },
      } as SendMessageError)
    }
  }

export const deleteMessage =
  (selected: string) =>
  async (dispatch: Dispatch<DeleteMessageRequest | DeleteMessageSuccess | DeleteMessageError>) => {
    const req = {
      ids: selected,
    }
    console.log(req)
    try {
      dispatch({
        type: 'DELETE_MESSAGE_REQUEST',
      } as DeleteMessageRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/closeUserFeedbacks`, req)

      const { success } = response.data
      if (success) {
        dispatch({
          type: 'DELETE_MESSAGE_SUCCESS',
          payload: {
            status: '2',
          },
        } as DeleteMessageSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_MESSAGE_ERROR',
          payload: {
            error: error,
          },
        } as DeleteMessageError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_MESSAGE_ERROR',
        payload: {
          error: 'error',
        },
      } as DeleteMessageError)
    }
  }
