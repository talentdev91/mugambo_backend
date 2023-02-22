import React from 'react'
import { connect } from 'react-redux'
import { Typography, Grid } from '@material-ui/core'
import { getTopNetwork } from '../../../../../store/actions/statistics'
import { AppState } from '../../../../../store/configureStore'
import CustomTokensTable from './components/CustomTable/CustomTokensTable'

// Import Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useStyles, StyledTooltip } from './style'

export const tokenCols = {
  col1: 'Rank',
  col2: 'Address',
  col3: 'Quantity (Token)',
  col4: 'Percentage',
}

interface topNetworksProps {
  getTopNetwork: () => void
  topAccountsByTxnCountAndGasUsed: any
  loading: boolean
}

const makeTableData = (topTokensInDurationWithType: any, dataType: string) => {
  var rows = []
  for (let i = 0; i < topTokensInDurationWithType.length; i++) {
    let row = { col1: 0, col2: '', col3: '', url: '', imgUrl: './components/spookyswap-boo_32.png' }
    row['col1'] = i + 1
    row['col2'] = topTokensInDurationWithType[i]['_id']
    row['col3'] = topTokensInDurationWithType[i][dataType]
    row['url'] = '/address/' + topTokensInDurationWithType[i]['_id']
    rows.push(row)
  }
  return rows
}

const makePieChartByTxnOption = (topAccountsByTxnCountAndGasUsed: string | any[]) => {
  var pieChartData = [],
    totalGasOfTopAccounts = 0
  for (let i = 0; i < topAccountsByTxnCountAndGasUsed.length; i++) {
    totalGasOfTopAccounts += topAccountsByTxnCountAndGasUsed[i]['txnCount']
    pieChartData.push({
      name: '#' + i.toString(),
      address: topAccountsByTxnCountAndGasUsed[i]['_id'],
      gasUsed: topAccountsByTxnCountAndGasUsed[i]['txnCount'],
      y: 0,
    })
  }

  for (let i = 0; i < topAccountsByTxnCountAndGasUsed.length; i++) {
    pieChartData[i].y = (pieChartData[i].gasUsed * 100) / totalGasOfTopAccounts
  }

  var options = {
    chart: {
      type: 'pie',
      events: {
        render() { },
      },
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'Binace-Peg Ethereum Token Top 25 Token Holders',
    },
    subtitle: {
      text: 'Source: mugambo.com',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
      },
    },
    series: [
      {
        type: 'pie',
        data: pieChartData,
        tooltip: {
          pointFormat:
            '<b>Top Accounts By Txn Count</b><br> <table><tbody><tr><td>Address: </td><td><b>{point.address}</b></td></tr></tbody></table><br><br><table><tbody><tr><td>Txn Count: </td><td><b>{point.gasUsed}</b></td></tr></tbody></table> <br>',
        },
      },
    ],
  }
  return options
}

function Network({ getTopNetwork, topAccountsByTxnCountAndGasUsed, loading }: topNetworksProps) {
  const classes = useStyles()

  const rows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []

  const [topAccountsByTxnCountSeven, setTopAccountsByTxnCountSeven] = React.useState(rows)
  const [pieChartTxnOption7, setPieChartTxnOption7] = React.useState({})

  React.useEffect(() => {
    var txnCountRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var pieChartTxnOptions7 = {}
    getTopNetwork()

    if (!loading) {
      txnCountRows7 = makeTableData(topAccountsByTxnCountAndGasUsed['week']['sortByTxnCount'], 'txnCount')
      pieChartTxnOptions7 = makePieChartByTxnOption(topAccountsByTxnCountAndGasUsed['week']['sortByTxnCount'])
    }

    setTopAccountsByTxnCountSeven(txnCountRows7)
    setPieChartTxnOption7(pieChartTxnOptions7)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, getTopNetwork])

  return !loading ? (
    <div className={classes.container}>
      <div className={classes.header}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h6" color="textPrimary">
              Binance-Peg Ethereum Token Token Holders
            </Typography>
            {/* <StyledTooltip title="Wrapped tokens that are backed by tokens vaults in Binance" arrow placement="top">
              <span className={classes.holdpietitle}>
                Binance-Peg &nbsp;&nbsp;<i className="fas fa-info-circle"></i>
              </span>
            </StyledTooltip> */}
          </Grid>
          <Grid item xs={5} className={classes.headerLink}>
            <nav className={classes.navStyle}>
              <a href="/home/" className={classes.navLinkStyle}>Home</a> &nbsp;&nbsp;/&nbsp;&nbsp;
              <a href="/tokens/" className={classes.navLinkStyle}>Binance-Peg Ethereum Token</a> &nbsp;&nbsp;/&nbsp;&nbsp;
              <a>Token Holders Chart</a>
            </nav>
          </Grid>
        </Grid>
      </div>
      <div className={classes.chartTable}>
        <div className={classes.fiterTable}>
          <i className="fas fa-filter"></i>&nbsp;
          Range: &nbsp;
          <select className={classes.selectStyle}>
            <option value="3">Top 3</option>
            <option value="5">Top 5</option>
            <option value="10">Top 10</option>
            <option value="25">Top 25</option>
            <option value="50">Top 50</option>
            <option selected value="100">Top 100</option>
            <option value="250">Top 250</option>
            <option value="500">Top 500</option>
          </select>
        </div>
        <div className={classes.table}>
          <div className={classes.chartTitle}>
            <Grid container>
              <Grid item xs={6} className={classes.chartTitleEther}>
                <i className="far fa-lightbulb" style={{color: '#e84142'}}></i>
                &nbsp;The top 25 holders collectively own 80.07%<br></br>
                <span>(1,124,992.01 Tokens) of Binance-Peg Ethereum Token</span>
              </Grid>
              <Grid item xs={6} className={classes.chartTitleHolder}>
                <i className="far fa-lightbulb"></i>
                &nbsp;Token Total Supply: 1,405,000.00 Token &nbsp;|&nbsp; Total <br></br>
                <span>Token Holders: 931,901</span>
              </Grid>
            </Grid>
          </div>
          <div className={classes.chartContent}>
            <Grid item xs={12} className={classes.chart}>
              <HighchartsReact highcharts={Highcharts} options={pieChartTxnOption7} />
            </Grid>
            <div className={classes.resultSupply}>
              <p>
                (A total of 1,124,793.81 tokens held by the top 25 accounts from the total supply of 1,405,000.00 token)
                <br></br>
                <br></br>
              </p>
            </div>
            <Grid item xs={12}>
              <CustomTokensTable cols={tokenCols} rows={topAccountsByTxnCountSeven} />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Typography variant="h6" color="textPrimary" className={classes.loading}>
      Loading...
    </Typography>
  )
}

const mapStateToProps = (state: AppState) => ({
  topAccountsByTxnCountAndGasUsed: state.statistics.topAccountsByTxnCountAndGasUsed,
  loading: state.statistics.loadingNetwork,
})

export default connect(mapStateToProps, { getTopNetwork })(Network)
