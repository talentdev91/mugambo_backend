import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexWrap: 'wrap',
      paddingTop: '3.25rem!important',
      paddingBottom: '3.25rem!important',
      maxWidth: '100%',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    signup: {
      paddingTop: '3.25rem!important',
      display: 'flex',
      flexWrap: 'wrap',
    },
    registerOk: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#e84142!important' : '#1b4f72'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(232,65,66,.1)!important' : '#d6eaf8'}`,
      borderColor: '#b8f0e6',
      position: 'relative',
      padding: '.75rem',
      marginBottom: '1rem',
      marginTop: '20px',
      border: '0 solid transparent',
      borderRadius: '.35rem',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    successTxt: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.typography.body1.color,
      marginBottom: '50px',
    },
    content: {
      marginLeft: 'auto!important',
      marginRight: 'auto!important',
      width: '50%!important',
      [theme.breakpoints.down('md')]: {
        width: '85%!important',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%!important',
      },
      [theme.breakpoints.down('xs')]: {
        width: '95%!important',
      },
    },
    margin: {
      marginTop: '60px',
    },
    inputField: {
      '& input': {
        width: '100%',
        fontSize: '.875rem',
        padding: '0.6rem 1.125rem',
        borderRadius: '5px',
        color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
        border: `1px solid ${theme.palette.secondary.light}`,
      },
      '&.Mui-focused': {
        '& input': {
          boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
          border: `1px solid ${theme.palette.info.light}`,
          outline: 'none',
        },
      },
    },
    textField: {
      width: '100%',
      marginBottom: '1rem',
    },
    titletext: {
      color: theme.palette.info.main,
      fontWeight: 400,
      fontSize: '1.53125rem',
      marginBottom: 10,
      marginTop: 0,
    },
    subtitle: {
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: theme.palette.primary.contrastText,
      marginTop: 0,
      '& .MuiTypography-root': {
        color: theme.palette.primary.contrastText,
      },
    },
    label: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.typography.body1.color,
      marginBottom: '.5rem',
      marginLeft: 0,
    },
    error: {
      color: 'red',
      marginLeft: 0,
    },

    button: {
      fontSize: '.76563rem',
      padding: '.6rem 1.125rem',
      fontWeight: 500,
      fontFamily: 'inherit',
      height: '40px',
      margin: theme.spacing(1),
      position: 'relative',
      marginRight: 0,
      marginLeft: 'auto',
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.info.contrastText,
      '&:hover': {
        color: theme.palette.info.contrastText,
        backgroundColor: theme.palette.info.light,
      },
    },

    submitButton: {
      padding: '.6rem 1.125rem',
      fontSize: '.76563rem',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(232,65,66,.2)' : '#e84142'}`,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(232,65,66,.2)' : '#e84142'}`,
      boxShadow: '0 0 0 transparent',
      height: '40px',
      borderRadius: '0.35rem',
      margin: theme.spacing(1),
      position: 'relative',
      marginRight: 0,
      marginLeft: 'auto',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#e84142',
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },

    password: {
      display: 'flex',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    forgot: {
      textAlign: 'right',
      marginLeft: 'auto',
      marginRight: 0,
      cursor: 'pointer',
      fontSize: '.76563rem!important',
      textDecoration: 'none',
    },
    forgotText: {
      color: theme.palette.primary.contrastText,
      borderBottom: '1px dashed #97a4af',
      '&:hover': {
        color: theme.palette.info.main,
      },
    },
    subtitle3: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: 0,
      marginTop: '0px!important',
      marginBottom: '0px!important',
      color: theme.palette.text.primary,
    },
    checkbox: {
      padding: 0,
      marginRight: '10px',
      color: theme.palette.info.light,
    },
    checkcolor: {
      color: theme.palette.info.light,
      '&.Mui-checked': {
        color: theme.palette.info.main,
      },
    },
    verify: {
      color: '#73231d',
      backgroundColor: '#f8dad7',
      borderColor: '#f6cbc7',
      position: 'relative',
      padding: '.75rem',
      marginBottom: '1rem',
      border: '0 solid transparent',
      borderRadius: '.35rem',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    resend: {
      textDecoration: 'none',
      color: '#e84142',
      cursor: 'pointer',
      '&:hover': {
        color: '#0150e3',
      },
    },
    contactHeader: {
      paddingBottom: '.75rem!important',
      paddingTop: '.75rem!important',
      alignItems: 'center',
      justifyContent: 'space-between!important',
      display: 'flex',
      borderBottom: '1px solid #e7eaf3!important',
    },
    conHeadtxt: {
      color: '#4a4f55',
      fontWeight: 400,
      fontSize: '1.3125rem',
      margin: 0,
    },
    conRightTxt: {
      color: '#6c757e',
      fontSize: '80%',
      fontWeight: 400,
    },
    contactContent: {
      paddingBottom: '3.25rem',
      paddingTop: '.75rem',
    },
    contactForm: {
      padding: '.75rem',
      marginBottom: 0,
      backgroundcolor: '#fff',
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: theme.palette.text.primary,
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    contactFormCon: {
      padding: '.75rem',
    },
    contactFormLabel: {
      marginBottom: '1rem',
      marginTop: 0,
      cursor: 'default',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#1e2022',
    },
    contactSelect: {
      width: '50%',
      fontSize: '.875rem',
      fontWeight: 400,
      color: '#1e2022',
      verticalAlign: 'middle',
      background: '#fff',
      border: '1px solid #d5dae2',
      borderRadius: '.35rem',
    },
    contactSubTxt: {
      color: '#6c757e',
      fontSize: '.875rem',
      fontWeight: 400,
    },
    contactLink: {
      color: '#77838f',
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '.875rem',
      '&:hover': {
        color: '#0150e3',
      },
    },
    contactTopLink: {
      padding: '.75rem',
      margin: 0,
      marginBottom: 0,
      borderBottom: '1px solid #e7eaf3',
    },
    contactLastLink: {
      padding: '.75rem',
      margin: 0,
      marginBottom: '30px',
    },
    contactLastLink1: {
      padding: '.75rem',
      margin: 0,
    },
    contactPopper: {
      marginLeft: '.25rem!important',
      color: '#fff',
      backgroundColor: '#00c9a7',
      padding: '.25em .4em',
      fontSize: '75%',
      fontWeight: 700,
      textAlign: 'center',
      verticalAlign: 'baseline',
      borderRadius: '.25rem',
    },
    accountContent: {
      paddingBottom: '3.25rem',
      paddingTop: '2rem',
    },
    accountLink: {
      fontSize: '.80938rem',
      padding: '.75rem',
      color: '#6c757e',
      fontWeight: 400,
      '&:hover': {
        color: '#0150e3',
      },
    },
    profileSelect: {
      cursor: 'pointer',
      fontSize: '.65625rem',
      padding: '.3rem .6rem',
      borderRadius: '.25rem',
      marginLeft: '.25rem',
      color: '#fff',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(232,65,66,.2)' : theme.palette.info.main}`,
      border: `0.5px solid rgba(232,65,66,.2)`,
      textAlign: 'center',
      verticalAlign: 'middle',
      '&:hover': {
        backgroundColor: theme.palette.info.main,
        boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
      },
      display: 'inline-block',
    },
    profileCancel: {
      cursor: 'pointer',
      fontSize: '.765625rem',
      padding: '.3rem .6rem',
      borderRadius: '.25rem',
      marginLeft: '.25rem',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'inline-block',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
      border: 'transparent',
      color: '#fff',
      '&:hover': {
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
    },
    profileDelete: {
      cursor: 'pointer',
      fontSize: '.765625rem',
      padding: '.3rem .6rem',
      borderRadius: '.25rem',
      marginLeft: '.25rem',
      color: '#fff',
      backgroundColor: '#de4437',
      borderColor: '#de4437',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'inline-block',
      '&:hover': {
        boxShadow: '0 4px 11px rgb(229 118 146 / 35%)',
      },
    },
    profileLastGrid: {
      marginBottom: '15px',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#1e2022',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    tableTop: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
    },
    dialog: {
      '& .MuiDialog-paper': {
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      },
    },
    modalSubtitle: {
      color: theme.palette.text.primary,
      fontSize: '.875rem',
    },
    linkTerms: {
      color: '#8c98a4',
    },
    watchListForm: {
      color: theme.typography.body1.color,
      fontSize: '.875rem',
      marginBottom: '1.5rem',
    },
    apiPlan: {
      fontSize: '.875rem',
      color: theme.typography.body1.color,
      padding: '10px',
    },
  }),
)

export default useStyles

export const StyledVerticalTabs = withStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '.5rem',
    textAlign: 'left',
    width: '100%',
  },
  indicator: {
    background: 'none',
  },
}))(Tabs)

export const StyledVerticalTab = withStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,
    padding: '0px 20px',
    textAlign: 'left',
    maxWidth: '100%',
    minHeight: 42,
    fontSize: '0.80938rem',
    color: theme.palette.primary.contrastText,
    fontWeight: 400,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    opacity: 1,
    '&:hover': {
      color: theme.palette.info.main,
    },
    '&$selected': {
      color: 'white',
      backgroundColor: theme.palette.info.main,
    },
    '&:focus': {},
    '& .MuiTab-wrapper': {
      display: 'block',
    },
  },
  selected: {},
}))(Tab)
