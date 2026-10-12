import React from "react";
import Image from "next/image";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export default function WhatsAppIcon({ className = "w-4 h-4", size = 18 }: WhatsAppIconProps) {
  return (
    <Image
      src="/images/whatsapp-black.png"
      alt="WhatsApp"
      width={size}
      height={size}
      className={`inline-block object-contain flex-shrink-0 ${className}`}
    />
  );
}
