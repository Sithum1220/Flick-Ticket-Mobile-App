export interface MovieType {
  id: number;
  category: string;
  mainImage: string;
  displayImage: string;
  movieName: string;
  imdbRating: number;
  language: string;
  oneSheatPrice: number;
  totalSheat: number;
  synopsis: string;
  bookingOpenDate: BookingOpenDate;
  duration: Duration;
  startingTimes: string[];
  startingDates: StartingDate[];
  cast: Cast[];
}

export interface Cast {
  name: string;
  image: string;
}

export interface StartingDate {
  day: string;
  date: number;
}

export interface Duration {
  hrs: number;
  min: number;
}

export interface BookingOpenDate {
  month: string;
  day: number;
  year: number;
}