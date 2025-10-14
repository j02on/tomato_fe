import styled from "@emotion/styled"
import { colors, Flex } from "../design-token"

interface IBarType {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selected?: string;
}

export const FilterBar = ({setSelected, selected = "전체"}: IBarType) => {
  
  return (
    <Flex gap={12} alignItems="center">
      <Keyword onClick={() => setSelected('전체')} isSelected={selected === "전체"}>전체</Keyword>
      <Keyword onClick={() => setSelected('개인프로젝트')} isSelected={selected === "개인프로젝트"}>개인프로젝트</Keyword>
      <Keyword onClick={() => setSelected('팀프로젝트')} isSelected={selected === "팀프로젝트"}>팀프로젝트</Keyword>
      <Keyword onClick={() => setSelected('공부')} isSelected={selected === "공부"}>공부</Keyword>
      <Keyword onClick={() => setSelected('프론트엔드')} isSelected={selected === "프론트엔드"}>프론트엔드</Keyword>
      <Keyword onClick={() => setSelected('백엔드')} isSelected={selected === "백엔드"}>백엔드</Keyword>
      <Keyword onClick={() => setSelected('앱')} isSelected={selected === "앱"}>앱</Keyword>
      <Keyword onClick={() => setSelected('디자인')} isSelected={selected === "디자인"}>디자인</Keyword>
      <Keyword onClick={() => setSelected('기타')} isSelected={selected === "기타"}>기타</Keyword>
    </Flex>
  )
}

const Keyword = styled.div<{isSelected : boolean}>`
  padding: 9px 16px;
  border-radius: 100px;
  background-color: ${({isSelected}) => isSelected ? colors.red[100] : colors.gray[200]};
  color: ${({isSelected}) => isSelected ? colors.red[600] : colors.gray[800]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`