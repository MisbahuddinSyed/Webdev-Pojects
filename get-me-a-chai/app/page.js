
export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col justify-center items-center gap-3 mt-22 mb-25">
          <div className="title flex text-6xl font-bold">
            Get Me a Chai <span><img className='w-20' src="/tea.gif" alt="" /></span>
          </div>
          <p className='text-lg font-light'>A crowdfunding platform for creators to fund their projects.</p>
          <p className='text-lg font-light'>A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.</p>
          <div className="flex gap-3 m-5">
            <button className="rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Here</button>
            <button className="rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Purple to Blue</button>
          </div>
        </div>
        <div className="bg-white opacity-20 w-full h-1"></div>
        <div className="container flex flex-col justify-center items-center mx-auto mt-15">
          <div className="title text-3xl font-bold">
            Your Fans can Buy you a Chai
          </div>
          <div className="icons flex justify-between gap-50 mt-16 mb-30">
            <div className="flex flex-col justify-center items-center gap-2">
              <img className='w-22 bg-white rounded-full p-2' src="/man.gif" alt="" />
              <p className="font-bold">Your fans want to Help</p>
              <p>Your fans are available to support you</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img className='w-22 bg-white rounded-full p-2' src="/coin.gif" alt="" />
              <p className="font-bold">Your fans want to Contribute</p>
              <p>Your fans are available to support you</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img className='w-22 bg-white rounded-full p-2' src="/talk.gif" alt="" />
              <p className="font-bold">Your fans want to Collaborate</p>
              <p>Your fans are available to support you</p>
            </div>
          </div>

        </div>
          <div className="bg-white opacity-20 w-full h-1"></div>

      </div>
    </>
  );
}
