function NavBar() {
  return (
    <>
      <div className="flex justify-between px-5 py-3">
        <div className="flex gap-5">
          <div> logo</div>
          <div>Jcbm college</div>
        </div>
        <div className="flex gap-5 ">
          <div>Home</div>
          <div>About Us</div>
          <div>Services</div>
          <div>Products</div>
          <div>Contact Us</div>
        </div>
        <div className=" flex gap-5 ">
          <div>signup</div>
          <div>login</div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
