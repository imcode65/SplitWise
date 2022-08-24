const FooterBar = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="container mx-auto text-grey-light lg:flex lg:max-w-5xl px-8">
          <div className="px-7 flex w-full justify-between text-sm leading-tight lg:justify-start lg:leading-relaxed lg:pl-0">
            <div className="lg:pr-8">
              <p className="font-bold text-teal mb-1">Splitwise</p>
              <ul className="text-grey-light leading-normal">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/press">Press</a>
                </li>
                <li>
                  <a href="https://blog.splitwise.com">Blog</a>
                </li>
                <li>
                  <a href="/jobs">Jobs</a>
                </li>
                <li>
                  <a href="/calculators">Calculators</a>
                </li>
                <li>
                  <a href="https://dev.splitwise.com/">API</a>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block border-r border-grey-lightest h-30"></div>
            <div className="lg:px-8">
              <p className="font-bold text-orange mb-1">Account</p>
              <ul className="text-grey-light leading-normal">
                <li>
                  <a href="#"></a>
                  <a href="/login">Log in</a>
                </li>
                <li>
                  <a href="#"></a>
                  <a href="/signup">Sign up</a>
                </li>
                <li>
                  <a href="#"></a>
                  <a href="/password_reset">Reset password</a>
                </li>
                <li>
                  <a href="#"></a>
                  <a href="/account/settings">Settings</a>
                </li>
                <li>
                  <a href="/subscriptions/new">
                    <i className="pro-icon small"></i>Splitwise Pro
                  </a>{' '}
                </li>
              </ul>
            </div>
            <div className="hidden lg:block border-r border-grey-lightest h-30"></div>
            <div className="lg:pl-8">
              <p className="font-bold text-charcoal mb-1">More</p>
              <ul className="text-grey-light leading-normal">
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="http://feedback.splitwise.com/knowledgebase">FAQ</a>
                </li>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li className="mt-2">
                  <a href="https://twitter.com/splitwise" className="pr-1 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      className="fill-current inline"
                    >
                      <path d="M23.536 3.116a9.826 9.826 0 0 1-2.776.761 4.872 4.872 0 0 0 2.126-2.675 9.986 9.986 0 0 1-3.073 1.163 4.834 4.834 0 0 0-8.238 4.404c-4.018-.19-7.58-2.12-9.964-5.037a4.738 4.738 0 0 0-.654 2.432c0 1.68.855 3.157 2.15 4.025a4.819 4.819 0 0 1-2.19-.606v.06a4.837 4.837 0 0 0 3.878 4.743 4.909 4.909 0 0 1-2.174.084 4.85 4.85 0 0 0 4.524 3.357 9.696 9.696 0 0 1-5.995 2.068c-.384 0-.766-.022-1.15-.065A13.751 13.751 0 0 0 7.425 20c8.896 0 13.755-7.365 13.755-13.742 0-.205 0-.413-.015-.619a9.763 9.763 0 0 0 2.417-2.504l-.046-.02z"></path>
                    </svg>
                  </a>
                  <a href="https://facebook.com/splitwise" className="pr-1 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                      className="fill-current inline"
                    >
                      <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/splitwise/" className="pl-1 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-current inline"
                    >
                      <path d="M10 0C7.283 0 6.944.013 5.877.06 4.813.11 4.087.278 3.45.525a4.897 4.897 0 0 0-1.772 1.153A4.88 4.88 0 0 0 .525 3.45C.277 4.088.109 4.812.06 5.877.01 6.944 0 7.283 0 10c0 2.717.012 3.056.06 4.123.05 1.064.217 1.79.465 2.427a4.904 4.904 0 0 0 1.153 1.772 4.89 4.89 0 0 0 1.772 1.153c.638.247 1.363.416 2.427.465 1.067.05 1.406.06 4.123.06 2.717 0 3.056-.013 4.123-.06 1.064-.05 1.79-.218 2.427-.465a4.915 4.915 0 0 0 1.772-1.153c.555-.556.899-1.113 1.153-1.772.247-.638.416-1.363.465-2.427.05-1.067.06-1.406.06-4.123 0-2.717-.013-3.056-.06-4.123-.05-1.064-.218-1.79-.465-2.427a4.908 4.908 0 0 0-1.153-1.772A4.872 4.872 0 0 0 16.55.525C15.913.278 15.187.109 14.123.06 13.056.01 12.717 0 10 0zm0 1.8c2.67 0 2.987.013 4.042.06.975.045 1.504.207 1.856.345.468.18.8.398 1.151.747.35.35.566.682.747 1.15.136.352.3.881.344 1.856.047 1.055.058 1.372.058 4.042s-.012 2.987-.061 4.042c-.051.975-.214 1.504-.351 1.855-.187.469-.4.8-.75 1.152a3.12 3.12 0 0 1-1.15.747c-.35.137-.887.3-1.862.344-1.062.047-1.374.058-4.049.058-2.676 0-2.988-.012-4.05-.061-.975-.051-1.512-.214-1.862-.351-.475-.187-.8-.4-1.15-.75a3.036 3.036 0 0 1-.75-1.15c-.137-.35-.299-.887-.35-1.862-.037-1.05-.05-1.374-.05-4.037s.013-2.988.05-4.05c.051-.975.213-1.512.35-1.862.175-.475.4-.8.75-1.15.35-.35.675-.575 1.15-.75.35-.138.875-.3 1.85-.35 1.063-.038 1.375-.05 4.05-.05L10 1.8zm0 3.065a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666zm6.538-8.67a1.2 1.2 0 0 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Dribbbel account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
