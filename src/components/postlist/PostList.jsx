import React from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.svg";
import message from "../../assets/images/icon-message-circle.png";
import { useState, useEffect } from "react";
import { postUserApi, postDel, likeApi } from "../../api/PostApi";
import { Sect3 } from "./PostListStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import { profileImgState, tokenState } from "../../state/AuthAtom";
import { accountNameState } from "../../state/AuthAtom";
import ModalPostDel from "../modal/ModalPostDel";
import { useNavigate } from "react-router-dom";
import { postIdState } from "../../state/PostAtom";

export default function PostList() {
  const accountName = useRecoilValue(accountNameState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const image = useRecoilValue(profileImgState);
  const token = useRecoilValue(tokenState);
  const [isPostId, setIsPostId] = useState(null);
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // 날짜 데이터 변환 함수
  const getDate = (date) => {
    const _date = new Date(date);
    const yyyy = _date.getFullYear();
    const mm = _date.getMonth() + 1;
    const dd = _date.getDate();
    const hours = _date.getHours();
    const minutes = _date.getMinutes();
    return `${yyyy}.${mm}.${dd}. ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  // const handleLike = async () => {
  //   try {
  //     const res = await likeApi();
  //   } catch (error) {
  //     console.log("좋아요 에러");
  //   }
  // };

  // 유저 게시글 목록 api 요청
  const postFetch = async () => {
    try {
      console.log("토큰", token);
      console.log("어카운트네임", accountName);
      const result = await postUserApi(accountName, token, skip);

      console.log("@@@");
      console.log(result.post);
      console.log(postData);

      setPostData((postData) => {
        return [...postData, ...result.post];
      });
      setSkip((skip) => skip + 20);
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  // inView가 true일때 발동
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  //게시글 상세페이지로 이동
  const handlePostClick = (postId) => {
    localStorage.setItem("postId", postId);
    setPostId(localStorage.getItem("postId"));
    console.log("게시글id", postId);
    navigate("/post");
  };
  //게시글 삭제
  const handlePostDel = async () => {
    try {
      if (isPostId) {
        await postDel(isPostId, token);
        console.log(isPostId, token);
        setPostData((prev) => prev.filter((item) => item.id !== isPostId));

        setIsPostId(null);
      }
    } catch (error) {
      console.error("게시글 삭제 실패");
    }
    setIsModalOpen(false);
  };

  const modalOpen = (e, post_id) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setIsPostId(post_id);
  };
  return (
    <Sect3>
      <div>
        {postData?.map((item, idx) => {
          return (
            <div
              className='content-container'
              key={idx}
              id={item.id}
              // onClick={() => handlePostClick(item.id)}
            >
              <div className='content-list'>
                <div className='content'>
                  <div className='content-title'>
                    <div className='content-id'>
                      <img src={image} alt='' className='profile-img' />
                      <div>
                        <h3>{item.author.accountname}</h3>
                        <p>{item.author.username}</p>
                      </div>
                    </div>
                    <div>
                      <button onClick={(e) => modalOpen(e, item.id)}>
                        <img src={more} alt='' />
                      </button>
                    </div>
                  </div>
                  <div className='content-inner'>
                    <p>{item.content}</p>
                    {item.image && <img src={item.image} alt='' />}
                  </div>
                  <div className='like-comment'>
                    <button>
                      <img src={like} alt='' /> <span>58</span>
                    </button>
                    <button>
                      <img src={message} alt='' /> <span>12</span>
                    </button>
                  </div>
                  <span className='date'>{getDate(item.updatedAt)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={ref}>.</div>
      {ismodalOpen && (
        <ModalPostDel
          setIsModalOpen={setIsModalOpen}
          handlePostDel={handlePostDel}
        />
      )}
    </Sect3>
  );
}
