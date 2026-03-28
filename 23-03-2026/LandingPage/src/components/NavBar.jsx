function NavBar() {
  return (
    <>
      <div className=" flex justify-between">
        <div className="flex pl-30">
          <div>Sky Explorer</div>
        </div>
        <div className="flex gap-5">
          <div>Features</div>
          <div>Method</div>
          <div>Pricing</div>
          <div> Changelog</div>
        </div>
        <button className="flex gap-5 pr-30 ">
          <button className=" bg-mauve-200 text-black px-6 py-2 rounded-2xl" >Log in</button>
        </button>
      </div>
    </>
  );
}
export default NavBar;
