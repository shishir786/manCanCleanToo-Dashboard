function EditProfile() {
  return (
    <div className="bg-white px-20 w-[715px] pt-1 rounded-md">
      <form className="space-y-4">
        <div>
          <label className="text-xl text-[#0D0D0D] mb-2 font-bold">
            User Name
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full px-5 py-3 border-2 border-[#6A6D76] rounded-md outline-none mt-5 placeholder:text-xl"
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label className="text-xl text-[#0D0D0D] mb-2 font-bold">Email</label>
          <input
            type="text"
            name="contactNo"
            className="w-full px-5 py-3 border-2 border-[#6A6D76] rounded-md outline-none mt-5 placeholder:text-xl"
            placeholder="Enter Contact Number"
            required
          />
        </div>

        <div>
          <label className="text-xl text-[#0D0D0D] mb-2 font-bold">
            Contact No
          </label>
          <input
            type="text"
            name="location"
            className="w-full px-5 py-3 border-2 border-[#6A6D76] rounded-md outline-none mt-5 placeholder:text-xl"
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="text-center py-10">
          <button className="bg-[#013666] text-white font-semibold w-full py-3 rounded-lg ">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
