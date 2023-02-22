import { AppActionTypes } from '../actions/action.types'

const initialState: AdminState = {
  requestLogStatisticsData: {},
  requestLogStatisticsLoading: false,
  requestLogStatisticsError: '',
  extractRouterLoading: false,
  extractRouterSuccess: false,

  requestFeedbackData: {},
  requestFeedbackCount: 0,
  requestFeedbackError: '',
  requestFeedbackLoading: false,
  requestFeedbackSuccess: false,


  feedbackStatus: null,
  sendMessageError: '',
  deleteMessageError: '',

  nameTaggingData: {},
  nameTaggingCount: 0,
  nameTaggingError: '',
  nameTaggingLoading: false,
  nameTaggingSuccess: false,
}

export interface AdminState {
  requestLogStatisticsData: object
  requestLogStatisticsLoading: boolean
  requestLogStatisticsError: string
  extractRouterLoading: boolean
  extractRouterSuccess: boolean

  requestFeedbackData: object
  requestFeedbackCount: number
  requestFeedbackError: string
  requestFeedbackLoading: boolean
  requestFeedbackSuccess: boolean

  feedbackStatus: string
  sendMessageError: string
  deleteMessageError: string

  nameTaggingData: object,
  nameTaggingCount: number,
  nameTaggingError: string,
  nameTaggingLoading: boolean,
  nameTaggingSuccess: boolean,
}

const adminReducer = (state: AdminState = initialState, action: AppActionTypes): AdminState => {
  switch (action.type) {
    case 'GET_REQUEST_LOG_STATISTICS_REQUEST':
      return {
        ...state,
        requestLogStatisticsLoading: true,
        requestLogStatisticsError: '',
      }

    case 'GET_REQUEST_LOG_STATISTICS_SUCCESS':
      return {
        ...state,
        requestLogStatisticsLoading: false,
        requestLogStatisticsError: '',
        requestLogStatisticsData: action.payload.data,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ERROR':
      return {
        ...state,
        requestLogStatisticsLoading: false,
        requestLogStatisticsError: action.payload.error,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ANALYZE_REQUEST':
      return {
        ...state,
        extractRouterLoading: true,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR':
      return {
        ...state,
        extractRouterLoading: false,
        extractRouterSuccess: false,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ANALYZE_SUCCESS':
      return {
        ...state,
        extractRouterLoading: false,
        extractRouterSuccess: true,
      }
    case 'GET_FEEDBACKS_REQUEST':
      return {
        ...state,
        requestFeedbackLoading: true,
      }
    case 'GET_FEEDBACKS':
      return {
        ...state,
        requestFeedbackData: action.payload.data,
        requestFeedbackCount: action.payload.totalCount,
        requestFeedbackLoading: false,
        requestFeedbackSuccess: true,
      }
    case 'GET_FEEDBACKS_ERROR':
        return {
          ...state,
          nameTaggingLoading: false,
        }

    case 'GET_NAME_TAGGING_REQUEST':
      return {
        ...state,
        nameTaggingLoading: true,
      }
    case 'GET_NAME_TAGGING':
      return {
        ...state,
        nameTaggingData: action.payload.data,
        nameTaggingCount: action.payload.totalCount,
        nameTaggingLoading: false,
        nameTaggingSuccess: true,
      }
    case 'GET_NAME_TAGGING_ERROR':
        return {
          ...state,
          nameTaggingLoading: false,
        } 

    case 'GET_CONTRACT_INFO_SUCCESS':
      return {
        ...state,
        requestFeedbackData: {},
        requestFeedbackLoading: false,
        requestFeedbackError: action.payload.error,
      }
    case 'SEND_MESSAGE_REQUEST':
      return {
        ...state,
        feedbackStatus: null
      }
    case 'SEND_MESSAGE_SUCCESS':
      return {
        ...state,
        feedbackStatus: action.payload.status
      }
    case 'SEND_MESSAGE_ERROR':
      return {
        ...state,
        sendMessageError: action.payload.error,
        feedbackStatus: null
      }
    case 'DELETE_MESSAGE_REQUEST':
      return {
        ...state,
        feedbackStatus: null,
      }
    case 'DELETE_MESSAGE_SUCCESS':
      return {
        ...state,
        feedbackStatus: action.payload.status
      }
    case 'DELETE_MESSAGE_ERROR':
      return {
        ...state,
        deleteMessageError: action.payload.error,
        feedbackStatus: null,
      }
    default:
      return state
  }
}

export default adminReducer
