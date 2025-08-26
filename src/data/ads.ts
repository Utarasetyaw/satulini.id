// data/ads.ts
import type { Ad } from '../types';

export const ads: Ad[] = [
  // Iklan untuk di samping (SideAd)
  {
    type: 'side-ad',
    id: 'side-ad-1',
    imageUrl: 'https://images.unsplash.com/photo-1594730626353-8b438f4d1f2e?w=500&q=80',
    url: 'https://www.google.com/search?q=side+ad+link',
  },
  {
    type: 'side-ad',
    id: 'side-ad-2',
    imageUrl: 'https://images.unsplash.com/photo-1594730626353-8b438f4d1f2e?w=500&q=80',
    url: 'https://www.google.com/search?q=side+ad+link-2',
  },

  // Iklan untuk di dalam feed (InFeedAd)
  {
    type: 'in-feed-ad',
    id: 'in-feed-ad-1',
    imageUrl: 'https://images.unsplash.com/photo-1620912188688-66236b283d58?w=500&q=80',
    url: 'https://www.google.com/search?q=in-feed+ad+link',
  },
  {
    type: 'in-feed-ad',
    id: 'in-feed-ad-2',
    imageUrl: 'https://images.unsplash.com/photo-1620912188688-66236b283d58?w=500&q=80',
    url: 'https://www.google.com/search?q=in-feed+ad+link-2',
  },
  {
    type: 'in-feed-ad',
    id: 'in-feed-ad-3',
    imageUrl: 'https://images.unsplash.com/photo-1620912188688-66236b283d58?w=500&q=80',
    url: 'https://www.google.com/search?q=in-feed+ad+link-3',
  },

  // Iklan untuk di atas (TopBannerAd)
  {
    type: 'top-banner-ad',
    id: 'top-banner-ad-1',
    imageUrl: 'https://s-img.mgid.com/g/24492998/328x328/-/aHR0cHM6Ly9jbC5pbWdob3N0cy5jb20vaW1naC9pbWFnZS9mZXRjaC9hcl8xOjEsY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfOTYwL2h0dHA6Ly9pbWdob3N0cy5jb20vdC8yMDI1LTA4LzI3ODE1NS8xODQ3ZmU3ZjcxMGE0M2ZhMTVjZjAzNGNlYTg3MzNlMi5qcGc.webp?v=1756169072-a3uuFqIKbBSzwshSwtHOqo7beUhwvVgEKY-ZluEZLqU',
    url: 'https://www.google.com/search?q=top+banner+ad+link',
  },
];