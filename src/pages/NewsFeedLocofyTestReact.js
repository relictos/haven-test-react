import MainMenu from "../components/Global/MainMenu";
import NewsFeedNewPost from "../components/NewsFeed/NewsFeedNewPost";
import NewsFeedPost from "../components/NewsFeed/NewsFeedPost";
import styled from "styled-components";
import PopularHavensRec from "../components/NewsFeed/PopularHavensRec";
import NewsFeedBanner from "../components/NewsFeed/NewsFeedBanner";

const NewsFeedPosts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const PageLeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
`;
const RightBlockTitle = styled.div`
  position: relative;
  font-weight: 500;
`;
const Iconsexpand = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ExpandArrow = styled.div`
  border-radius: var(--br-xl);
  background-color: #ebeaeb;
  display: none;
  flex-direction: row;
  padding: 6px;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
const RightBlockSpoiler = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HavenSmallRecs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const HavenSmallRecsBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;

const PageRightColumnContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const PageRightColumn = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--bg-block-bg-default);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.02),
    0px -1px 1px rgba(0, 0, 0, 0.04) inset, 0px 1px 0px #fff inset;
  width: 280px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
  }
`;
const PageColumns = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 420px) {
    gap: var(--gap-xs);
    flex-direction: column-reverse;
  }
`;
const PageContent = styled.div`
  align-self: stretch;
  min-height: 100vh;
  background-color: var(--bg-body-bg);
`;
const PageContentContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl) 40px;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-5xl);
    padding-right: var(--padding-5xl);
    box-sizing: border-box;
  }
`;
const NewsFeedLocofyTestReactRoot = styled.div`
  position: relative;
  background-color: var(--bg-body-outer-bg);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 160px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--title-14-size);
  color: var(--text-text-lvl-3);
  font-family: var(--subtitle-12);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-61xl);
    padding-right: var(--padding-61xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
`;

const NewsFeedLocofyTestReact = () => {
  return (
    <NewsFeedLocofyTestReactRoot>
      <PageContent>
        <PageContentContainer>
          <MainMenu />
          <PageColumns>
            <PageLeftColumn>
              <NewsFeedNewPost content="Create a new publication" />
              <NewsFeedPosts>
                <NewsFeedPost
                  author="Jack Nickelson"
                  date="2 hours ago"
                  content="Bitcoin and Ethereum continue to dominate, while Binance Coin, Solana, and Cardano offer unique features and opportunities..."
                  avatar = "/postauthoravatar@2x.png"
                  likesCount = {144}
                  kudosCount = {25.5}
                  commentsCount = {12}
                />
                <NewsFeedPost
                  author="Jack Nickelson"
                  date="2 hours ago"
                  content="Bitcoin and Ethereum continue to dominate, while Binance Coin, Solana, and Cardano offer unique features and opportunities..."
                />
                <NewsFeedPost
                  author="Jack Nickelson"
                  date="2 hours ago"
                  content="Bitcoin and Ethereum continue to dominate, while Binance Coin, Solana, and Cardano offer unique features and opportunities..."
                />
              </NewsFeedPosts>
            </PageLeftColumn>
            <PageRightColumn>
              <PageRightColumnContent>
                <HavenSmallRecsBlock>
                  <RightBlockSpoiler>
                    <RightBlockTitle>Popular Havens</RightBlockTitle>
                    <ExpandArrow>
                      <Iconsexpand alt="" src="/iconsexpand.svg" />
                    </ExpandArrow>
                  </RightBlockSpoiler>
                  <HavenSmallRecs>
                    <PopularHavensRec
                      title="Onomy Protocol"
                      subtitle="291 followers"
                    />
                    <PopularHavensRec
                      title="Onomy Protocol"
                      subtitle="291 followers"
                    />
                    <PopularHavensRec
                      title="Onomy Protocol"
                      subtitle="291 followers"
                    />
                    <PopularHavensRec
                      title="Onomy Protocol"
                      subtitle="291 followers"
                    />
                    <PopularHavensRec
                      title="Onomy Protocol"
                      subtitle="291 followers"
                      showHavensSmallRecUnderline={false}
                    />
                  </HavenSmallRecs>
                </HavenSmallRecsBlock>
                <NewsFeedBanner></NewsFeedBanner>
              </PageRightColumnContent>
            </PageRightColumn>
          </PageColumns>
        </PageContentContainer>
      </PageContent>
    </NewsFeedLocofyTestReactRoot>
  );
};

export default NewsFeedLocofyTestReact;
