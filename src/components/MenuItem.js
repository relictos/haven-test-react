import styled from "styled-components";

const MenuItemRoot = styled.div`
  position: relative;
  font-size: var(--title-14-size);
  text-transform: capitalize;
  font-weight: 600;
  font-family: var(--subtitle-12);
  color: var(--text-text-lvl-3);
  text-align: left;
  display: ${(p) => p.menuItemDisplay};
`;

const MenuItem = ({ title = "News Feed", menuItemDisplay }) => {
  return <MenuItemRoot menuItemDisplay={menuItemDisplay}>{title}</MenuItemRoot>;
};

export default MenuItem;
