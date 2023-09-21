import styled from "styled-components";
import ButtonPrimary from "../../components/Global/ButtonPrimary";

const CreateHavenBannerContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const CreateHavenBannerIcon1 = styled.img`
  position: relative;
  width: 64px;
  height: 64px;
  object-fit: cover;
`;
const CreateHavenBannerText = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const CreateHavenBanner = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--border-border-defaul);
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl);
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--text-text-lvl-1);
`;

const NewsFeedBanner = ({}) => {
  return (
    <CreateHavenBanner>
      <CreateHavenBannerContent>
        <CreateHavenBannerIcon1
          alt=""
          src="/createhavenbannericon-1@2x.png"
        />
        <CreateHavenBannerText>
          Wanna share content and earn money?
        </CreateHavenBannerText>
        <ButtonPrimary text="Create Haven" />
      </CreateHavenBannerContent>
    </CreateHavenBanner>
  );
};

export default NewsFeedBanner;
