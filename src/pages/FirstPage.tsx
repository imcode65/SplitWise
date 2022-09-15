import { NavLink } from 'react-router-dom';
import FooterBar from 'components/footers/FooterBar';

const FirstPage = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 my-8">
          <div className="ml-8">
            <p className="font-semibold text-6xl text-gray-600">
              Less stress when sharing expenses
            </p>
            <p className="font-semibold text-6xl text-teal-color">on tips</p>
            <p className="text-lg my-4">
              Keep track of your shared expenses and balances with housemates, trips, groups,
              friends, and family.
            </p>
            <NavLink
              to="/signup"
              type="button"
              className="text-white bg-teal-color w-48 h-16 text-xl hover:bg-teal-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-4 text-center"
            >
              Sign up
            </NavLink>
          </div>
          <div>
            <img src="./asset1.png" className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-wrap">
        <div className="bg-facets w-full text-white pt-8 bg-charcoal lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center font-mont">Track balances</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Keep track of shared expenses, balances, and who owes who.
              </p>
            </div>
            <img src="./asset1.png" className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
        <div className="bg-facets w-full text-white pt-8 bg-teal h-sm-landing-feature lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center">Organize expenses</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Split expenses with any group: trips, housemates, friends, and family.
              </p>
            </div>
            <img src="./asset2.png" className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
        <div className="bg-facets w-full text-white pt-8 bg-orange lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center">Add expenses easily</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Quickly add expenses on the go before you forget who paid.
              </p>
            </div>
            <img src="./asset3.png" className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
        <div className="bg-facets w-full text-white pt-8 bg-charcoal lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center">Pay friends back</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Settle up with a friend and record any cash or online payment.
              </p>
            </div>
            <img src="./asset4.png" className="mx-auto w-65 lg:w-81" />
          </div>
        </div>

        <div className="bg-facets w-full text-white pt-8 h-landing-feature bg-purple flex-col lg:flex-row flex justify-between lg:flex">
          <div className="lg:w-1/2">
            <div className="lg:flex lg:flex-col lg:justify-center lg:h-full">
              <h1 className="text-2xl text-center">Get even more with PRO</h1>
              <p className="text-center mt-2 text-lg mb-6 max-w-95 mx-auto">
                Get even more organized with receipt scanning, charts and graphs, currency
                conversion, and more!
              </p>
              <div className="flex justify-center  mb-4">
                <NavLink
                  className="mx-auto px-10 py-3 bg-charcoal-trans border border-white shadow text-white font-mont font-semibold rounded sm-cta-button"
                  to="/signup"
                >
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mb-2">
            <div className="lg:flex lg:flex-col lg:justify-end lg:h-full">
              <img src="./asset5.png" className="w-65 lg:w-81 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default FirstPage;
