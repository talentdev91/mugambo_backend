import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { CodePaper } from './components/CodePaper'
import { StyledWrappedLink } from './styles'

export const PublicRPCNodes: React.FC = () => {
  return (
    <div>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">MGB RPC Nodes</Typography>
          <Box mt={2} mb={2}>
            <CodePaper>
              <pre style={{ overflow: 'auto' }}>
                MGB RPC Endpoints (ChainID 250):<br></br>
                <br></br>http://65.108.15.158:80
              </pre>
            </CodePaper>
          </Box>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">Usage Notes:</Typography>
          <Box mt={2}>
            <CodePaper>
              <pre style={{ overflow: 'auto' }}>
                Start<br></br>
                You can start the HTTP JSON-RPC with the --rpc flag<br></br>
                <br></br>
                ## mainnet<br></br>
                geth attach https://rpcapi.mugambo.network<br></br>
                <br></br>
                JSON-RPC methods<br></br>
                Please refer to this wiki page or use Postman:<br></br>
                <StyledWrappedLink
                  href="https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest"
                  underline="none"
                >
                  https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest
                </StyledWrappedLink>
              </pre>
            </CodePaper>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
