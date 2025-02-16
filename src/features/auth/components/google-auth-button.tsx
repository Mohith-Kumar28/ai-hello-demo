'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function GoogleSignInButton() {
  return (
    <Button
      onClick={() => signIn('google')}
      variant='outline'
      className='w-full'
    >
      Continue with Google
    </Button>
  );
}
