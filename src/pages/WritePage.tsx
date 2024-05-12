import BarButton from "src/component/barButton";
import Line from "src/component/line";
import styled from "styled-components";

import addPhoto from "../assets/addPhoto.png";
import bench from "../assets/bench.png";
import emo1 from "../assets/emo1.png";
import emo2 from "../assets/emo2.png";
import emo3 from "../assets/emo3.png";
import emo4 from "../assets/emo4.png";
import emo5 from "../assets/emo5.png";
import heart from "../assets/heart.png";
import people from "../assets/people.png";
import person from "../assets/person.png";
import quiet from "../assets/quiet.png";
import tree from "../assets/tree.png";
import TagButton from "../component/tagButton";
import Text from "../component/text";
const Wraper = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  align-items: left;
  margin-top: 40px;
  gap: 7px;
  & div {
    margin-bottom: 10px;
  }
`;
const TagWrapper = styled.div`
  display: flex;
  width: 110%;
  z-index: 1500;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const EmoWrap = styled.div`
  display: flex;
  gap: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 200px;
  border: 1px solid #989ca8;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: Poppins;
  color: #686f80;
`;
function handle() {
  console.log("click");
}
export default function WritePage() {
  return (
    <Wraper>
      <div>
        <Text
          color="black"
          text="좋은 휴식시간 보내셨나요?"
          fontSize="22px"
          fontWeight="700"
        />
      </div>

      <Text
        color="grey"
        text="이 장소에서 휴식시간을 보내신 것 같아요"
        fontSize="14px"
        fontWeight="400"
      />
      <Text
        color="#343434"
        text="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
        fontSize="14px"
        fontWeight="400"
      />
      <Line />
      <Text
        color="grey"
        text="이 장소가 어떤 장소였는지 알려주세요"
        fontSize="14px"
        fontWeight="400"
      />
      <TagWrapper>
        <TagButton text="뷰가 좋은" handle={handle} icon={tree}></TagButton>
        <TagButton text="쾌적한 실내" handle={handle} icon={bench}></TagButton>
        <TagButton text="인기" handle={handle} icon={heart}></TagButton>
        <TagButton text="여러 명" handle={handle} icon={people}></TagButton>
        <TagButton text="나홀로" handle={handle} icon={person}></TagButton>
        <TagButton text="조용한" handle={handle} icon={quiet}></TagButton>
      </TagWrapper>
      <Text
        color="grey"
        text="휴식시간의 감정을 기록해 볼까요?"
        fontSize="14px"
        fontWeight="400"
      />
      <EmoWrap>
        <img src={emo1} alt="emo1" />
        <img src={emo2} alt="emo2" />
        <img src={emo3} alt="emo3" />
        <img src={emo4} alt="emo4" />
        <img src={emo5} alt="emo5" />
      </EmoWrap>

      <Text
        color="grey"
        text="휴식시간에 대한 간단한 기록도 남겨보세요"
        fontSize="14px"
        fontWeight="400"
      />
      <img src={addPhoto} alt="emo1" />
      <Input />
      <BarButton text="쉼터 로그 저장"></BarButton>
    </Wraper>
  );
}
