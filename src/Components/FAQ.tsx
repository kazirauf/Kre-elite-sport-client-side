import '../index.css'

const FAQ = () => {
    return (
     <section className='bg-white'>
         <h1 className="text-center text-4xl font-bold mt-20">F<span className="text-blue-500">A</span>Q</h1>
           <div className='flex justify-center items-center mx-auto my-20'>
            <div className="box">
   <p className="heading text-lg font-bold">Sample FAQ Questions</p>
   <div className="faqs">
      <details>
         <summary>How do I book a facility?</summary>
         <p className="text">Simply browse through our available facilities, select your desired location, choose an available date and time, and complete the booking process with our secure payment system.</p>
      </details>
      <details>
         <summary>Can I cancel or reschedule my booking?</summary>
         <p className="text">Yes, you can cancel or reschedule your booking up to 24 hours before your scheduled time. Please refer to our cancellation policy for more details.</p>
      </details>
      <details>
         <summary>What payment methods are accepted?</summary>
         <p className="text">We accept all major credit and debit cards, as well as online payment services like PayPal and Stripe.
         </p>
      </details>
      <details>
         <summary>Are there any discounts for bulk bookings?</summary>
         <p className="text"> Yes, we offer discounts for bulk bookings. Please contact our support team for more information on group rates and packages.

         </p>
      </details>
      <details>
         <summary>What should I bring on the day of my booking?</summary>
         <p className="text"> Please bring your booking confirmation (either digital or printed) and any necessary sports equipment. Some facilities may provide equipment rentals on-site.

         </p>
      </details>
   </div>
</div>
<div>
    <img className='lg:max-w-xl max-w-sm  rounded-lg shadow-2xl lg:ml-10' src="https://images.pexels.com/photos/6266316/pexels-photo-6266316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>

        </div>
     </section>
    );
};

export default FAQ;