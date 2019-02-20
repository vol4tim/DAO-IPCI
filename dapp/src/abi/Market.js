/* eslint quote-props: 0 */
/* eslint quotes: 0 */
/* eslint object-curly-spacing: 0 */
/* eslint key-spacing: 0 */
/* eslint comma-spacing: 0 */
export default [{ constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_lot', type: 'address' }], name: 'remove', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_commission', type: 'uint256' }], name: 'setCommission', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'first', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_enable', type: 'bool' }], name: 'setRegulator', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_seller', type: 'address' }, { name: '_sale', type: 'address' }, { name: '_buy', type: 'address' }, { name: '_quantity_sale', type: 'uint256' }, { name: '_quantity_buy', type: 'uint256' }], name: 'append', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_lot', type: 'address' }], name: 'contains', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_token', type: 'address' }], name: 'setCommissionToken', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'size', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commissionToken', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_current', type: 'address' }], name: 'next', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'regulatorEnabled', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commission', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }]