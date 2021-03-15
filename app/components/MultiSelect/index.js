import React,{useState} from 'react'
import {Wrap,SelectSection,SelectItem,SelectItemText,SelectItemCloseIcon,
  OptionList,OptionItem,OptionItemText,OptionItemCheckIcon,VirtualInput} from './style'
 
function MultiSelect(props) {
  const [isShow,setIsShow] = useState(false)
  const onClickInput = (e)=>{
    setIsShow(!isShow)
  }
  const onClickOption = (option)=>{
    if(!option.checked){
      props.onAdd(option.id)
    }
    else{
      props.onRemove(option.id)
    }
  }
  const onClickCloseSelectItem = (optionId)=>{
    props.onRemove(optionId)
  }
  return (
    <Wrap>
      <SelectSection>
        {
          props.options && props.options.map((el)=>{
            if(el.checked === true){
              return (
                <SelectItem>
                  <SelectItemText>{el.name}</SelectItemText>  
                  <SelectItemCloseIcon className="fas fa-times" onClick={()=>onClickCloseSelectItem(el.id)}></SelectItemCloseIcon>
                </SelectItem>
              )
            }
            return null
          })
        }
        <VirtualInput type="text" onClick={onClickInput} value=''></VirtualInput>
        {
          isShow && (
            <OptionList>
              {
                props.options && props.options.map((el)=>{
                  return (
                    <OptionItem active={el.checked} onClick={()=>onClickOption(el)}>
                      <OptionItemText>{el.name}</OptionItemText>
                      {
                        el.checked && (
                          <OptionItemCheckIcon className="fas fa-check"></OptionItemCheckIcon>
                        )
                      }
                    </OptionItem>
                  )
                })
              }
            </OptionList>
          )
        }
        
      </SelectSection>
    </Wrap>
  )
}
export default MultiSelect