import styled from "styled-components";
import { theme } from "styled-tools";
import cherishLogo from "../../assets/images/cherish_logo.png"
import logoutIcon from "../../assets/icons/logout.svg"

export default function Header() {
  return (
    <StyledHeader>
      <MenuWrapper>
        <Logo>
          <LogoImage src={cherishLogo}></LogoImage>
          <span>Cherish Admin</span>
        </Logo>
        <MenuList>
          <Dashboard>Cherish Dashboard</Dashboard>
          <User>Users</User>
        </MenuList>
      </MenuWrapper>
      <LogoutWrapper>
        <LogoutIcon src={logoutIcon}></LogoutIcon>
        <span>logout</span>
      </LogoutWrapper>
    </StyledHeader>
    
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.1rem;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5.5rem;

  & > span{
    font-size: ${theme("fontSizes.engBold")};
    font-family: ${theme("fonts.engBold")};
    color: ${theme("colors.mainColor")};
  }
`;

const LogoImage = styled.img`
  margin-right: 1.5rem;
  width: 3.2rem;
  height: 4.6rem;
`;

const MenuList = styled.div`
  display: flex;
`;

const Dashboard = styled.div`
  font-family: ${theme("fonts.engBold")};
  font-size: ${theme("fontSizes.engBold")};
  color: ${theme("colors.textBlack")};
  margin-right: 5.2rem;
`;

const User = styled.div`
  font-family: ${theme("fonts.engBold")};
  font-size: ${theme("fontSizes.engBold")};
  color: ${theme("colors.textGray")};
`;

const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span{
    font-family: ${theme("fonts.engRegular")};
    font-size: ${theme("fontSizes.engRegular")};
    color: ${theme("colors.textBlack")};
  }

`;

const LogoutIcon = styled.img`
  width: 5.5rem;
  height: 5.5rem;
`;