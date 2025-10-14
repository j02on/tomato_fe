import styled from "@emotion/styled"
import { colors, Flex, Text } from "../design-token"
import { Keyword } from "./Keyword"

interface IPostType {
  title: string,
  content: string,
  keyword: string[],
  onClick?: () => void
}

export const PostContent = ({title, content, keyword, onClick} : IPostType) => {
  return (
    <Container>
      <Text fontSize={24} fontWeight={600}>{title}</Text>
      <Text fontSize={16} fontWeight={300} color={colors.gray[500]}>{content}</Text>
      <Flex>
        {keyword.map((data, index) => (
          <Keyword key={index}>{data}</Keyword>
        ))}
      </Flex>
    </Container>
  )
}

const Container = styled.div `
  width: 100%;
  padding: 35px 44px;
  background-color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid ${colors.gray[300]};
`