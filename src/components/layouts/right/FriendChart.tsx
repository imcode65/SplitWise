import NormalButton from 'components/buttons/NormalButton';

const FriendChart = () => {
  return (
    <div>
      <span className="text-gray-500 font-semibold">TRENDS THIS MONTH</span>
      <div className="mt-2">
        <div className="stat">
          <span className="font-semibold">Total you paid for</span>
          <div className="text-gray-500">$0.00</div>
        </div>
        <div className="stat">
          <span className="font-semibold">Your total share</span>
          <div className="text-gray-500">$0.00</div>
        </div>
        <div className="stat">
          <span className="font-semibold">Payments made</span>
          <div className="text-gray-500">$0.00</div>
        </div>
        <div className="stat">
          <span className="font-semibold">Payments received</span>
          <div className="text-gray-500">$0.00</div>
        </div>
        <div className="stat">
          <span className="font-semibold">Total change in balance</span>
          <div className="text-gray-500">$0.00</div>
        </div>
      </div>
    </div>
  );
};

export default FriendChart;
