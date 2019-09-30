import styled from 'styled-components'

export  const ViewArrow=styled.span `
position:absolute;
`
export const ViewLink=styled.a `
font-family: 'HelveticaNeue';
  font-size: 16px;
  font-weight: bold;
  color: #006778;
  display:block;
  cursor: pointer;
  padding:21px 0px 17px 32px;
  :hover ${ViewArrow}{
    /* color:red; */
    transform: translate3d(5px, 0, 0);

    transition: transform 1s ease;
    
    }

`