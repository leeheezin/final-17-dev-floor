import styled from "styled-components";

export const Body = styled.div`
  /* border: 3px dashed gray; */
  position: relative;
  height: 100vh;
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "GongGothicMedium";
  .album-btns {
    display: flex;
    justify-content: right;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  }
  button {
    background: #fff;
    border: none;
  }
  /* transform: translateX(-10%); */
`;

// section 1
export const Sect1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProImg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 41px;
  text-align: center;
  button {
    background-color: #fff;
    border-style: none;
    span {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 10px;
      font-weight: 400;
      color: #767676;
    }
    .followers {
      color: black;
    }
  }
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #767676;
    margin-bottom: 16px;
  }
`;

export const Btns = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
  gap: 10px;
  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 6px 6px 3px 5px;
    background-color: #fff;
  }
  .btn-follow {
    background: #12184e;
    color: #fff;
    width: 120px;
  }
  .btn-unfollow {
    border: 1px solid #dbdbdb;
    color: #767676;
    width: 120px;
  }
`;

// section1
