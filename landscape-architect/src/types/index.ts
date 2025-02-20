export interface Project {
    id: string;
    title: string;
    category: 'residential' | 'commercial' | 'public';
    description: string;
    thumbnailUrl: string;
    images: string[];
    details: {
      location: string;
      year: number;
      size: string;
      client: string;
    };
  }
  
  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }