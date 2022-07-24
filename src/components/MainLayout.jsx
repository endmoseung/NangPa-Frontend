import styled from 'styled-components';

const StyledMainLayout = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const MainLayout = ({ children }) => {
    return <StyledMainLayout>{children}</StyledMainLayout>;
};

export default MainLayout;
