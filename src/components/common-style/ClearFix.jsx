import styled from "styled-components"
export const ClearFix = styled.div`
    &:before,&:after{
        display:table;
        content:"";
        clear:both;
    }
`;