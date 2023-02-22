import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { Box } from '@material-ui/core'
//components
import Table1 from './components/MaterialTable'
import Modal from './components/Modal'

import { getTokenInfo } from '../../../../store/actions/token'

interface ERC20TokensProps {
  getTokenInfo: () => void
  getTokenInfos: any
  success: any
  create: any
  update: any
  manySucess: any
}

function ERC20Tokens({ getTokenInfo, getTokenInfos, success, create, update, manySucess }: ERC20TokensProps) {
  const initialState = {
    email: '',
    name: '',
    contract: '',
    official: '',
    logo: '',
    description: '',
    officialcon: '',
    blog: '',
    reddit: '',
    slack: '',
    facebook: '',
    twitter: '',
    bitcoin: '',
    github: '',
    telegram: '',
    whitepaper: '',
    ticker: '',
    comment: '',
  }

  const [data, setData] = React.useState(initialState)

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setCurrentId(0)
  }

  const clearData = () => {
    setData(initialState)
    setCurrentId(0)
  }

  const [currentId, setCurrentId] = React.useState(0)
  console.log(update)
  React.useEffect(() => {
    console.log('I am clicked')
    getTokenInfo()
    if (create) {
      window.alert('Created tokenInfo successfully')
    }
    if (success) {
      window.alert('Deleted Token successfully')
    }
    if (update) {
      window.alert('Updated Token successfully')
    }
  }, [getTokenInfo, success, create, update, manySucess])
  return (
    <div style={{ marginTop: 12 }}>
      <Box mb="12px" display="flex" justifyContent="space-between">
        <Modal
          id={currentId}
          setCurrentId={setCurrentId}
          open={open}
          data={data}
          clearData={clearData}
          setData={setData}
          handleClose={handleClose}
          initialState={initialState}
        />
      </Box>
      <Table1 rows={getTokenInfos} setCurrentId={setCurrentId} handleClickOpen={handleClickOpen} />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  success: state.token.status,
  manySucess: state.token.manySuccess,
  create: state.token.createSuccess,
  update: state.token.updateSuccess,
  getTokenInfos: state.token.getTokenInfos,
})
export default connect(mapStateToProps, { getTokenInfo })(ERC20Tokens)
