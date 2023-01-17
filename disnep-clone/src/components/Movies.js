import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
         <Content>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
               <Wrap>
                  <img src='http://thumbnailpictures.in/wp-content/uploads/2019/09/oppo-safari-432x254.jpg' />
               </Wrap>
         </Content>
    </Container>
  )
}

export default Movies


const Container=styled.div`
overflow:hidden;
`

const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

`

const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: 0px 26px 30px -10px #000;
cursor:pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    &:hover{
        transform:scale(1.05);
        border-color: rgba(249, 249, 249, 0.8)
       }
}
`