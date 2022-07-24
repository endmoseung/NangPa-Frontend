import React from 'react';
import { Row, Col, Container, Figure, Button, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import './mypage.css';

const ProfileWrap = styled.div`
    position: relative;
    margin-top: 45px;
    margin-bottom: 21px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
`;

const UserAccount = styled.strong`
    display: inline-flex;
    margin-bottom: 2px;
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.05em;
    color: #232323;
`;

const UserProfile = styled.h2`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 94px;
    height: 94px;
    margin-top: 14px;
    margin-bottom: 4px;
    border-radius: 50%;
    background: #dad9d9;
`;

const UserButtonGroup = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
`;

const LinkWrap = styled.div`
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 20px;
`;

const LinkTitle = styled.h3``;

const LinkImage = styled.i``;

function MyPageIndex() {
    return (
        <Container className='container mypage-wrap min-vh-100'>
            <Row xs={12} className='d-flex flex-column'>
                <Col xs={12}>
                    <ProfileWrap>
                        <Figure className='d-flex flex-column align-items-center justify-content-center'>
                            <UserProfile>
                                <Figure.Image width={94} height={94} alt='' src='/' />
                            </UserProfile>
                            <Figure.Caption className='d-flex flex-column align-items-center justify-content-center profile-info-wrap'>
                                <UserAccount>User12345</UserAccount>
                                고독한 다이어터
                            </Figure.Caption>
                        </Figure>
                        {/* TODO: 버튼 영역 역할애 따랄 label 값 변경 해주어야 함 */}
                        <UserButtonGroup>
                            <Button className='btn-profile'>안 매운 음식</Button>
                            <Button className='btn-profile'>안 매운 음식</Button>
                            <Button className='btn-profile'>안 매운 음식</Button>
                        </UserButtonGroup>
                    </ProfileWrap>
                </Col>
                <Col xs={12}>
                    <Nav activeKey='/mybadge' onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link href='/mybadge'>
                                <LinkWrap>
                                    <LinkTitle>
                                        내가 받은
                                        <br />
                                        뱃지
                                    </LinkTitle>
                                    <LinkImage>아이콘</LinkImage>
                                </LinkWrap>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='link-1'>
                                <LinkWrap>
                                    <LinkTitle>
                                        냉파
                                        <br />
                                        달력
                                    </LinkTitle>
                                    <LinkImage>아이콘</LinkImage>
                                </LinkWrap>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='link-2'>
                                <LinkWrap>
                                    <LinkTitle>
                                        저장한 <br />
                                        레시피
                                    </LinkTitle>
                                    <LinkImage>아이콘</LinkImage>
                                </LinkWrap>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='disabled' disabled>
                                <LinkWrap>
                                    <LinkTitle>
                                        내가 만든 <br />
                                        레시피
                                    </LinkTitle>
                                    <LinkImage>아이콘</LinkImage>
                                </LinkWrap>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default MyPageIndex;
