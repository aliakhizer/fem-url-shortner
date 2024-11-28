import Button from "./common/Button";
import { useEffect } from "react";
export default function ShorterLink() {
  async function getShortUrl() {
    let formData = new FormData();
    formData.append(
      "url",
      "https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors"
    );
    await fetch("https://smolurl.com/api/links", {
      method: "POST",
      body: JSON.stringify({
        url: "https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getShortUrl();
  }, []);

  return (
    <>
      <div className="container w-[90%] rounded px-8 py-12 mx-auto bg-boost-desktop bg-primary-violet  flex gap-4 flex-col md:flex-row justify-center items-center  ">
        <input
          type="text"
          className="p-2 w-full rounded  "
          placeholder="Enter your link here..."
        />

        <div className="w-full md:w-1/5 ">
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </>
  );
}
