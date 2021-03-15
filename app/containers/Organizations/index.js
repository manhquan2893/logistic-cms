import React,{useState,useEffect} from 'react'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Select from 'components/Select'
import Checkbox from 'components/Checkbox'
import MultiSelect from 'components/MultiSelect'
import Radio from 'components/Radio'
import AddCustomerModal from 'components/AddCustomerModal'
import TextInput from 'components/TextInput'
import TextArea from 'components/TextArea'
import ActionBox from 'components/ActionBox'


import {Page,PageTitle,Row} from 'containers/App/style'
import {FormGroup,FormTitle,AddCustomerButton,
  AddCustomerIcon,Grid2,Col,
  AddNextActionButton,AddNextActionIcon,
  AddNextActionText,
  SubmitButtons,
  SaveSubmitButton,
  CloseSubmitButton,Welcome} from './style'

import dataSource from './dataSource'
import initForm from './initForm'


function Organizations() {
  sessionStorage.setItem('dataSource',JSON.stringify(dataSource))

  useEffect(() => {
    toast.info('Welcome to our App')
    toast.info('You can see READ.md for more detail')
  }, [])

  const [form, setForm] = useState(initForm)
  const onChangeOrgaSelect = (optionId) =>{
    const updateOrganizations = form.organizations.map((el)=>{
      el.checked = false
      if(el.id === optionId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      organizations: updateOrganizations
    })
  }

  const onChangeTaskOptionsCheckbox = (taskOptionsId)=>{
    const updateTaskOptions = form.taskOptions.map((el)=>{
      if(el.id === taskOptionsId){
        el.checked = !el.checked
      }
      return el
    })
    setForm({
      ...form,
      taskOptions: updateTaskOptions
    })
  }

  const onChangeCustomersSelect = (customersId) =>{
    const updateCustomers = form.customers.map((el)=>{
      el.checked = false
      if(el.id === customersId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      customers: updateCustomers
    })
  }

  const [isShowAddCustomerModal, setIsShowAddCustomerModal] = useState(false)
  const showAddCustomersModal = () =>{
    setIsShowAddCustomerModal(true)
  }
  const onCancelAddCustomerModal = ()=>{
    setIsShowAddCustomerModal(false)
  }
  const onOkAddCustomerModal = (customerName)=>{
    const updateCustomers = [
      ...form.customers,
      {
        id: form.customers.length+1,
        name: customerName,
        checked: false
      }
    ]
    setForm({
      ...form,
      customers: updateCustomers
    })
  }

  const onAddProducts = (productsId) => {
    const updateProducts = form.products.map((el)=>{
      if(el.id === productsId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      products: updateProducts
    })
  }
  const onRemoveProducts = (productsId) => {
    const updateProducts = form.products.map((el)=>{
      if(el.id === productsId){
        el.checked = false
      }
      return el
    })
    setForm({
      ...form,
      products: updateProducts
    })
  }

  const onChangeAssignTypes = (assignTypesId)=>{
    const updateAssignTypes = form.assignTypes.map((el)=>{
      el.checked = false
      if(el.id === assignTypesId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      assignTypes: updateAssignTypes
    })
  }

  const [isAssignedToAll, setIsAssignedToAll] = useState(false)
  const assignAll = ()=>{
    form.assignTypes.map((el)=>{
      if(el.checked === true){
        if(el.id === 1){
          const updateAssignedOrganizations = form.assignedOrganizations.map((el)=>{
            el.checked = true
            return el
          })
          setForm({
            ...form,
            assignedOrganizations: updateAssignedOrganizations
          })
        }
        else if(el.id ===2){
          const updateUsers = form.users.map((el)=>{
            el.checked = true
            return el
          })
          setForm({
            ...form,
            users: updateUsers
          })
        }
      }
      return el
    })
  }
  useEffect(() => {
    if(isAssignedToAll){
      assignAll()
    }
    else{
      const data = JSON.parse(sessionStorage.getItem('dataSource'))
      setForm({
        ...form,
        assignedOrganizations: data.assignedOrganizations,
        users: data.users
      })
    }
  }, [isAssignedToAll])
  const onChangeAssignAll = ()=>{
    setIsAssignedToAll(!isAssignedToAll)
  }

  const onAddUsers = (usersId)=>{
    const updateUsers = form.users.map((el)=>{
      if(el.id === usersId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      users: updateUsers
    })
  }
  const onRemoveUsers = (usersId)=>{
    const updateUsers = form.users.map((el)=>{
      if(el.id === usersId){
        el.checked = false
      }
      return el
    })
    setForm({
      ...form,
      users: updateUsers
    })
  }

  const onAddAssignedOrganizations = (assignedOrganizationsId)=>{
    const updateAssignedOrganizations = form.assignedOrganizations.map((el)=>{
      if(el.id === assignedOrganizationsId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      assignedOrganizations: updateAssignedOrganizations
    })
  }
  const onRemoveAssignedOrganizations = (assignedOrganizationsId)=>{
    const updateAssignedOrganizations = form.assignedOrganizations.map((el)=>{
      if(el.id === assignedOrganizationsId){
        el.checked = false
      }
      return el
    })
    setForm({
      ...form,
      assignedOrganizations: updateAssignedOrganizations
    })
  }

  const onChangeStatusSelect = (statusId) =>{
    const updateStatus = form.status.map((el)=>{
      el.checked = false
      if(el.id === statusId){
        el.checked = true
      }
      return el
    })
    setForm({
      ...form,
      status: updateStatus
    })
  }

  const onChangeTaskSubject = (e)=>{
    setForm({
      ...form,
      taskSubject: e.target.value
    })
  }
  const onChangeDescription = (e)=>{
    setForm({
      ...form,
      description: e.target.value
    })
  }

  const addNextAction = ()=>{
    const updateActions = [
      ...form.actions,
      {
        id: form.actions.length+1,
        startDate: moment(new Date()).format('DD/MM/YYYY HH:mm'),
        endDate: moment(new Date()).format('DD/MM/YYYY HH:mm'),
        availableActions:[
          {
            id:1,
            name:'LẮP MỚI',
            checked:true
          },
          {
            id:2,
            name:'SỬA',
            checked:false
          }
        ],
      }
    ]
    setForm({
      ...form,
      actions: updateActions
    })
  }

  const onCancelActionBox = (actionsId)=>{
    const updateActions = form.actions.filter((el)=>{
      return el.id !== actionsId
    })
    setForm({
      ...form,
      actions: updateActions
    })
  }

  const onChangeActionBox= (actionBox)=>{
    const updateActions = form.actions.map((el)=>{
      if(el.id === actionBox.id){
        // eslint-disable-next-line no-param-reassign
        el = actionBox
      }
      return el
    })
    setForm({
      ...form,
      actions: updateActions
    })
  }

  const onPrintForm = ()=>{
    console.log(form)
  }

  const onResetForm = ()=>{
    const data = JSON.parse(sessionStorage.getItem('dataSource'))
    setForm(data)
  }

  return (
    <Page>
      <PageTitle>
        Task action Infomation
      </PageTitle>
      <Grid2>
        <Col>
          <FormGroup>
            <FormTitle>Organizations</FormTitle>
            <Select options={form.organizations} onChange={onChangeOrgaSelect}></Select>
          </FormGroup>
          <FormGroup>
            <FormTitle>Task Options</FormTitle>
            <Row>
              {
                form.taskOptions.map((el)=>{
                  return (
                    <Checkbox
                      checkboxObject={el}
                      onChange={()=>onChangeTaskOptionsCheckbox(el.id)}></Checkbox>
                  )
                })
              }
            </Row>
          </FormGroup>
          <FormGroup>
            <FormTitle>Customers</FormTitle>
            <Row>
              <Select options={form.customers} onChange={onChangeCustomersSelect}></Select>
              <AddCustomerButton onClick={showAddCustomersModal}>
                <AddCustomerIcon className="fas fa-plus" ></AddCustomerIcon>
              </AddCustomerButton>
            </Row>
          </FormGroup>
          <FormGroup>
            <FormTitle>Products</FormTitle>
            <MultiSelect options={form.products} onAdd={onAddProducts} onRemove={onRemoveProducts}></MultiSelect>
          </FormGroup>
          <FormGroup>
            <FormTitle>Assign Types</FormTitle>
            {
              form.assignTypes.map((el)=>{
                return (
                  <Radio radio={el} onChange={()=>onChangeAssignTypes(el.id)}></Radio>
                )
              })
            }
          </FormGroup>
          <FormGroup>
            <FormTitle>Assigned To</FormTitle>
            <Checkbox checkboxObject={{name:'Check All',checked:isAssignedToAll}} onChange={onChangeAssignAll}></Checkbox>
          </FormGroup>
          <FormGroup>
            {
              form.assignTypes.map((el)=>{
                if(el.checked === true){
                  if(el.id === 1){
                    return <MultiSelect options={form.assignedOrganizations} onAdd={onAddAssignedOrganizations} onRemove={onRemoveAssignedOrganizations} ></MultiSelect>
                  }
                  // eslint-disable-next-line no-else-return
                  else{
                    return <MultiSelect options={form.users} onAdd={onAddUsers} onRemove={onRemoveUsers}></MultiSelect>
                  }
                }
                // eslint-disable-next-line no-else-return
                else{
                  return null
                }
              })
            }
          </FormGroup>
          <FormGroup>
            <FormTitle>Task Subject</FormTitle>
            <TextInput onChange={onChangeTaskSubject} defaultValue={form.taskSubject}></TextInput>
          </FormGroup>
          <FormGroup>
            <FormTitle>Description</FormTitle>
            <TextArea onChange={onChangeDescription} defaultValue={form.description}></TextArea>
          </FormGroup>
          <FormGroup>
            <FormTitle>Status</FormTitle>
            <Select options={form.status} onChange={onChangeStatusSelect}></Select>
          </FormGroup>
        </Col>
        <Col>
          {
            form.actions.map((el)=>{
              return (
                <ActionBox
                  action={el}
                  onCancel={onCancelActionBox}
                  onChange={onChangeActionBox}></ActionBox>
              )
            })
          }
          <AddNextActionButton onClick={addNextAction}>
            <AddNextActionIcon className="fas fa-plus"></AddNextActionIcon>
            <AddNextActionText>Add Next Action</AddNextActionText>
          </AddNextActionButton>
          <SubmitButtons>
            <SaveSubmitButton onClick={onPrintForm}>Watch Data in Console</SaveSubmitButton>
            <CloseSubmitButton onClick={onResetForm}>Reset Form</CloseSubmitButton>
          </SubmitButtons>
        </Col>
      </Grid2>
      {isShowAddCustomerModal && (
        <AddCustomerModal
          onCancel={onCancelAddCustomerModal}
          onOk={onOkAddCustomerModal}></AddCustomerModal>
      )}
      <ToastContainer autoClose={5000}/>
    </Page>
  )
}

export default Organizations
