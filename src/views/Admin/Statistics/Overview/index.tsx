import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { Box, Typography } from '@material-ui/core'
//components
import { getRequestLogStatistics } from '../../../../store/actions/admin'
import WorldMap from 'react-svg-worldmap'

interface Props {
  loading: boolean
  error: string
  data: any
  user: any
  getRequestLogStatistics: () => void
}

function Overview({ loading, error, data, user, getRequestLogStatistics }: Props) {
  React.useEffect(() => {
    getRequestLogStatistics()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name])

  const mapData = [
    { country: 'cn', value: 1389618778 }, // china
    { country: 'in', value: 1311559204 }, // india
    { country: 'us', value: 331883986 }, // united states
    { country: 'id', value: 264935824 }, // indonesia
    { country: 'pk', value: 210797836 }, // pakistan
    { country: 'br', value: 210301591 }, // brazil
    { country: 'ng', value: 208679114 }, // nigeria
    { country: 'bd', value: 161062905 }, // bangladesh
    { country: 'ru', value: 141944641 }, // russia
    { country: 'mx', value: 127318112 }, // mexico
  ]
  return (
    <div>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}></Grid>
      </Grid> */}
      <Box mt={2}>
        <Box>
          <Typography variant="h3">Requests</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Total Request counts: {data.totalRequestsCount}</Typography>
          <Typography variant="h6">Today's Request counts: {data.todayRequestsCount}</Typography>
        </Box>
        <Box mt={4} mb={2}>
          <Typography variant="h3">Top 10 countries that visit our site</Typography>
        </Box>
        <Box>
          <WorldMap
            color="green"
            title="Top 10 Countries visit our site"
            value-suffix="ips"
            size="xxl"
            data={mapData}
          />
        </Box>
      </Box>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.admin.requestLogStatisticsLoading,
  error: state.admin.requestLogStatisticsError,
  data: state.admin.requestLogStatisticsData,
  user: state.auth.user,
})
export default connect(mapStateToProps, { getRequestLogStatistics })(Overview)
