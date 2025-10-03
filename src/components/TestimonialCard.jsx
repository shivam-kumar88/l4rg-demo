import Image from "next/image";

export default function TestimonialCard({ name, position, title, content, imageUrl }) {
    return (
      <div className="flex flex-col items-center p-6 text-center  max-w-sm mx-auto">
        {/* <img 
          src={imageUrl}
          alt={name}
          className="rounded-full w-[200px] h-[200px] object-cover mb-4 bg-white"
        /> */}
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="rounded-full w-[200px] h-[200px] mb-4 object-cover bg-white"
          priority
        />
        <h4 className="font-bold text-[#e94d65] text-2xl mb-2">{title}</h4>
        <p className="text-sm mb-5">{content}</p>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#e94d65] text-lg">★</span>
          ))}
        </div>
        <span className="font-bold uppercase mb-1">{name}</span>
        <span className="font-extrabold">{position}</span>
      </div>
    );
  }
  