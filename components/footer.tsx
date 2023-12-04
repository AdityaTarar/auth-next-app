import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-[#E8486F] text-white " style={{ justifyContent: 'space-between', padding: 32 }}>
      <div className="flex">
        <span>&copy; 2022 ImpactHub All Rights Reserved. With Love by ImpactHub</span>
      </div>
      <div className="flex gap-20">
        <Link href={'/'} className="mr-4">FAQ</Link>
        <Link href={'/'}>Support</Link>
      </div>
    </div>

  );
};

export default Footer;
