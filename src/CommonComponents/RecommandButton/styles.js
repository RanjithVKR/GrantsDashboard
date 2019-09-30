import styled,{keyframes} from 'styled-components'
export const ButtonArrow=styled.span `
position:absolute;
`
export const RCButton=styled.button `
background-color: #006778;
width: 100%;
padding:16px 0px 15px 0px;
font-family: 'HelveticaNeue';
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  border:none;
  outline:none;
  cursor:pointer;
  :hover ${ButtonArrow}{
    /* color:red; */
    transform: translate3d(5px, 0, 0);
    transition: transform 1s ease;
  }

`