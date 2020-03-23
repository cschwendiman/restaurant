import React from "react"

import Inventory from '../components/inventory/inventory'
import { default as data } from '../data/get_items.json'

const IndexPage = () => (
  <Inventory items={data.itens} />
)

export default IndexPage
