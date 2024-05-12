import styled from "styled-components";
interface tagButtonType {
  text: string;
  handle: () => void;
  icon: string;
}
function handle() {
  console.log("handle");
}
const Button = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding: 7px 10px;
  gap: 5px;
  box-shadow: 0px 0px 4px #959595;
`;
const Icon = styled.div<{ src: string }>`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export default function TagButton({ text, handle, icon }: tagButtonType) {
  return (
    <Button handle={handle}>
      <Icon src={icon}></Icon>
      <div>{text}</div>
    </Button>
  );
}
