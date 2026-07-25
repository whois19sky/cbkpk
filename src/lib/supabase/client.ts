'use client'

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wwpiftimeoaoizerilhz.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cGlmdGltZW9hb2l6ZXJpbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjU1NjYsImV4cCI6MjA5NTc0MTU2Nn0.GKcozDHCzhQ-3v9whKbcQisLmP6NJEnCz7i2KE92gNA'
  )
}

export const uploadFileToStorage = async (file: File, bucket: string = 'uploads'): Promise<string | null> => {
  const supabase = createClient();
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
  
  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileName, file);

  if (uploadError) {
    console.error('Upload Error:', uploadError);
    return null;
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return data.publicUrl;
};
