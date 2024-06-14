import pnLogo from "../assets/pn-logo.png";
function Header() {
  const batch = "PNC batch 2024";
  return (
    <div>
      <img src={pnLogo} alt="PN Logo" />
      <h1>Students results for {batch}</h1>
    </div>
  );
}
export default Header;
