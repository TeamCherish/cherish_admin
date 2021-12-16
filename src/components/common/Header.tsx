import styled from "styled-components";
import { theme } from "styled-tools";
import cherishLogo from "../../assets/images/cherish_logo.png"
import logoutIcon from "../../assets/icons/logout.svg"

export default function Header() {
  return (
    <StHeader>
      <StMenuWrapper>
        <StLogo>
          <StLogoImage src={cherishLogo}></StLogoImage>
          <span>Cherish Admin</span>
        </StLogo>
        <StMenuList>
          <StDashboard>Cherish Dashboard</StDashboard>
          <StUser>Users</StUser>
        </StMenuList>
      </StMenuWrapper>
      <StLogoutWrapper>
        <StLogoutIcon src={logoutIcon}></StLogoutIcon>
        <span>logout</span>
      </StLogoutWrapper>
    </StHeader>
    
  );
}

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.1rem;
  width: 100%;
`;

const StMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5.5rem;

  & > span{
    font-family: ${theme("fonts.engBold")};
    color: ${theme("colors.mainColor")};
  }
`;

const StLogoImage = styled.img`
  margin-right: 1.5rem;
  width: 3.2rem;
  height: 4.6rem;
`;

const StMenuList = styled.div`
  display: flex;
`;

const StDashboard = styled.div`
  font-family: ${theme("fonts.engBold")};
  color: ${theme("colors.textBlack")};
  margin-right: 5.2rem;
`;

const StUser = styled.div`
  font-family: ${theme("fonts.engBold")};
  color: ${theme("colors.textGray")};
`;

const StLogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span{
    font-family: ${theme("fonts.engRegular")};
    color: ${theme("colors.textBlack")};
  }
`;

const StLogoutIcon = styled.img`
  width: 5.5rem;
  height: 5.5rem;
`;