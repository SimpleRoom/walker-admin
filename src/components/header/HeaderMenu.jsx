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
    buttonActiveBg,
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

const MenuContent = styled.div`
    padding:10px;
    li{
        color: #252525;
        padding:10px 20px;
        cursor:pointer;
        transition:all 200ms linear;
        font-size: 14px;
        border-radius:${borderRadius}px;

        &:hover{
            color:${whiteColor};
            background:${buttonActiveBg};
            box-shadow:0 12px 20px -10px rgba(4,50,60,.8);
        }
    }
`;
const List = [
    "You have unread messages.",
    "You got a new task.",
    "You have unread mail.",
    "Other notifications.",
    "Sign out"]

const HeaderMenu = ({ signOut }) => (
    <HeaderMenuBox>
        <MenuContent>
            <ul>
                {
                    List.map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )
                }
            </ul>
        </MenuContent>
    </HeaderMenuBox>
)

export default HeaderMenu