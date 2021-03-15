import React,{useState,useEffect} from 'react'
import Select from 'components/Select'
import { DatePicker } from 'antd';
import moment from 'moment'
import {Wrap,FormGroup,FormTitle,
  Row,CloseButton,CloseIcon,Label} from './style'

function ActionBox(props) {

  const [actionBox, setActionBox] = useState({})
  useEffect(() => {
    setActionBox(props.action)
  }, [props.action])

  const onChangeAvailableAction = (availableActionId)=>{
    const updateAvailableAction = actionBox.availableActions.map((el)=>{
      el.checked = false
      if(el.id === availableActionId){
        el.checked = true
      }
      return el
    })
    setActionBox({
      ...actionBox,
      availableActions: updateAvailableAction
    })

  }

  const onChangeStartDate = (date,dateString)=>{
    setActionBox({
      ...actionBox,
      startDate: dateString
    })
  }

  const onChangeEndDate = (date,dateString)=>{
    setActionBox({
      ...actionBox,
      endDate: dateString
    })
  }

  useEffect(() => {
    props.onChange(actionBox)
  }, [actionBox])

  return (
    <Wrap>
      <FormGroup>
        <FormTitle>Actions</FormTitle>
        <Row>
          <Select options={props.action.availableActions} onChange={onChangeAvailableAction}></Select>
          <CloseButton onClick={()=>props.onCancel(props.action.id)}>
            <CloseIcon className="fas fa-times" ></CloseIcon>
          </CloseButton>
        </Row>

      </FormGroup>
      <FormGroup>
        <Row>
          <Label>Start Date</Label>
          <DatePicker
            format="DD/MM/YYYY HH:mm"
            showTime={{format:'HH:mm'}}
            defaultValue={moment(props.action.startDate,'DD-MM-YYYY HH:mm')}
            onChange={onChangeStartDate}/>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Label>End Date</Label>
          <DatePicker
            format="DD/MM/YYYY HH:mm"
            showTime={{format:'HH:mm'}}
            defaultValue={moment(props.action.endDate,'DD-MM-YYYY HH:mm')}
            onChange={onChangeEndDate}/>
        </Row>
      </FormGroup>
    </Wrap>
  )
}
export default ActionBox
