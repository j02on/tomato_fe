import { useState } from "react"
import { colors, Flex, Text } from "../design-token"
import { Button, DelModal } from "../components"
import styled from "@emotion/styled"
import { useNavigate, useParams } from "react-router-dom"
import  ReactMarkdown  from 'react-markdown';
import remarkGfm from "remark-gfm"

export const BlogDetail = () => {
  const [datas, _] = useState<{title: string, createdAt: string, content: string}>({
    title: 'title',
    createdAt: '2024-01-01',
    content: 'content'
  })
  const [isDelModalShow, setIsDelModalShow] = useState<boolean>(false)

  const accessToken = 'dsadddds'
  const {id} = useParams()
  const blogId = Number(id)
  
  const navigate = useNavigate()

  const handleDelModalClick = () => {
    setIsDelModalShow(true)
  }

  const handleDelClick = () =>{
    //del api
  }
  return (
    <Container>
      <Flex isColumn gap={44} width="100%">
      <Flex justifyContent="space-between" alignItems="center" width="100%">
      <Flex isColumn gap={20}>
        <Text fontSize={36} fontWeight={600} >{datas.title}</Text>
        <Text fontSize={20} fontWeight={300} color={colors.gray[500]}>{datas.createdAt}</Text>
      </Flex>
      {accessToken && (
      <Flex alignItems="center" gap={12}>
        <Button onClick={() => navigate(`/blog-edit/${blogId}`)} backgroundColor={colors.red[100]} color={colors.red[600]}>수정</Button>
        <Button onClick={handleDelModalClick}>삭제</Button>
      </Flex>
      )}
      </Flex>
      <Flex isColumn gap={8}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {datas.content}
        </ReactMarkdown>
      </Flex>
      </Flex>
      <DelModal onDelete={handleDelClick} setIsOpen={setIsDelModalShow} isOpen={isDelModalShow}/>
    </Container>
  )
}

const Container = styled.div `
  padding: 60px;
`