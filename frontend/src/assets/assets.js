import cart from './cart.png';
import p_img2_1 from './p_img2_1.png';
import bin from './bin.png';
import stripe from './stripe.png';
import razorpay from './razorpay.png';
import stars from './stars.png';
import dullstar from './dullstar.png';
import p_img2_2 from './p_img2_2.png';
import p_img2_3 from './p_img2_3.png';
import p_img2_4 from './p_img2_4.png';
import cross from './cross.png';
import done from './done.png';
import circle from './circle.png';
import headphone from './headphone.png';
import greaterThan from './greaterThan.png';
import hero_img from './hero_img-DOCOb6wn.png';
import logo from './logo.png';
import p_img6 from './p_img6.png';
import p_img8 from './p_img8.png';
import p_img14 from './p_img14.png';
import p_img15 from './p_img15.png';
import p_img35 from './p_img35.png';
import p_img36 from './p_img36.png';
import p_img39 from './p_img39.png';
import p_img44 from './p_img44.png';
import p_img45 from './p_img45.png';
import p_img46 from './p_img46.png';
import p_img47 from './p_img47.png';
import p_img50 from './p_img50.png';
import p_img51 from './p_img51.png';
import p_img52 from './p_img52.png';
import profile from './profile.png';
import search from './search.png';
import threeLines from './threeLines.png';
import { data } from 'react-router-dom';


export const assets = {
  cart,
  stripe,
  razorpay,
    done,
    bin,
  stars,
  dullstar,
    cross,
  p_img2_1,
  p_img2_2, 
  p_img2_3,
  p_img2_4,
  circle,
  headphone,
  greaterThan,
  hero_img,
  logo,
  p_img6,
  p_img8,
  p_img14,
  p_img15,
  p_img35,
  p_img36,
  p_img39,
  p_img44,
  p_img45,
  p_img46,
  p_img47,
  p_img50,
  p_img51,
  p_img52,
  profile,
  search,
  threeLines,
};


export const products = 
    [
  {
    _id: "aaaaa",
    name: "Tshirts for men",
    description: "Soft and stylish cotton top designed for everyday comfort Soft and stylish cotton top designed for everyday comfortPerfect for casual outings, work, or relaxing at home."
 ,
    price: 500,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "bbbbb",
    name: "Men Pure Cotton Casual T-Shirt",
    description: "Classic round neck t-shirt made from pure cotton fabric.",
    price: 888,
    image: [p_img8,p_img14],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "ccccc",
    name: "Women Printed Cotton Top",
    description: "Vibrant printed top ideal for casual outings.",
    price: 999,
    image: [p_img52,p_img15],
    category: "WoMen",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "ddddd",
    name: "Men Striped Crew Neck Tee",
    description: "Trendy striped tee perfect for weekend wear.",
    price: 690,
    image: [p_img14,p_img35],
    category: "Kids",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "eeeee",
    name: "Women Sleeveless Summer Top",
    description: "Breathable sleeveless top for warm weather.",
    price: 1100,
    image: [p_img15],
    category: "WoMen",
    subCategory: "Bottomwear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "fffff",
    name: "Men V-Neck Cotton T-Shirt",
    description: "Comfortable v-neck shirt made with soft cotton.",
    price: 950,
    image: [p_img35],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "ggggg",
    name: "Women Casual Fit Solid Top",
    description: "Elegant solid top that pairs well with jeans or skirts.",
    price: 750,
    image: [p_img36],
    category: "WoMen",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "hhhhh",
    name: "Men Muscle Fit Gym T-Shirt",
    description: "Fitted t-shirt designed for active performance and comfort.",
    price: 850,
    image: [p_img39],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "iiiii",
    name: "Women Ruffle Sleeve Top",
    description: "Stylish ruffle sleeve top to elevate your outfit.",
    price: 350,
    image: [p_img6],
    category: "Kids",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "jjjjj",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 650,
    image: [p_img14],
    category: "Kids",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "kkkkk",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price:1000,
    image: [p_img8],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "LLLLL",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 450,
    image: [p_img35],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "MMMMM",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price:550,
    image: [p_img36],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "NNNNN",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 700,
    image: [p_img39],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "OOOOO",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 250,
    image: [p_img44],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "PPPPP",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 1200,
    image: [p_img45],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "QQQQQ",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 400,
    image: [p_img46],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "RRRRR",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 800,
    image: [p_img47],
    category: "Men",
    subCategory: "Bottomwear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "SSSSS",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 550,
    image: [p_img50],
    category: "Men",
    subCategory: "Bottomwear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "TTTTT",
    name: "Men Oversized Graphic T-Shirt",
    description: "Relaxed fit t-shirt featuring bold graphic prints.",
    price: 600,
    image: [p_img51],
    category: "Men",
    subCategory: "TopWear",
    size: ["S", "M", "L", "XL"],
    data: 1716634345448,
    bestSeller: false,
  },
]

