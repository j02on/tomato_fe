import styled from "@emotion/styled"
import { colors, Flex } from "../design-token"
import { Logo } from "../assets"
import { Button } from "./Button"

export const Header = () => {
  return (
    <Container>
      <Logo/>
      <Flex gap={16} alignItems="center">
        <Button isRound onClick={() => window.location.href = "https://github.com/j02on"} backgroundColor={colors.red[100]} color={colors.red[600]}>깃허브</Button>
        <Button>로그인</Button>
      </Flex>
    </Container>
  )
}

const Container = styled.header `
  width: 100vw;
  height: 70px;
  border-bottom: 1px solid ${colors.gray[300]};
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.gray[100]};

`