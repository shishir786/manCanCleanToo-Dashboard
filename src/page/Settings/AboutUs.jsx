import { useState } from "react";
import PageHeading from './../../shared/PageHeading';

export default function AboutUs() {
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (

    <div>

      <div className="rounded-t-lg mt-5 bg-[#013666] text-white py-3 flex flex-row justify-between items-center mx-5 px-5">
        <PageHeading title="About Us" />
      </div>
    <div className="min-h-screen mx-5 bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="About Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-gray-500">Upload a banner image</p>
        )}

        {/* Upload Button */}
        <label
          htmlFor="file-upload"
          className="absolute bottom-3 right-3 bg-white px-4 py-2 rounded-lg shadow cursor-pointer text-sm font-medium hover:bg-gray-100"
        >
          Upload Image
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-[#013666] mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Welcome to our platform! We are dedicated to creating innovative
          digital solutions that empower people and businesses. Our team
          combines creativity, technology, and passion to deliver unique
          experiences. <br /> <br />
          From design to development, we focus on quality and user-friendly
          interfaces. Our mission is to simplify technology and bring value to
          your everyday life. Thank you for being part of our journey.
        </p>
      </div>
    </div>
    </div>
  );
}
