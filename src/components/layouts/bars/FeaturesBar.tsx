import NormalButton from 'components/buttons/NormalButton';

const FeaturesBar = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">Advanced features</span>
      <div className="grid md:grid-cols-2">
        <div className="mb-8">
          <p className="text-gray-500 text-sm">
            Most users don’t need these features – but here they are in case you do!
          </p>
          <div className="grid grid-cols-2">
            <div>1</div>
            <div>2</div>
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
    </div>
  );
};

export default FeaturesBar;
