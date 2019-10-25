import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// global common style
import {
  levelOneZindex,
  ClearFix,
  borderRadius,
  bounceAnimation,
  whiteColor,
} from '../common-style'

const HeaderMenuBox = styled(ClearFix)`
  position:absolute;
  z-index:${levelOneZindex + 2};
  background:${whiteColor};
  right: 4px;
  top: 50px;
  box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius:${borderRadius}px;
  animation: ${bounceAnimation} 1.4s;

  &:before{
    border:8px solid transparent;
    border-bottom-color: ${whiteColor};
    position: absolute;
    right: 10px;
    top: -16px;
  }
`;

const slideListHeight = 34
const MenuContent = styled.div`
  padding:12px 8px;
  li{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 220px;
    color: #252525;
    padding: 0 10px;
    cursor:pointer;
    transition:all 200ms linear;
    font-size: 14px;
    border-radius:${borderRadius}px;
    height:${slideListHeight}px;
    line-height:${slideListHeight}px;

    &:hover{
      color:${whiteColor};
      background:${props => props.activeBgColor};
      box-shadow:0 12px 20px -10px ${props => props.activeBgColor};
      button{
          color:${whiteColor};
      }
    }
  }
`;

const SignOutBtn = styled.button`
    display:block;
    width:100%;
    text-align:left;
    line-height:${slideListHeight}px;
    color: #252525;
`;

const DropdownList = ({ activeBgColor, list, signOut, onClick }) => (
  <HeaderMenuBox>
    <MenuContent activeBgColor={activeBgColor}>
      <ul>
        {
          list.map((item, index) =>
            <li key={index} onClick={onClick ? onClick : null}>
              {item}
            </li>
          )
        }
        {
          signOut ? (<li><SignOutBtn onClick={signOut}>退出</SignOutBtn></li>) : null
        }
      </ul>
    </MenuContent>
  </HeaderMenuBox>
)

DropdownList.propType = {
  activeBgColor: PropTypes.string,
  list: PropTypes.array,
  signOut: PropTypes.func,
  onClick: PropTypes.func,
}

export default DropdownList
