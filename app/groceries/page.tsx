'use client';

import React from "react";
import { useSearchParams } from 'next/navigation';
import Groceries from "@/containers/groceries/Groceries";



export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || ''; // Provide a default value

  return (
    <div>
<Groceries params={{ id }} />
    </div>
  );
}
