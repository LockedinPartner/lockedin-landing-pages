"use client";

import { Suspense } from "react";
import CheckoutCallback from "./checkout-callback";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <Loader2 className="animate-spin text-green-600" size={48} />
        </div>
      }
    >
      <CheckoutCallback />
    </Suspense>
  );
}
