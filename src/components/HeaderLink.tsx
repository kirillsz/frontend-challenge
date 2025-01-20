// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NavLink } from "react-router";
interface HeaderLinkProps {
  name: string;
  path: string;
}
const HeaderLink = ({ name, path }: HeaderLinkProps) => {
  const renderClassName = (isActive: boolean) => {
    const bgColor = isActive && "bg-blue-700";
    const textColor = !isActive && "text-white/70";
    return `${bgColor} ${textColor} p-4 md:p-5 xl:p-6 hover:bg-blue-800 transition inline-block`;
  };
  return (
    <NavLink
      className={({ isActive }: boolean) => renderClassName(isActive)}
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default HeaderLink;
