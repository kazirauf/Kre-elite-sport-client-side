const HowItWorks = () => {
  return (
    <div className="bg-white">
  <h1 className="text-center text-4xl font-bold mt-20">How It <span className="text-blue-500">Works</span></h1>
    <div className="hero bg-base-200  mt-10">
  <div className="hero-content flex-col lg:flex-row ">
    <img
      src="https://images.pexels.com/photos/7307483/pexels-photo-7307483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="lg:max-w-xl max-w-sm  rounded-lg shadow-2xl" />
    <div className="ml-12">
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">1. Explore Facilities 🔍</h3>
        <p className="text-gray-500">
        Browse and filter through our wide range of sports facilities to find your ideal venue.
      </p>
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">2. Select & Schedule 📅</h3>
        <p className="text-gray-500">
        Pick your preferred facility, choose an available date and time, and reserve your spot.
      </p>
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">3. Confirm & Pay 💳</h3>
        <p className="text-gray-500">
        Review your booking details, complete the secure payment, and receive instant confirmation.
      </p>
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">4. Enjoy Your Session 🎉</h3>
        <p className="text-gray-500">
        Show up at the facility, present your booking, and enjoy your game or workout.
      </p>
      </div>
    
     
    
    </div>
  </div>
</div>
  </div>
  
    // <div className="mt-9 pb-20">
    //   <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-5">
    //     <div className="flex items-center justify-center gap-12">
    //       <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">
    //         How It <span className="text-secondary">Works</span>
    //       </h2>
    //     </div>
    //   </div>

    //   <div className="p-4 max-w-xl mx-auto dark:bg-gray-800">
    //     <div className="flex">
    //       <div className="mr-4 flex flex-col items-center">
    //         <div>
    //           <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               className="h-6 w-6 text-blue-800 dark:text-slate-200"
    //             >
    //               <path d="M12 5l0 14"></path>
    //               <path d="M18 13l-6 6"></path>
    //               <path d="M6 13l6 6"></path>
    //             </svg>
    //           </div>
    //         </div>
    //         <div className="h-full w-px bg-gray-400 dark:bg-slate-500"></div>
    //       </div>
    //       <div className="pt-1 pb-8">
    //         <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
    //           Select a facility
    //         </p>
    //         <p className="text-gray-700 dark:text-slate-400">
    //           From all the facilities at the listing page, select your desired
    //           facility.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex">
    //       <div className="mr-4 flex flex-col items-center">
    //         <div>
    //           <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               className="h-6 w-6 text-blue-800 dark:text-slate-200"
    //             >
    //               <path d="M12 5l0 14"></path>
    //               <path d="M18 13l-6 6"></path>
    //               <path d="M6 13l6 6"></path>
    //             </svg>
    //           </div>
    //         </div>
    //         <div className="h-full w-px bg-gray-400 dark:bg-slate-500"></div>
    //       </div>
    //       <div className="pt-1 pb-8">
    //         <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
    //           Select a date and check availability
    //         </p>
    //         <p className="text-gray-700 dark:text-slate-400">
    //           Select a date when you want to book your facility and check if any
    //           slot is available.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex">
    //       <div className="mr-4 flex flex-col items-center">
    //         <div>
    //           <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               className="h-6 w-6 text-blue-800 dark:text-slate-200"
    //             >
    //               <path d="M12 5l0 14"></path>
    //               <path d="M18 13l-6 6"></path>
    //               <path d="M6 13l6 6"></path>
    //             </svg>
    //           </div>
    //         </div>
    //         <div className="h-full w-px bg-gray-400 dark:bg-slate-500"></div>
    //       </div>
    //       <div className="pt-1 pb-8">
    //         <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
    //           Select a start time and end time
    //         </p>
    //         <p className="text-gray-700 dark:text-slate-400">
    //           Select a time frame which you want to book for your facility.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex">
    //       <div className="mr-4 flex flex-col items-center">
    //         <div>
    //           <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               className="h-6 w-6 text-blue-800 dark:text-slate-200"
    //             >
    //               <path d="M12 5l0 14"></path>
    //               <path d="M18 13l-6 6"></path>
    //               <path d="M6 13l6 6"></path>
    //             </svg>
    //           </div>
    //         </div>
    //         <div className="h-full w-px bg-gray-400 dark:bg-slate-500"></div>
    //       </div>
    //       <div className="pt-1 pb-8">
    //         <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
    //           Proceed to payment
    //         </p>
    //         <p className="text-gray-700 dark:text-slate-400">
    //           Proceed to make the payment for your booked facility.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex">
    //       <div className="mr-4 flex flex-col items-center">
    //         <div>
    //           <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               className="h-6 w-6 text-white dark:text-slate-200"
    //             >
    //               <path d="M5 12l5 5l10 -10"></path>
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="pt-1 ">
    //         <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
    //           And you are ready to hit the ground!
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HowItWorks;
