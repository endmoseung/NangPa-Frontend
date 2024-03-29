import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";
import { viewedRecipeAtom } from "../../atom";
import RecentlyViewedRecipe from "./RecentlyViewedRecipe";

const Container = styled.div`
  position: relative;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  padding: 0px 23px;
`;

const Subtitle = styled.p`
  color: #a3a3a3;
  margin: 0;

  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -0.165px;
  white-space: pre-wrap;
  margin: 0;
  margin-bottom: 10px;
`;

const SearchBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #eef1f7;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px 15px 20px;
  gap: 8px;
  border-radius: 10px;
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.165px;

  color: #9ba1af;
`;

const RecentlyViewedRecipeContainer = styled.div`
  position: absolute;
  bottom: 80px;
  width: 100%;
`;

const MainBg = styled.div`
  background-color: #f8fbff;
  height: 100vh;
  width: 100vw;
`;

function Main() {
  const viewedRecipe = useRecoilValue(viewedRecipeAtom);
  return (
    <MainBg>
      <Container>
        <TitleWrapper>
          <Subtitle>🍽</Subtitle>
          <Subtitle>오래된 재료는 비우고 행복은 채우는</Subtitle>
          <Title>냉장고 파먹기</Title>
        </TitleWrapper>
        <Link to={{ pathname: "/search" }}>
          <SearchBtn>
            <Search />
            냉장고를 비워볼까요?
          </SearchBtn>
        </Link>
      </Container>
      {viewedRecipe.length > 0 ? (
        <RecentlyViewedRecipeContainer>
          <RecentlyViewedRecipe />
        </RecentlyViewedRecipeContainer>
      ) : null}
    </MainBg>
  );
}

export default Main;
