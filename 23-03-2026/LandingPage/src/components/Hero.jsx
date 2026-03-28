function Hero() {
  return (
    <>
      <section
        className=" flex w-full justify-center  items-center h-75 "
        style={{ backgroundImage: "url" }}
      >
        <div className="text-center flex flex-col items-center">
          <div className="text-6xl pb-5 font-serif">
            Find the best✈️flights faster
          </div>
          <div className="text-5xl pb-10 text-gray-400">Travel smarter</div>
        </div>
      </section>
      <section className="flex gap-20 pr-30 pl-30 flex gap-5">
        <div>Round trip</div>
        <div>Passengers</div>
      </section>
      <section className=" flex gap-15 pr-30 pl-30 ">
        <div>
          <div>From</div>
          <div className=" font-bold">Warsaw, Poland</div>
        </div>
        <div>
          <div>To</div>
          <div className=" font-bold">Bangkok, Thailand</div>
        </div>
        <button className="flex ">
          <button className="px-6 py-3 rounded-2xl bg-black text-fuchsia-50">
            Search
          </button>
        </button>
      </section>
    </>
  );
}
export default Hero;
