import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageHeading from "../../shared/PageHeading";

function AboutUs() {
  const [content, setContent] = useState(
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum."
  );
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  // 🔹 Save Handler
  const handleSave = () => {
    console.log("Editor Content:", content);
    alert("Privacy Policy saved successfully!");
  };

  return (
    <div >
      {/* Header */}
      <div className="rounded-t-lg mt-5 bg-[#013666] text-white py-3 flex flex-row justify-between items-center mx-5 px-5">
        <PageHeading title="About Us" />
      </div>

      {/* Editor */}
      <div className="mx-5 bg-white rounded-b-lg shadow p-5 h-full">
        <ReactQuill
          style={{ minHeight: "400px", fontSize: "18px" }}
          theme="snow"
          value={content}
          onChange={setContent}
        />
      </div>

      {/* Upload + Save */}
      <div className="text-center mx-5 py-5">
        <div className="mt-6 flex items-center gap-3 justify-center">
          {/* Upload Button */}
          <label
            htmlFor="file-upload"
            className="flex items-center px-4 py-2 bg-gray-100 border rounded-lg cursor-pointer hover:bg-gray-200"
          >
            Upload your image
            <input
              id="file-upload"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="bg-[#013666] text-white font-semibold px-6 py-2 rounded transition duration-200 hover:bg-[#0250a3]"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
