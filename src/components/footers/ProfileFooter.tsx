const ProfileFooter = () => {
  return (
    <div className="footer bg-[#666] py-4">
      <div className="grid md:grid-cols-2 max-w-[96rem] mx-auto px-4 gap-y-2">
        <div className="text-center">
          <div className="text-white text-2xl mb-4">Made with ☻ in Providence, RI, USA</div>
          <div className="text-white text-md">
            Copyright © 2022 Splitwise, Inc. All rights reserved.
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center md:justify-end mb-2">
            <a className="mx-4" href="http://www.facebook.com/splitwise">
              <img src="https://assets.splitwise.com/assets/fat_rabbit/homepage/facebook-5b7361fe02ff77e39295fab1cfba2d038c75d9e62839d4a2236864e6866c29fb.png" />
            </a>
            <a href="http://twitter.com/splitwise">
              <img src="https://assets.splitwise.com/assets/fat_rabbit/homepage/twitter-b16b23af4c803a4d6d2474fcbe83e001d93b4d921bee800c3492794128ee3bc1.png" />
            </a>
          </div>
          <div className="text-white">
            <a className="mx-1 underline" href="/about">
              About
            </a>{' '}
            |
            <a className="mx-1 underline" href="/jobs">
              Jobs
            </a>{' '}
            |
            <a className="mx-1 underline" href="/calculators">
              Calculators
            </a>{' '}
            |
            <a className="mx-1 underline" href="https://blog.splitwise.com">
              Blog
            </a>{' '}
            |
            <a className="mx-1 underline" href="/terms">
              Terms
            </a>{' '}
            |
            <a className="mx-1 underline" href="/press">
              Press
            </a>{' '}
            |
            <a className="mx-1 underline" href="http://dev.splitwise.com">
              API
            </a>{' '}
            |
            <a className="mx-1 underline" href="/contact">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFooter;
