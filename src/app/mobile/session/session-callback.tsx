/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SessionCallback() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const callRoom = searchParams.get("callRoom");

  useEffect(() => {
    if (!sessionId && !callRoom) return;

    let appUrl: string;
    if (callRoom === "yes") {
      appUrl = `lockedinapp://home?sessionId=${sessionId}`;
    } else {
      appUrl = `lockedinapp://explore?sessionId=${sessionId}`;
    }

    // Try to open the app
    window.location.href = appUrl;

    // Fallback: after 2s, redirect to download page
    const timer = setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin";
    }, 2000);

    return () => clearTimeout(timer);
  }, [sessionId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-xl bg-white shadow p-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Opening your session…
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
