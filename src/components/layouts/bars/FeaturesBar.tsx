import NormalButton from 'components/buttons/NormalButton';

const FeaturesBar = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">Advanced features</span>
      <div className="grid md:grid-cols-2 text-sm">
        <div>
          <p className="text-gray-500 text-sm">
            Most users don’t need these features – but here they are in case you do!
          </p>
          <div className="grid grid-cols-2 my-4">
            <div>
              <button className="bg-[#48be9d] hover:bg-[#26b089] text-white text-md rounded-md px-4 py-1">
                Get Splitwise Pro!
              </button>
            </div>
            <div>
              <NormalButton className="mb-2" text="Merge with another account" />
              <button className="bg-[#c45] hover:bg-[#c82d3f] text-white text-md rounded-md px-4 py-1">
                Delete your account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-[#ff652f] hover:bg-[#f8561b] rounded-md text-sm px-5 py-2.5 mr-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FeaturesBar;
