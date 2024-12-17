export interface News {
  id: number;
  title: string;
  text: string;
  date_created: string;
  image: string;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  place: string;
  description: string;
}

export interface Member {
  id: number;
  first_name: string;
  last_name: string;
  social_link: string;
  description: string;
  position: string;
  image: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
}

export interface FormValues {
  name: string;
  link: string;
  links_text: string;
  reason: string;
}
