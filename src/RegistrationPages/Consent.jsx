import { useNavigate } from "react-router-dom";

const Constent = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex justify-center items-center  pb-8">
      <div className="w-[45%]   shadow-primary/50 shadow-lg rounded-xl ">
        <h1 className="text-2xl font-montserrat font-semibold text-center p-4">
          Constant
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto">
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Fisrt Name
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                className="w-full py-2 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="First Name"
              />
            </span>
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Last Name
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                className="w-full py-2 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Last Name"
              />
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                constent
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <p>
                I, ( First Name | Last Name ) hereb by verify that I am
                entrusted & authorized by ( option selected above ) with the
                name ------- to create a profile on Connecting Soulmate for a
                likehood of marriage. I have all the relevant & correct details
                and assuure to that follow the terms & conditions.
              </p>
            </span>

            <span className="flex gap-2 pt-2 pb-6 items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[20px] h-[20px]  accent-[#A92525]  "
              />
              <p className="text-xl font-montserrat font-medium">I Agree</p>
            </span>

            <button className="px-6 py-2 mb-[4rem] bg-[#A92525] font-montserrat rounded-lg text-white hover:opacity-80">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Constent;
