import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <Image src="/header.png" className="header-img" alt="sentry purity test header" onClick={() => window.location.href = "/"} width={3120} height={1075}/>
    </div>
  );
}