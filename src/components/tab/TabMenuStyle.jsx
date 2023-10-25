import styled from "styled-components";
import home from "../../assets/images/icon-home.png";
import fillHome from "../../assets/images/icon-home-fill.png";
import chat from "../../assets/images/icon-message-circle-1.png";
import fillChat from "../../assets/images/icon-message-circle-fill.png";
import post from "../../assets/images/icon-edit.png";
import fillPost from "../../assets/images/icon-edit-fill.png";
import profile from "../../assets/images/icon-user.png";
import fillProfile from "../../assets/images/icon-user-fill.png";

export const Tab = styled.div`
  background-color: #fff;
  max-width: 720px;
  width: 100%;
  display: flex;
  max-height: 60px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  button {
    background: #fff;
    border-style: none;
    margin-top: 10px;
    position: relative;
    img {
      width: 24px;
      height: 24px;
    }
  }

  .onHover {
    position: absolute;
    display: none;
  }
  .profile {
    position: absolute;
    top: 0;
    left: 3px;
    display: none;
  }
  .post {
    position: absolute;
    top: 0;
    left: 15px;
    display: none;
  }

  button:hover {
    .origin {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
    }
    .onHover {
      display: block;
      top: 0;
      left: 0;
    }
    p {
      color: #12184e;
    }
  }
  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
  }
`;
