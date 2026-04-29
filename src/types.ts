export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  demoUrl?: string;
  videoUrl?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  videoUrl?: string;
  hidden?: boolean;
}
