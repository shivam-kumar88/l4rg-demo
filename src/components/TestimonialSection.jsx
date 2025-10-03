import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "JAMES BRISK",
    position: "HSBC Bank",
    title: "Absolutely spot-on!",
    content: `Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.`,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww", // Replace with your image path
  },
  {
    name: "HOWARD MCMILLAN",
    position: "Hotel Berg",
    title: "Best decision ever",
    content: `Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.`,
    imageUrl: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image path
  },
  {
    name: "MARIA GOTHENBURG",
    position: "Applauz Startup",
    title: "Saved my Business",
    content: `Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.`,
    imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image path
  },
];

export default function TestimonialsSection() {
  return (
    <div className=' overflow-hidden lg:-mt-20'>
    <div className='w-[105vw] h-[50px] lg:h-[185px] rotate-[5deg] lg:rotate-[7deg] bg-white -mb-[25px] lg:-mb-[100px] '>

    </div>
    <section className=" text-white py-[80px] lg:py-[300px] px-6 lg:px-[8%] bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/bgn-quotes.jpg')] bg-cover bg-center">
      <div className="max-w-5xl ">
        <div className='flex items-center'>
            <div className="h-[2px] w-10 bg-[#e94d65] mr-3 -mt-1"></div>
            <h2 className=" lg:text-lg font-medium mb-2 tracking-wide text-[#fff]">GREAT REVIEWS FOR OUR SERVICES</h2>
        </div>
        <h3 className="text-4xl md:text-6xl font-bold mb-4">Trusted by some <br/><span className="text-[#e94d65]">Biggest Names</span></h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-2 lg:gap-8 mt-10">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </section>
    <div className='w-[105vw] h-[50px] lg:h-[185px] rotate-[-5deg] lg:rotate-[-7deg] bg-[#f5f5f5] -mt-[25px] lg:-mt-[100px] z-0'>

    </div>
    </div>
  );
}
