function EditProfile() {
  return (
    <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-[95%] sm:max-w-[600px] md:max-w-[650px] lg:w-[715px] lg:max-w-none pt-1 rounded-md">
      <form className="space-y-4 sm:space-y-5 md:space-y-6">
        <div>
          <label className="text-lg sm:text-xl text-[#0D0D0D] mb-2 font-bold">
            User Name
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-[#6A6D76] rounded-md outline-none mt-3 sm:mt-4 md:mt-5 placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl"
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label className="text-lg sm:text-xl text-[#0D0D0D] mb-2 font-bold">
            Email
          </label>
          <input
            type="text"
            name="contactNo"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-[#6A6D76] rounded-md outline-none mt-3 sm:mt-4 md:mt-5 placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl"
            placeholder="Enter Contact Number"
            required
          />
        </div>

        <div>
          <label className="text-lg sm:text-xl text-[#0D0D0D] mb-2 font-bold">
            Contact No
          </label>
          <input
            type="text"
            name="location"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-[#6A6D76] rounded-md outline-none mt-3 sm:mt-4 md:mt-5 placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl"
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="text-center py-6 sm:py-8 md:py-10">
          <button className="bg-[#013666] text-white font-semibold w-full py-3 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl transition-colors hover:bg-[#002a6b] active:bg-[#001a44]">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
