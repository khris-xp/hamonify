'use client';

import React, { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default TanstackProvider;
