import styled from 'styled-components'
 export const FeatureCarousa=styled.div `
 box-shadow: 0 9px 21px 0 rgba(128, 152, 213, 0.08);
  background-color: #ffffff;
  padding:23px 20px 17px 20px;
  height:192px;
  margin-left:20px;
  /* margin-top:20px; */
  /* width:765px; */
 `
  export const ComponentTitle=styled.h4 `
  font-family: 'HelveticaNeue';
  font-size: 14px;
  color: #505050;
  margin:0px;
  margin-left:20px;
  `
  export const Subtitle=styled.h2 `
  font-family: 'BerkeleyStd';
  font-size: 24px;
  color:#022737;
  margin:8px 0px 16px 20px;
  `
  export const LearnArrow=styled.span `
  position:absolute;
  `
  export const LarnMore=styled.a `
  font-family: 'HelveticaNeue';
  font-size: 16px;
  display:block;
  color: #006778;
  cursor: pointer;
  margin:28px 0px 0px 22px;
  /* margin-left:20px; */
  :hover ${LearnArrow}{
    /* color:red; */
    transform: translate3d(5px, 0, 0);
    transition: transform 1s ease;
  }

  `