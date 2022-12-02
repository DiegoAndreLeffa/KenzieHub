import styled from "styled-components";

export const StyledDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  nav {
    width: 100%;
    height: 72px;

    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
  }
  nav div {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 55.49px;
    height: 32px;

    background: #212529;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    text-align: center;

    color: #f8f9fa;
  }

  .user {
    height: 118px;
    width: 100%;
    border-top: 1px solid #37393c;
    border-bottom: 1px solid #37393c;

    display: flex;
    justify-content: center;
    margin-top: 69px;
  }

  .user div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 60%;
  }
  .user div h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }
  .user div p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  .divManu {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
  }
  .divManu div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    margin-top: 40px;
  }

  .divManu div h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    margin-bottom: 23px;

    color: #f8f9fa;
  }

  .divManu div p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;
  }

  @media (max-width: 420px) {
    width: 100%;

    nav div {
      width: 90%;
    }

    .user div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      width: 90%;
    }

    .divManu div {
      display: none;
    }
  }
`;
