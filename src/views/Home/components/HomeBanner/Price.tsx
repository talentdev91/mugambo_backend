import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import Bluetool from './bluetooltip'

import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getMGBPrice, getBTCPrice } from '../../../../store/actions/price'
import { TOTAL_COIN_SUPPLY } from '../../../../config/config'
import { numberWithCommas } from '../../../../common/utils'
import Spinner from '../../../../components/Spinner/Spinner'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingRight: '1.5rem',
      paddingLeft: '1.5rem',
      borderRight: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
      lineHeight: 1,
      wordBreak: 'break-word',
      [theme.breakpoints.down('xs')]: {
        borderRight: 'none',
      },
    },
    '&a, a: hover': {
      textDecoration: 'none',
      color: 'blue',
      textDecorationColor: 'blue',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    divider: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
      margin: '1.6rem 0 ',
    },
    img: {
      width: ' 1.75rem',
      height: '1.75rem',
      marginRight: '10px',
    },
    text1: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
      fontSize: '.76563rem',
      alignSelf: 'end',
    },
    text2: {
      fontSize: '.9375rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      alignSelf: 'end',
      '&:hover': {
        color: '#3498db',
      },
    },
    text3: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
      fontSize: '.9375rem',
      marginLeft: '4px',
      alignSelf: 'end',
    },
    text4: {
      fontSize: '90%',
      color: '#00c9a7!important',
      marginLeft: '4px',
      alignSelf: 'end',
    },
    priceHigh: {
      fontSize: '80%',
      color: '#00c9a7!important',
      marginLeft: '4px',
      alignSelf: 'center',
    },
    priceLow: {
      fontSize: '80%',
      color: '#de4437!important',
      marginLeft: '4px',
      alignSelf: 'center',
    },
  }),
)

interface PriceProps {
  getMGBPrice: () => void
  getBTCPrice: () => void
  MGBPriceLoading: boolean
  MGBPriceError: string
  MGBPrice: number
  MGBPriceChange: string
  MGBPriceDiff: number
  BTCPriceLoading: boolean
  BTCPriceError: string
  BTCPrice: number
}

function Price({
  getMGBPrice,
  getBTCPrice,
  MGBPriceLoading,
  MGBPriceError,
  MGBPrice,
  MGBPriceChange,
  MGBPriceDiff,
  BTCPriceLoading,
  BTCPriceError,
  BTCPrice,
}: PriceProps) {
  const classes = useStyles()

  React.useEffect(() => {
    getMGBPrice()
    getBTCPrice()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // React.useEffect(() => {
  //   console.log('MGBPrice', MGBPrice)
  //   console.log('BTCPrice', BTCPrice)
  // }, [MGBPriceLoading, BTCPriceLoading])

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid>
          <img src="/images/Home/HomeBanner/price.svg" className={classes.img} alt="price" />
        </Grid>

        <Grid>
          <Typography className={classes.text1}>MGB Price</Typography>

          <Bluetool title="View Historical MGB Price">
            {
              MGBPriceLoading || BTCPriceLoading ?
              (
                <div style={{height: '13px'}}>
                  <Spinner />
                </div>
              )
              :
              (
                <div style={{ display: 'flex', cursor: 'pointer' }}>
                  <Typography className={classes.text2}>
                    {!MGBPriceLoading ? `$${Math.round(MGBPrice * 1000) / 1000}` : <></>}
                  </Typography>
                  <Typography className={classes.text3}>
                    {!BTCPriceLoading && !MGBPriceLoading ? (
                      `@ ${Math.round((MGBPrice / BTCPrice) * 10000000) / 10000000} BTC`
                    ) : (
                      <></>
                    )}
                  </Typography>
                  <Typography className={classes.text4}>
                    {!MGBPriceLoading ? MGBPriceDiff > 0 ? `${MGBPriceChange}` : `${MGBPriceChange}` : <></>}
                  </Typography>
                </div>
              )
            }
            
          </Bluetool>
        </Grid>
      </Grid>

      <Divider variant="middle" className={classes.divider} />

      <Grid container alignItems="center">
        <Grid>
          <img src="/images/Home/HomeBanner/market.svg" className={classes.img} alt="market" />
        </Grid>

        <Grid>
          <Typography className={classes.text1}>MGB MARKET CAP ON MGB</Typography>

          <Bluetool title="Market cap of MGB on Mugambo, click Learn more">
            <div style={{ display: 'flex', cursor: 'pointer' }}>
              <Typography className={classes.text2}>
                {!MGBPriceLoading ? (
                  `$${numberWithCommas(Math.round(MGBPrice * TOTAL_COIN_SUPPLY * 1000) / 1000)}`
                ) : (
                  <></>
                )}
              </Typography>
              <Typography className={classes.text3}>({numberWithCommas(TOTAL_COIN_SUPPLY)} MGB)</Typography>
            </div>
          </Bluetool>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  MGBPriceLoading: state.price.MGBPriceLoading,
  MGBPriceError: state.price.MGBPriceError,
  MGBPrice: state.price.MGBPriceSuccessResponse,
  MGBPriceChange: state.price.MGBPriceChange,
  MGBPriceDiff: state.price.MGBPriceDiff,
  BTCPriceLoading: state.price.BTCPriceLoading,
  BTCPriceError: state.price.BTCPriceError,
  BTCPrice: state.price.BTCPriceSuccessResponse,
})

export default connect(mapStateToProps, { getMGBPrice, getBTCPrice })(Price)
