import { useState } from "react"
import { FilterBar, PostContent } from "../components"
import { Flex } from "../design-token"
import { useNavigate } from "react-router-dom"

export const Blog = () => {
  const navigate = useNavigate()
  const [datas, setDatas] = useState<{id: number,title: string, content: string, keyword : string[]}[]>([
    {
      title : 'title',
      content: 'content',
      keyword: ['keyword', 'keyword'],
      id: 1
    },
    {
      title : 'title',
      content: 'content',
      keyword: ['keyword', 'keyword'],
      id: 1
    },
    {
      title : 'title',
      content: 'content',
      keyword: ['keyword', 'keyword'],
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
    </Flex>
    </Flex>
  )
}