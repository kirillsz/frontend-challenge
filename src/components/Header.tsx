import Container from "./Container";
import HeaderLink from "./HeaderLink";
import { navLinks } from "../mock/data";
const Header = () => {
  return (
    <header className="text-white bg-blue-600 sticky z-10 top-0 w-full ">
      <Container>
        {navLinks.map((link) => (
          <HeaderLink key={link.name} {...link} />
        ))}
      </Container>
    </header>
  );
};

export default Header;
