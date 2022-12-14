interface ImageArray {
  height: number;
  url: string;
  width: number;
}

interface SpotifyUrls {
  spotify: string;
}

export interface UserProfile {
  id: string;
  uid: string;
  images: Array<ImageArray>;
  urls: SpotifyUrls;
  name: string;
}

export interface ApiProfile extends UserProfile {
  accessToken: string;
  tokenExpiryMs: number;
  refreshToken: string;
}