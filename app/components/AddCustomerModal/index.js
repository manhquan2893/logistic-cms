import React,{useState} from 'react'

import Modal from 'components/Modal'
import {Button} from 'containers/App/style'

import {TextInput} from './style'


function AddCustomerModal(props) {
  const [customerName,setCustomerName] = useState('')
  const onChangeInput = (e)=>{
    setCustomerName(e.target.value)
  }
  const onAddCustomer = ()=>{
    props.onOk(customerName)
    props.onCancel()
  }
  return (
    <Modal onCancel={props.onCancel}>
      <TextInput 
        type="text" style={{marginBottom: '15px'}}
        onChange={onChangeInput}></TextInput>
      <Button onClick={onAddCustomer}>Add Customer</Button>
    </Modal>
  )
}
export default AddCustomerModal