export interface Batch {
  name: string;
  time: string;
  cls: string;
  students: string[];
}

export const batches: Batch[] = [
  {
    name: "Batch A – Morning",
    time: "9:00 – 10:00",
    cls: "b1",
    students: ["Zara Khan", "Arjun Dev", "Meera Joshi", "Karan Shah", "Anika Roy"]
  },
  {
    name: "Batch B – Mid-Morning",
    time: "10:00 – 11:00",
    cls: "b2",
    students: ["Riya Verma", "Aditya Rao", "Sneha Pillai", "Vikram Singh", "Pooja Nair"]
  },
  {
    name: "Batch C – Late Morning",
    time: "11:00 – 12:00",
    cls: "b3",
    students: ["Dev Malhotra", "Ishita Bose", "Rahul Gupta", "Tanvi Desai", "Kabir Mehta"]
  }
];
