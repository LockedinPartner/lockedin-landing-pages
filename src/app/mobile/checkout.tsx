"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutCallback() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const reference = searchParams.get("reference");

  useEffect(() => {
    if (!status) return;

    // Construct deep link to app
    const appUrl = `lockedinapp://orders?status=${status}&reference=${
      reference || ""
    }`;

    // Try opening the app
    window.location.href = appUrl;

    // Fallback: after 2s, redirect to download page
    const timer = setTimeout(() => {
      window.location.href = "/download"; // Your app download landing page
    }, 2000);

    return () => clearTimeout(timer);
  }, [status, reference]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-xl bg-white shadow p-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Completing your payment…
        </h1>
        <p className="text-gray-500 mt-2">
          Redirecting you to the app. If nothing happens,{" "}
          <a href="/download" className="text-green-600 underline font-medium">
            download the app here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
