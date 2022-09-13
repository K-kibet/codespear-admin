import React from 'react';
import { addCourse } from '../firebase';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    width: 95%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 20px;
    color: aqua;
`

const Input = styled.input`
    padding: 5px;
    width: 90%;
    border: none;
    margin: 20px;
    box-shadow: 0px 1px 3px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 3px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 3px 2px rgba(0,0,0,0.75);
    height: ${props => props.height}px;
`

const Button = styled.button`
    width: 180px;
    padding: 10px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 20px;
    border-radius: 10px;
    border: none;
`

const PostCourse = () => {

    const handlePost = (e) => {
        e.preventDefault();
        addCourse()
    }
    return (
        <Container>
            <Form onSubmit={handlePost}>
                <Title>Write Course Details</Title>
                <Input type='text' height={20}/>
                <Input type='text' height={100}/>
                <Input type='text' height={200}/>
                <Input type='text' height={250}/>
                <Input type='text' height={250}/>
                <Button>Post</Button>
            </Form>
        </Container>
    );
}

export default PostCourse;
