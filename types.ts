
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{
    title: string;
    uri: string;
  }>;
}

export interface BuildRecommendation {
  name: string;
  special: {
    S: number;
    P: number;
    E: number;
    C: number;
    I: number;
    A: number;
    L: number;
  };
  description: string;
  keyPerks: string[];
}
