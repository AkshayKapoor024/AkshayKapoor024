// pvt/error.tsx
'use client';

import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Show toast when error occurs
    toast.error(error.message || 'Something went wrong!', {
      position: 'bottom-right',
      duration: 3000, // 3 seconds
    });
    console.error(error);
  }, [error]);

  return (
    <>
      <Toaster richColors position="bottom-right" />
      {/* You can render a fallback UI here if desired */}
    </>
  );
}