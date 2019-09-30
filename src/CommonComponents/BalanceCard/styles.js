import styled,{keyframes}from 'styled-components'
// import { Keyframes } from 'react-keyframes'
export const Card=styled.div `
box-shadow: 0 9px 21px 0 rgba(128, 152, 213, 0.08);
  background-color: #ffffff;
  padding:20px 60px 20px 30px ;
  margin-bottom:20px;
`
export const CardTitle=styled.div `
display:table;

`
export const TooltipText=styled.span `
  /* visibility: hidden; */
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 103, 120, 0.9);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  word-break:break-all;
  top: -5px;
  left: 110%;
  padding: 20px;
  margin:5px;
  ::after{
    content: "";
  position: absolute;
  bottom: 70%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent rgba(0, 103, 120, 0.9) transparent transparent;
  }

`
export const Title=styled.h3 `
font-family: 'BerkeleyStd';
  font-size: 24px;
  color:#022737;
  margin:0px;
  margin-bottom:5px;
  margin-right:10px; 
`
export const InfoIcon =styled.i `
color: #006778;
/* margin-left:20px; */
position:relative;
display:table-cell;
vertical-align:middle;

:hover ${TooltipText}{
    visibility:visible;
}
`
export const Amount=styled.span `
font-family: 'HelveticaNeue';
  font-size: 42px;
  color:#69923a;
`
export const Arrow=styled.span `
position:absolute;
/* animation-name: 'example'; */
/* animation-duration: 4s; */

`
//  const Keyframes= `
//  from {left: 0px;}
//   to {left: 5px;}
// 
const move = keyframes`
 transition: transform 0.3s ease;
`; 
export const View=styled.a `
  margin-top:20px;
position:relative;
text-decoration:none;
display:block;
font-family: 'HelveticaNeue';
  font-size: 16px;
  font-weight: bold;
  color: #006778;
  visibility:${props =>props.title === 'Current Balance'? "hidden":'visible'};

:hover ${Arrow}{
    /* color:red; */
    transform: translate3d(5px, 0, 0);

    transition: transform 1s ease;
    
    /* animation:${move} 1s ease; */
    }

`;
