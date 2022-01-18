import { SuccessLogo } from "../Icons/SuccessLogo";
import styled from "styled-components";

const DivSuccess = styled.div`
  box-shadow: 5px 9px 29px 0px rgb(0 0 0 / 4%);
  -webkit-box-shadow: 5px 9px 29px 0px rgb(0 0 0 / 4%);
  -moz-box-shadow: 5px 9px 29px 0px rgb(0 0 0 / 4%);
  border-radius: 17px;
  padding: 10px;
  height: 50vh;
  display: flex;
  justify-content: inherit;
  align-items: center;
  flex-direction: column;
`;

const P = styled.p`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: rgba(118, 135, 158, 1);
  width: 80%;
`;

// const DivMessage = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const PSuccess = styled.p`
//   margin-top: 0;
//   font-weight: 500;
//   font-size: 60px;
//   font-family: "DM Sans", sans-serif;
//   width: 80%;
//   text-align: center;
//   color: rgba(51, 51, 51, 1);
//   @media (max-width: 768px) {
//     font-size: 40px;
//   }
// `;

const Success = () => {
  return (
    <DivSuccess>
      <div>
        <SuccessLogo />
      </div>
      <P>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat optio
        repellat voluptatibus! Sequi placeat quam praesentium! Cupiditate eius
        quidem, fuga distinctio alias, modi quis, aspernatur unde architecto
        accusamus ad. Voluptate!
      </P>
    </DivSuccess>
  );
};

export default Success;
