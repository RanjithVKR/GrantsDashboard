import styled from 'styled-components'
 


export const BalanceComponent=styled.div `
display:flex;
flex-direction:column;
align-items:'space-around';
`

export const ComponentTitle=styled.h4 `
  font-family: 'HelveticaNeue';
  font-size: 14px;
  color: #505050;
  margin:0px;
  /* margin-left:20px; */
  `
  export const Subtitle=styled.h2 `
  font-family: 'BerkeleyStd';
  font-size: 24px;
  color:#022737;
  margin:8px 0px 11px 0px;
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
  top: -5px;
  left: 110%;
  margin:5px;
  padding:20px;
  word-break:break-all;
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
  export const InfoIcon =styled.i `
  color: #006778;
  margin-left:10px;
  font-size:15px;
  position:relative;
  :hover ${TooltipText}{
      visibility:visible;
  }
  `
  export const ViewRange =styled.span `
  font-family: 'HelveticaNeue';
  font-size: 16px;
  color: #606060;
  `
  export const RangeButton=styled.button `
  border-radius: 5.7px;
  outline:none;
  margin-left:6px;
  border: solid 1.2px #979797;
  width: 40.7px;
  font-family:'HelveticaNeue';
  font-size: 17.4px;
  font-weight: bold;
  text-align: center;
  color: #606060;
  :focus{
    background-color: #0d504d;
  }
  `