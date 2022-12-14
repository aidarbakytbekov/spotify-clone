interface ImageArray {
  height: number;
  url: string;
  width: number;
}

export interface UserProfile {
  display_name: string;
  external_urls: Record<string, string>;
  id: string;
  href: string;
  type: string;
  followers: Record<string, number>;
  uid: string;
  images: ImageArray[];
  uri: string;
}

export interface TokensResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  type: 'token' | 'code';
}
