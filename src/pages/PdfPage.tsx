import styled from '@emotion/styled';
import { pdf } from '../assets';

export const PdfPage = () => {
  return (
    <Container>
      <PdfContainer src={pdf}></PdfContainer>
    </Container>
  )
}

const PdfContainer = styled.iframe `
  /* width: 100%; */
  max-width: 794px;
  aspect-ratio: 210 / 297;
`

const Container= styled.div `
  padding: 60px;
  display: flex;
  justify-content: center;
`