import React from 'react'
import styled from "styled-components"

// global common style
import {
    levelOneZindex,
    ClearFix,
    headerAndLogoHeight,
    borderRadius,
    bounceAnimation,
    whiteColor,
} from "../common-style"

const HeaderMenuBox = styled(ClearFix)`
    position:absolute;
    z-index:${levelOneZindex + 2};
    background:${whiteColor};
    right:10px;
    top:${headerAndLogoHeight - 5}px;
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
        color: #252525;
        padding:0 20px;
        cursor:pointer;
        transition:all 200ms linear;
        font-size: 14px;
        border-radius:${borderRadius}px;
        height:${slideListHeight}px;
        line-height:${slideListHeight}px;

        &:hover{
            color:${whiteColor};
            background:${props=>props.activeBgColor};
            box-shadow:0 12px 20px -10px ${props=>props.activeBgColor};
            button{
                color:${whiteColor};
            }
        }
    }
`;
const List = [
    "You have unread messages.",
    "You got a new task.",
    "You have unread mail.",
    "Other notifications."
]

const SignOutBtn = styled.button`
    display:block;
    width:100%;
    text-align:left;
    line-height:${slideListHeight}px;
    color: #252525;
`;

const HeaderMenu = ({ activeBgColor, signOut }) => (
    <HeaderMenuBox>
        <MenuContent activeBgColor={activeBgColor}>
            <ul>
                {
                    List.map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )
                }
                <li><SignOutBtn onClick={signOut}>Sign out</SignOutBtn></li>
            </ul>
        </MenuContent>
    </HeaderMenuBox>
)

export default HeaderMenu