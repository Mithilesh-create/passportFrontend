import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { updateData } from "../components/backendUri";
export default function Update() {
  const router = useRouter();
  const [FormData, setFormData] = useState({
    title: "",
    description: "",
  });
  const OnChangeHandler = (name, value) => {
    setFormData({ ...FormData, [name]: value });
  };

  const UpdateQuote = async () => {
    const id = router.asPath.split("=")[1];
    const response = await updateData(`/crud/update/${id}`, FormData);
    if (response) {
      setFormData({
        title: "",
        description: "",
      });
      router.replace("/home");
    } else {
      console.log("Error");
    }
  };
  return (
    <>
      <Head>
        <title>Quote Update</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="FormHere">
        <div>
          <label>Quote</label>
          <br />
          <input
            onChange={(e) => OnChangeHandler("title", e.target.value)}
            type={"text"}
            spellCheck={false}
            autoCorrect="false"
            value={FormData.title}
          />
        </div>
        <div>
          <label>Author</label>
          <br />
          <br />
          <input
            type={"text"}
            spellCheck={false}
            autoCorrect="false"
            onChange={(e) => OnChangeHandler("description", e.target.value)}
            value={FormData.description}
          />
        </div>
        <div>
          <button onClick={UpdateQuote} className="registerBtn">
            Update
          </button>
        </div>
      </div>
    </>
  );
}
