import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="imageWrapper">

      <Image
        src="/me.jpg"
        alt="Profile"
        width={420}
        height={520}
        className="profileImage"
        priority
      />

    </div>
  );
}