import { useState } from "react";
import Form from "./Components/Form";
import { URL } from "./constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type responseType = {
  originalUrl?: string;
  shortUrl?: string;
  message?: string;
};

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const validateUrl = (url: string) => {
    // Regular expression to validate URLs
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const handleSubmit = async () => {
    if (inputUrl.length > 50) {
      const checkUrl = validateUrl(inputUrl);

      if (checkUrl) {
        const options = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ url: inputUrl }),
        };

        try {
          setLoading(true);
          let response: responseType = await fetch(URL, options).then((res) =>
            res.json()
          );

          setInputUrl(response?.shortUrl || "");
        } catch (error) {
          console.log("error", error);
          toast.error("Server Error");
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("Please Enter a valid URL");
      }
    } else if (inputUrl.length < 50) {
      toast.error("Please Enter a long URL");
    } else {
      toast.error("Please Enter an URL");
    }
  };

  return (
    <div className="min-h-screen  bg-cyan-100 flex justify-center items-center flex-col">
      <ToastContainer />
      <Form
        loading={loading}
        url={inputUrl}
        setInputUrl={setInputUrl}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
