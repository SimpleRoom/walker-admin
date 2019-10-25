
import styled, { keyframes } from "styled-components"
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
export const CommonWrap = styled(ClearFix)`
  position:relative;
  min-height: 84vh;
`;
/**
 * z-index
 */
export const levelOneZindex = 1
/**
 * headerAndLogoHeight：sideBar's Logo and Header default height
 * control content padding-top
 */
export const headerAndLogoHeight = 70

export const borderRadius = 4

// global animation
export const bounceAnimation = keyframes`
    from, 20%, 53%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transform: translate3d(0,0,0);
    }
    40%, 43% {
        animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
        transform: translate3d(0, -15px, 0);
    }
    70% {
        animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
        transform: translate3d(0, -8px, 0);
    }
    90% {
        transform: translate3d(0,-4px,0);
    }
`;