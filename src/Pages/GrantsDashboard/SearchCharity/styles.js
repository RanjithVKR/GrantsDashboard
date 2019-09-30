import styled from 'styled-components'
export const SearchTitle=styled.h2 `
font-family: 'BerkeleyStd';
  font-size: 36px;
  color:#022737;
  margin:0px;
  margin-bottom:18px;
`
export const Input=styled.input `
width:100%;
padding:20px 0px 22px 0px;
outline:none;
/* position: relative; */
::placeholder{
    padding-left:35px;
    /* margin-left:35px; */
}
`
export const Icon=styled.i `
position:absolute;
right:31px;
top:24px;
color: #167f91;
`
export const Filter=styled.div `
display:flex;
justify-content:space-between;
margin-top:25px;
`
export const Result=styled.p `
font-family: 'HelveticaNeue';
  font-size: 16px;
  color: #9b9b9b;
  margin:0px;
`
export const FilterTitle=styled.span `
font-family: 'Helvetica';
  font-size: 16px;
  font-weight: bold;
  color: #505050;

`
export const FilterButton=styled.button `
border: solid 1px #d4d4d4;
  background-color: #ffffff;
  margin-left:20px;
  outline:none;
  padding:9px 10px 12px 10px;
  font-family: 'HelveticaNeue';
  font-size: 16px;
  color: #006778;
  cursor: pointer;
`
export const Badges=styled.span `
background-color: #006778;
color:white;
padding:3px;
border-radius:50%;
margin-left:5px;
`