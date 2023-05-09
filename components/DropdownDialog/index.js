import React from 'react'
import { DropdownDialog } from '@trafilea/afrodita-components'

const options = [
  { label: 'Track your Order', value: '/pages/trackorder' },
  {
    label: 'Help Center',
    value:
      'https://help.shapermint.com/hc/en-us?_ga=2.58822117.910421325.1613496841-977745143.1605090703',
  },
  {
    label: 'Fit Expert Support',
    value:
      'https://shapermint.ada.support/chat/?greeting=5e624a98693febded781363b',
  },
  {
    label: 'Chat with Us',
    value:
      'https://shapermint.ada.support/chat/?greeting=5e624a98693febded781363b',
  },
  {
    label: 'DM Us on Messenger',
    value: 'https://m.me/Shapermint?ref=w14621538',
  },
]

export const HelpCenterDropdown = () => (
  <DropdownDialog
    options={options}
    position={{ top: '0px', right: '-12px' }}
    className="helpCenterDropdown"
  />
)
