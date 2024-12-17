export interface CustomJwtPayload {
  role: string;
}

export interface FacilityDetails {
  facility: {
    name: string;
    pricePerHour: number;
    image?: string; // Include optional image property if needed
  };
  date: string;
  startTime: string;
  endTime: string;
}

export interface Facility {
  _id: string;
  name: string;
  description: string;
  image: string;
  isDeleted: boolean;
  location: string;
  pricePerHour: number;
  __v: number;
}
