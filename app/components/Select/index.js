import React,{useState} from 'react'
import {Wrap,SelectItem,ChevronDownIcon,OptionList,
  OptionItem,CheckIcon} from './style'

function Select(props) {
  const [isShow, setIsShow] = useState(false)
  const onClickSelect = ()=>{
    setIsShow(!isShow)
  }
  const onClickOption = (option)=>{
    props.onChange(option.id)
    setIsShow(false)
  }

  
  return (
    <Wrap>

      {/* ---------------set select = default option-------------------- */}

      {props.options.map((el)=>{
        if(el.checked === true){
          return (
            <SelectItem onClick={()=>onClickSelect()}>{el.name}</SelectItem>
          )
        }
        return null
      })}
      
      {/* ---------------------options is showed when click select---------------- */}

      {
        isShow && (
          <OptionList>
            {
              props.options && props.options.map((el,index)=>{
                return (
                  <OptionItem 
                    onClick={()=>{onClickOption(el)}}
                    active={el.checked}>
                    {el.name}
                    {el.checked && (
                      <CheckIcon className ="fas fa-check"></CheckIcon>
                    )}
                    
                  </OptionItem>
                )
              })
            }
          </OptionList>
        )
      }
      <ChevronDownIcon className="fas fa-chevron-down"></ChevronDownIcon>
      
    </Wrap>
  )
}

export default Select
