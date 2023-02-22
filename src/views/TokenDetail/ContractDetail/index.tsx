import React from 'react'
import Card from '@material-ui/core/Card'
import { nanoid } from 'nanoid'
import { useParams } from 'react-router'

import ParentTabs from './Tabs/ParentTabs'

//Real import goes here
import Transfers from './Transfers'
import Holders from './Holders'
import { Info } from './Info'
import { Exchange } from './Exchange'
import Contract from './Contract'
import Analaytics from '../ContractDetail/Analytics'

// import { Comments } from './Comments'

import { useStyles } from '../styles'
import { TOKEN_PAGE_TABS } from '../../../common/consts'

import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getAddressDetailInfo } from '../../../store/actions/address'

interface AccountProps {
  tabs: any
}
// Build contents for each tab based on Mockup data
function ContractDetail({ tabs }: AccountProps) {
  const classes = useStyles()
  const { tokenAddress } = useParams<any>()

  var val = 0

  var TransfersTabContent = <Transfers />
  var holdersTabContent = <Holders />
  var infoTabContent = <Info />
  var exchangeTabContent = <Exchange />
  var analyticsTabContent = <Analaytics address={tokenAddress} />
  // var commentsTabContent = <Comments />

  var transferTab = {
    id: nanoid(),
    children: TransfersTabContent,
    label: 'Transfers',
    index: 0,
    suburl: [''],
  }

  var visibleTabContent = [transferTab]

  for (let i = 0; i < tabs.length; i++) {
    var index = i
    if (tabs[i] === TOKEN_PAGE_TABS.HOLDERS) {
      let holdersTab = {
        id: nanoid(),
        children: holdersTabContent,
        label: 'Holders',
        index: index,
        suburl: ['holders'],
      }
      visibleTabContent.push(holdersTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.INFO) {
      let infoTab = {
        id: nanoid(),
        children: infoTabContent,
        label: 'Info',
        index: index,
        suburl: ['info'],
      }
      visibleTabContent.push(infoTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.INVENTORY) {
      let inventoryTab = {
        id: nanoid(),
        children: infoTabContent,
        label: 'Inventory',
        index: index,
        suburl: ['inventory'],
      }
      visibleTabContent.push(inventoryTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.EXCHANGE) {
      let exchangeTab = {
        id: nanoid(),
        children: exchangeTabContent,
        label: 'DEX Trades',
        index: index,
        suburl: ['tokenTrade'],
      }
      visibleTabContent.push(exchangeTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.CONTRACT) {
      let contractTab = {
        id: nanoid(),
        children: <Contract />,
        label: 'Contract',
        index: index,
        suburl: ['readContract', 'writeContract'],
      }
      visibleTabContent.push(contractTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.ANALYTICS) {
      let analyticsTab = {
        id: nanoid(),
        children: analyticsTabContent,
        label: 'Analytics',
        index: index,
        suburl: ['analytics'],
      }
      visibleTabContent.push(analyticsTab)
    }

    // if (tabs[i] === TOKEN_PAGE_TABS.COMMENTS) {
    //   let commentsTab = {
    //     id: nanoid(),
    //     children: commentsTabContent,
    //     label: 'Comments',
    //     index: index,
    //     suburl: ['comments'],
    //   }
    //   visibleTabContent.push(commentsTab)
    // }
  }

  return (
    <Card variant="outlined" className={classes.tablestyle}>
      <ParentTabs val={val} tabs={visibleTabContent} />
    </Card>
  )
}

const mapStateToProps = (state: AppState) => ({
  tokenTransfers: state.token.tokenTransfers,
  tokenHolders: state.token.tokenHolders,
  tokenName: state.token.tokenName,
  totalSupply: state.token.totalSupply,
  decimals: state.token.decimals,
  loading: state.token.loading,
  tabs: state.token.tabs,
})

export default connect(mapStateToProps, { getAddressDetailInfo })(ContractDetail)
