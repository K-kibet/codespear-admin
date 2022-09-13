import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`

const Error = () => {
    return (
        <Container>
            Page Not Found!
        </Container>
    );
}

export default Error;
