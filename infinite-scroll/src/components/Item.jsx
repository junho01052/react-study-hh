import { styled } from "styled-components";

const Item = (props) => {
  //   console.log(dog.breeds[0].name);
  return (
    <StDog>
      <StContainer>
        <StDogImg src={`${props.dog.url}`} width="200px" height="150px" />
        <span>{props.dog.breeds[0].name}</span>
      </StContainer>
    </StDog>
  );
};

export default Item;

const StDog = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
`;

const StDogImg = styled.img`
  border-radius: 8px;
`;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
