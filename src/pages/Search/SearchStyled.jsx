import styled from "styled-components";

export const ContainerResults = styled.section`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  margin: 1rem auto;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
  }
`;

export const SearchPosts = styled.div`
  display: grid;
  grid-template-columns:repeat(2,1fr);
  width: 80%;
  grid-gap: 15px;
  margin: 1rem auto;  
  
`;

export const TextResults = styled.div`
    position: relative;
    padding: 2rem;
    background-color:#fff;
    width: 80%;
    border-radius: 0,3rem;
    box-shadow: rgba(50,50,105,0.15) 0px 2px 5px 0px,
    rgba(0,0,0,0.05) 0px 1px 1px 0px;

    span{
        font-size: 1rem;
    }
`
