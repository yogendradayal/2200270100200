import React, { ChangeEvent } from "react";
import loader from "../loadergif.gif";

type formProps = {
  loading: boolean;
  url: string;
  setInputUrl: (value: string) => void;
  handleSubmit: () => void;
};

const Form = ({ url, setInputUrl, handleSubmit, loading }: formProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  return (
    <>
      <div className="bg-sky-500 md:w-[30%] w-[100%] p-4 rounded-md text-white font-bold text-2xl ">
        <span>URL SHORTNER</span>
      </div>
      <div className="md:w-[30%] w-[100%]">
        <input
          value={url}
          onChange={handleChange}
          type="text"
          placeholder="Enter long URL"
          className="p-3 rounded-sm w-[100%] mt-4"
        />
        <button
          onClick={handleSubmit}
          className="p-3 rounded-sm w-[100%] mt-4 bg-blue-800 text-white font-bold text-xl "
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <img
                src={loader}
                alt=""
                style={{ width: "30px", height: "25px" }}
              />
            </div>
          ) : (
            "SUBMIT"
          )}
        </button>
      </div>
    </>
  );
};

export default Form;
