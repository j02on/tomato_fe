import styled from "@emotion/styled"
import { Button, FilterBar, Keyword } from "../components"
import { colors, Flex, Text } from "../design-token"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";


export const BlogCreate = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string>('전체')
  const [datas, setDatas] = useState<{title: string, content: string, keyword: string}>({
    title: '',
    content: '',
    keyword: ''
  })

  useEffect(() => {
    setDatas((prev) => ({...prev, keyword: selected}))
  },[selected])

  const handleTextAreaChange = (e : React.ChangeEvent<HTMLTextAreaElement>, type: string) => {
    setDatas((prev) => ({ ...prev, [type]: e.target.value }));
  }

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>, type: string) => {
    setDatas((prev) => ({ ...prev, [type]: e.target.value }));
  }

  const handleWriteClick = () =>{
    //writeapi
  }
  return (
    <Flex isColumn gap={0}>
      <Flex width="100%" gap={0} alignItems="center">
      <SidePage>
        <Flex isColumn gap={38}>
        <Flex isColumn gap={24}>
        <TitleInput type="text" placeholder="제목을 입력하세요" onChange={(e) => handleInputChange(e, 'title')}/>
        <Line/>
        </Flex>
        <FilterBar setSelected={setSelected} selected={selected}/>
        <ContentInput onChange={(e) => handleTextAreaChange(e, 'content')} placeholder="내용을 입력하세요"/>
        </Flex>
      </SidePage>
      <SideMarkdownPage>
        <Flex isColumn gap={24}>
        <Flex isColumn gap={12}>
          <Text fontWeight={600} fontSize={40}>{datas.title}</Text>
          {datas.keyword && (
            <Keyword>{datas.keyword}</Keyword>
          )}
        </Flex>
        <Flex isColumn gap={8}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {datas.content}
        </ReactMarkdown>
        </Flex>
        </Flex>
      </SideMarkdownPage>
      </Flex>
      <BottomContainer>
        <Flex alignItems="center" gap={12}>
          <Button onClick={() => navigate(-1)} backgroundColor={colors.red[100]} color={colors.red[600]}>취소</Button>
          <Button onClick={handleWriteClick}>작성완료</Button>
        </Flex>
      </BottomContainer>
    </Flex>
  )
}

const BottomContainer = styled.div `
  border-top: 1px solid ${colors.gray[300]};
  background-color: ${colors.gray[100]};
  padding: 12px 44px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`

const SidePage = styled.div `
  padding: 100px 60px;
  overflow: scroll;
  width: 50%;
  height: calc(100vh - 70px);
  @media (max-width: 1000px) {
    width: 100%;
  }
`

const SideMarkdownPage = styled(SidePage) `
  @media (max-width: 1000px) {
    display: none;
  }
`

const ContentInput = styled.textarea`
  font-size: 20px;
  color: ${colors.gray[900]};
  width: 100%;
  resize: none;
  border: none;
  height: 360px;
  &::placeholder {
    color: ${colors.gray[500]};
  }
`

const Line = styled.div `
  width: 100%;
  height: 1px;
  background-color: ${colors.gray[400]};
`

const TitleInput = styled.input `
  border: none;
  background-color: transparent;
  color: ${colors.gray[900]};
  font-size: 40px;
  &::placeholder {
    color: ${colors.gray[700]};
  }
`