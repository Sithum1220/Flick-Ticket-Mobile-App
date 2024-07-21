export interface MovieTypes {
    id: string;
    image: string;
    title: string;
    bookingOpenDate: string;
    duration: string;
    imdbImage: string;
    imdbRating: string;
    synopsis:string;
    detailsImage:string;
    cast:{
        name: string;
        image: string;
    }[];
}