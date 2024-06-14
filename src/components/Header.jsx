import pnLogo from "../assets/pn-logo.png";
function Header() {
  return (
    <div>
      <img src={pnLogo} alt="PN Logo" />
      <h1>Students results for (fake batch name))</h1>
    </div>
  );
}
export default Header;
