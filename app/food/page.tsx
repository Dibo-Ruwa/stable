'use client';

import React from "react";
import Food from "@/containers/food/Food";
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || ''; // Provide a default value

  return (
    <div>
      <Food params={{ id }} />
    </div>
  );
}