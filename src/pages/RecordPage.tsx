import Line from "src/component/line";
import Text from "src/component/text";
import styled from "styled-components";
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
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
`;
export default function RecordPage() {
  return (
    <Wraper>
      <div>
        <Text
          color="black"
          text="쌍암공원 호수 정자"
          fontSize="22px"
          fontWeight="700"
        />
      </div>

      <Text
        color="grey"
        text="이 장소에서 보냈던 휴식시간에 대한 기록이 있어요"
        fontSize="14px"
        fontWeight="400"
      />
      <TextBox>
        좋은 사람들과 대화도 하고 잠시 밖에서 쉴 수 있어 좋았다.
      </TextBox>
      <Text
        color="grey"
        text="이곳에서의 순간들"
        fontSize="14px"
        fontWeight="400"
      />
      <Text
        color="grey"
        text="이 장소에서 보냈던 휴식시간에 대한 기록이 있어요"
        fontSize="14px"
        fontWeight="400"
      />

      <Text
        color="grey"
        text="이곳에서의 순간들"
        fontSize="14px"
        fontWeight="400"
      />
    </Wraper>
  );
}
