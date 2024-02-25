"use client";
import { styled } from "styled-components";
import { MAIN } from "../_ui/uiContainers";
import { H1, SectionTitle } from "../_ui/designSystem/textSystem";

export default function Overview() {
  return (
    <OverviewContainer>
      <OverviewContent>
        <SectionTitle>Overview</SectionTitle>
        <VideoAndText>
          <Video>
            <video controls>
              <source
                src="https://www.youtube.com/watch?v=4C1aA_yeqHM"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* <img
              src="https://img.youtube.com/vi/4C1aA_yeqHM/maxresdefault.jpg"
              alt="Video thumbnail"
            /> */}
          </Video>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            aperiam maiores nihil suscipit? Sunt adipisci numquam pariatur a
            repellendus quam debitis necessitatibus obcaecati. Quibusdam tempora
            voluptates impedit quos excepturi deleniti accusamus molestias
            corrupti, adipisci tempore! Natus, vitae vel quae dolore dolores ut
            at explicabo! Eum iure esse quo eius sapiente officiis, soluta alias
            ea sit architecto ut impedit illum odio quia fuga dolore libero!
            quas beatae aut inciibusdam incidunt impedit illo odit distinctio,
            sum dicta quis tempora recusandae ea sit architecto ut impedit illum
            odio quia fuga dolore libero! quas beatae aut inciibusdam incidunt
            impedit illo odit distinctio, sum dicta quis tempora recusandae
            cusandae provident amet alias at possimus. Sunt cumque, ratione
            laudantium sit amet harum fugiat vel.
          </Text>
        </VideoAndText>
      </OverviewContent>
    </OverviewContainer>
  );
}

const OverviewContainer = styled.section`
  background: ${(theme) => theme.theme.secondaryBackgroundColor};
  background: #f5f5f5;
  padding: 60px 0;
`;

const OverviewContent = styled(MAIN)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

const VideoAndText = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  /* align-items: center; */
  gap: 40px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Video = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  background: red;

  img,
  video {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Text = styled.div`
  width: 40%;
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;
