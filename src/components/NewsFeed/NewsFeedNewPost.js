import styled from "styled-components";

const NewPostText = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  opacity: 0.8;
`;
const NewPostSendButtonIcon = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
`;
const NewPostBlockRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--border-border-defaul);
  display: flex;
  flex-direction: row;
  padding: var(--padding-base);
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: var(--title-14-size);
  color: var(--text-text-lvl-3);
  font-family: var(--subtitle-12);
`;

const NewsFeedNewPost = ({ content = "Create a new publication" }) => {
  return (
    <NewPostBlockRoot>
      <NewPostText>{content}</NewPostText>
      <NewPostSendButtonIcon alt="" src="/newpostsendbutton.svg" />
    </NewPostBlockRoot>
  );
};

export default NewsFeedNewPost;
