export interface Social {
  icon: string;
  style: string;
}

export interface AboutInfo {
  id: number;
  avatar: string;
  name: string;
  job: string;
  text: string;
  link: Social[];
}
