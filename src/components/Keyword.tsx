import styled from "@emotion/styled"
import { colors } from "../design-token"

interface IKeywordType {
  children: string
}

export const Keyword = ({children} : IKeywordType) => {
  return (
    <KeywordContainer>
      {children}
    </KeywordContainer>
  )
}

const KeywordContainer = styled.div `
  padding: 6px 12px;
  border-radius: 100px;
  background-color: ${colors.gray[200]};
  color: ${colors.gray[500]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`