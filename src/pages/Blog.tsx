import { useState } from "react"
import { Button, FilterBar, PostContent } from "../components"
import { Flex } from "../design-token"
import { useNavigate } from "react-router-dom"
import styled from "@emotion/styled"

export const Blog = () => {
  const navigate = useNavigate()
  const accessToken = "fdsfsd"
  const [datas, setDatas] = useState<{id: number,title: string, content: string, keyword : string}[]>([
    {
      title : 'title',
      content: 'content',
      keyword: '전체',
      id: 1
    },
    {
      title : 'title',
      content: 'content',
      keyword: '전체',
      id: 1
    },
    {
      title : 'title',
      content: 'content',
      keyword: '전체',
      id: 1
    },
  ])

  const [selected, setSelected] = useState<string>('전체')
  return (
    <Flex  paddingTop="60px" justifyContent="center" paddingLeft="60px" paddingRight="60px">
    <Flex isColumn gap={36} width="100%">
      <FilterBar setSelected={setSelected} selected={selected} />
      <Flex isColumn gap={0} width="100%"> 
        {datas.map((data) => (
          <PostContent onClick={() => navigate(`/blog/${data.id}`)} title={data.title} content={data.content} keyword={data.keyword}/>
        ))}
      </Flex>
      {accessToken&& (
      <BtnDiv>
        <Button onClick={() => navigate('/blog-write')}>글 작성하기</Button>
      </BtnDiv>
      )}
    </Flex>
    </Flex>
  )
}

const BtnDiv = styled.div `
  position: fixed;
  bottom: 50px;
  right: 60px;
`