import React from 'react'
import { connect, useSelector } from 'react-redux'
// import FileBase from 'react-file-base64'
import { AppState } from '../../../../../store/configureStore'

import { createToken, updateToken } from '../../../../../store/actions/token'
import {
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from '@material-ui/core'

interface createTokenProps {
  createToken: (data: any) => void
  updateToken: (data: any) => void
  clearData: () => void
  handleClose: () => void
  id: any
  setCurrentId: any
  open: any
  data: any
  setData: any
  initialState: any
}

function KeepMountedModal({
  createToken,
  id,
  open,
  data,
  setData,
  initialState,
  handleClose,
  clearData,
  updateToken,
}: createTokenProps) {

  const tokenDetails = useSelector((state: AppState) =>
    id ? state.token.getTokenInfos.find((c: any) => c._id === id) : null,
  )

  React.useEffect(() => {
    if (tokenDetails) setData(tokenDetails)
  }, [tokenDetails, setData])

  const onSubmit = async (e: any): Promise<void> => {
    console.log(data.selectedImage)
    e.preventDefault()
    handleClose()
    if (id === 0) createToken(data)
    else updateToken(data)
    clearData()
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        setData(initialState)
        handleClose()
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Contact Details</DialogTitle>
      <DialogContent>
        <DialogContentText>{`To ${id === 0 ? 'add' : 'update'} your contact details from here`}</DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="text"
          fullWidth
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="name"
          fullWidth
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="contract"
          label="Contract"
          type="text"
          fullWidth
          value={data.contract}
          onChange={(e) => setData({ ...data, contract: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="official"
          label="Official"
          type="text"
          fullWidth
          value={data.official}
          onChange={(e) => setData({ ...data, official: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="logo"
          label="Logo"
          type="text"
          fullWidth
          value={data.logo}
          onChange={(e) => setData({ ...data, logo: e.target.value })}
        />
        {/* <div>
          <CloudUploadIcon />
          <FileBase type="file" multiple={false} onDone={(base64) => setData({ ...data, selectedImage: base64 })} />
        </div> */}
        <TextField
          // autoFocus
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="officialcon"
          label="Officialcon"
          type="text"
          fullWidth
          value={data.officialcon}
          onChange={(e) => setData({ ...data, officialcon: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="blog"
          label="Blog"
          type="text"
          fullWidth
          value={data.blog}
          onChange={(e) => setData({ ...data, blog: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="reddit"
          label="Reddit"
          type="text"
          fullWidth
          value={data.reddit}
          onChange={(e) => setData({ ...data, reddit: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="slack"
          label="Slack"
          type="text"
          fullWidth
          value={data.slack}
          onChange={(e) => setData({ ...data, slack: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="facebook"
          label="Facebook"
          type="text"
          fullWidth
          value={data.facebook}
          onChange={(e) => setData({ ...data, facebook: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="twitter"
          label="Twitter"
          type="text"
          fullWidth
          value={data.twitter}
          onChange={(e) => setData({ ...data, twitter: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="bitcoin"
          label="Bitcoin"
          type="text"
          fullWidth
          value={data.bitcoin}
          onChange={(e) => setData({ ...data, bitcoin: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="github"
          label="Github"
          type="text"
          fullWidth
          value={data.github}
          onChange={(e) => setData({ ...data, github: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="telegram"
          label="Telegram"
          type="text"
          fullWidth
          value={data.telegram}
          onChange={(e) => setData({ ...data, telegram: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="whitepaper"
          label="Whitepaper"
          type="text"
          fullWidth
          value={data.whitepaper}
          onChange={(e) => setData({ ...data, whitepaper: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="ticker"
          label="Ticker"
          type="text"
          fullWidth
          value={data.ticker}
          onChange={(e) => setData({ ...data, ticker: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="comment"
          label="Comment"
          type="text"
          fullWidth
          value={data.comment}
          onChange={(e) => setData({ ...data, comment: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          onClick={() => {
            setData(initialState)
            handleClose()
          }}
        >
          Close
        </Button>
        <Button color="primary" onClick={onSubmit}>
          {`${id === 0 ? 'Add' : 'Update'} TokenInfo`}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default connect(null, { createToken, updateToken })(KeepMountedModal)
