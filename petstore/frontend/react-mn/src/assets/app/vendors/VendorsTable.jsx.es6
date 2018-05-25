import React from 'react';
import VendorCardJsx from "./VendorCard";
import {array} from 'prop-types'

const VendorsTable = ({vendors}) => <div>
  {vendors.map((v, i) => <VendorCardJsx key={i} vendor={v}/>)}
</div>

VendorsTable.propTypes = {
  vendors: array.isRequired
}

export default VendorsTable;
