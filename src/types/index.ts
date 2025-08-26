/**
 * Defines the structure for a single news article.
 * The 'type' property is used to identify this object in a mixed array.
 */
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedDate: string;
  isFeatured?: boolean;
}

/**
 * Defines the structure for an event.
 */
export interface Event {
  id: number;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  organizer: string;
  description: string;
  imageUrl: string;
  url?: string;
}

/**
 * Defines the structure for a product review.
 */
export interface ProductReview {
  type: 'review';
  id:number;
  productName: string;
  rating: number; // A number from 1 to 5
  summary: string;
  imageUrl: string;
}

export interface Ad {
   type?: "review" | "side-ad" | "in-feed-ad" | "top-banner-ad" | "plant" | "article" | "event" | "ad";
  id: string;
  imageUrl: string;
  url: string;
}

export interface Plant {
  type: 'plant';
  id: number;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  imageUrl: string;
}

/**
 * A union type that represents any possible item in our content feed.
 * This allows us to create an array with mixed content (articles, events, and reviews).
 */
export type FeedItem = Article | Event | ProductReview | Ad | Plant;