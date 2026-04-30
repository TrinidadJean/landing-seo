"use client";

  import Script from "next/script";

  export default function ChatBot() {
    return (
      <Script
        src="https://crm-chatvet-production.up.railway.app/"
        data-client-id="DEMO_CLIENT"
        strategy="afterInteractive"
      />
    );
  }