export interface BettingSite {
  id: number
  name: string
  logo: string
  rating: number
  bonus: string
  description: string
  features: string[]
  welcomeOffer: string
  terms: string
  userRating: number
  votes: number
  link: string
  backgroundImage?: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

export interface HorizontalBanner {
  id: number
  name: string
  logo: string
  bonus: string
  welcomeOffer: string
  link: string
  backgroundImage: string
}
