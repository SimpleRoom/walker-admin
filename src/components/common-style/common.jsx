
import styled from "styled-components"
/**
 * clear float and margin
 */
export const ClearFix = styled.div`
    &:before,&:after{
        display:table;
        content:"";
        clear:both;
    }
`;
/**
 * z-index
 */
export const levelOneZindex = 1
/**
 * headerAndLogoHeight：sideBar and Header default height
 * control content padding-top
 */
export const headerAndLogoHeight = 70