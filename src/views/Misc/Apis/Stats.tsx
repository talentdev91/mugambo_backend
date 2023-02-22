import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { CodePaper } from './components/CodePaper'
import { StyledWrappedLink } from './styles'

export const Stats: React.FC = () => {
  return (
    <div>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get Total Supply of MGB on the Mugambo</Typography>
          <Box mt={2} mb={2}>
            <CodePaper>
              <StyledWrappedLink
                href="https://api.mgbscan.com/api?module=stats&action=mgbsupply&apikey=YourApiKeyToken"
                underline="none"
              >
                https://api.mgbscan.com/api?module=stats&action=mgbsupply&apikey=YourApiKeyToken
              </StyledWrappedLink>
            </CodePaper>
          </Box>
          <Typography variant="body2">
            (Result returned in Wei, to get value in MGB divide the ResultAbove/1000000000000000000)
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">Get Validators list on the Mugambo</Typography>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="https://api.mgbscan.com/api?module=stats&action=validators&apikey=YourApiKeyToken"
                underline="none"
              >
                https://api.mgbscan.com/api?module=stats&action=validators&apikey=YourApiKeyToken
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
