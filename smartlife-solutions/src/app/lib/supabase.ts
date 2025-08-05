import { createClient } from '@supabase/supabase-js';

// Replace with actual Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-supabase-url';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (placeholder - generate from Supabase CLI)
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  image_url?: string;
  created_at: string;
}

export interface Order {
  id: number;
  user_id: string;
  products: Product[];
  total_amount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  created_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  published_at: string;
  created_at: string;
}