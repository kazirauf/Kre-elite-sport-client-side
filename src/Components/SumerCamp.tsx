import { useEffect, useState } from "react";


const SumerCamp = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    
      useEffect(() => {
        // Set the date we're counting down to (example: 6 months from now)
        const countDownDate = new Date().getTime() + (180 * 24 * 60 * 60 * 1000);
    
        const timer = setInterval(() => {
          const now = new Date().getTime();
          const distance = countDownDate - now;
    
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          });
    
          if (distance < 0) {
            clearInterval(timer);
          }
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    return (
        <div className="flex justify-center my-20 mx-28">
          <div 
      className="h-[300px] w-full relative flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/19282742/pexels-photo-19282742/free-photo-of-men-playing-basketball-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
      }}
    >
      {/* Dark overlay with increased opacity for better readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center px-4">
        <p className="text-yellow-300 text-sm mb-1 font-cursive">
        children summer camp
        </p>
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
          Don't Miss the First Day of Summer Camp!
        </h1>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item) => (
            <div 
              key={item.label}
              className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white"
            >
              <div className="text-2xl md:text-4xl font-bold mb-1">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>     
        </div>
    );
};

export default SumerCamp;