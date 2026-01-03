import React, { useState } from 'react';
import './Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Moringa Sandwich", category: "Sandwiches", image: "./images/moringa sandwich.jpg" },
    { id: 2, title: "Creamy Mushroom Sandwich", category: "Sandwiches", image: "./images/creamy mushroom sandwich.jpg" },
    { id: 3, title: "Paneer Tikka Sandwich", category: "Sandwiches", image: "./images/paneer tikka sandwich.jpg" },
    { id: 4, title: "Herbivore’s BlissWich (Mix Veg)", category: "Sandwiches", image: "./images/the herbivore blisswich.jpg" },
    { id: 5, title: "Greek Goddess Bowl", category: "Bowls", image: "./images/greek goddess bowl.jpg" },
    { id: 6, title: "Smokey Chicken Bowl", category: "Bowls", image: "./images/smokey chicken bowl.jpg" },
    { id: 7, title: "Thai Curry Bowl", category: "Bowls", image: "./images/thai curry bowl.jpg" },
    { id: 8, title: "Buddha Bowl", category: "Bowls", image: "./images/buddha bowl.jpg" },
    { id: 9, title: "Teriyaki Chicken Bowl", category: "Bowls", image: "./images/Teriyaki Chicken.jpg" },
    { id: 10, title: "Teriyaki Fish Bowl", category: "Bowls", image: "./images/Triyaki fish bowl.jpg" },
    { id: 11, title: "Millet Bowl", category: "Bowls", image: "./images/Millet bowl.jpg" },
    { id: 12, title: "Rajma Bowl", category: "Bowls", image: "./images/rajma bowl.jpg" },
    { id: 13, title: "Paneer Curry Bowl", category: "Bowls", image: "./images/paneer curry bowl.jpg" },
    { id: 14, title: "White Chana Bowl", category: "Bowls", image: "./images/creamy channa bowl.jpg" },
    { id: 15, title: "Egg Curry Bowl", category: "Bowls", image: "./images/egg curry bowl.jpg" },
    { id: 16, title: "Falafel Wrap", category: "Wraps", image: "./images/falafel wrap.jpg" },
    { id: 17, title: "Paneer Tikka Wrap", category: "Wraps", image: "./images/paneer tikka wrap.jpg" },
    { id: 18, title: "Chicken Tikka Wrap", category: "Wraps", image: "./images/chicken tikka wrap.jpg" },
    { id: 19, title: "Tofu Tikka Wrap", category: "Wraps", image: "./images/tofu wrap.jpg" },
    { id: 20, title: "French Toast", category: "Wraps SALADS", image: "./images/french toast.jpg" },
    { id: 21, title: "Egg Wrap", category: "Wraps", image: "./images/egg wrap.jpg" },
    { id: 22, title: "Pindi Chole Wrap", category: "Wraps", image: "./images/Pindi chole wrap.jpg" },
    { id: 23, title: "Caesar Salad", category: "Salads", image: "./images/Caesar salad.jpg" },
    { id: 24, title: "Creamy Quinoa Salad", category: "Salads", image: "./images/Creamy quona.jpg" },
    { id: 25, title: "Egg Salad", category: "Salads", image: "./images/egg salad.jpg" },
    { id: 26, title: "Chicken Tikka Salad", category: "Salads", image: "./images/chicken tikka salad.jpg" },
    { id: 27, title: "Fresh Garden Salad", category: "Salads", image: "./images/Fresh garden salad.jpg" },
    { id: 28, title: "Paneer Salad", category: "Salads", image: "./images/paneer salad.jpg" },
    { id: 29, title: "Jaun Roti", category: "VEG EXOTIC SALADS", image: "./images/Jaun roti.jpg" },
    { id: 30, title: "Oat Roti", category: "VEG EXOTIC SALADS", image: "./images/Oats roti.jpg" },
    { id: 31, title: "Jowar Roti", category: "VEG EXOTIC SALADS", image: "./images/Jowar roti.jpg" },
    { id: 32, title: "Bajra Roti", category: "VEG EXOTIC SALADS", image: "./images/Bajra roti.jpg" },
    { id: 33, title: "Ragi Roti", category: "VEG EXOTIC SALADS", image: "./images/Ragi roti.jpg" },
    { id: 34, title: "Wheat Bran Roti", category: "VEG EXOTIC SALADS", image: "./images/Wheat bran roti.jpg" },
    { id: 35, title: "Missi Roti", category: "VEG EXOTIC SALADS", image: "./images/Missi roti.jpg" },
    { id: 36, title: "Jowar Laccha Paratha", category: "VEG EXOTIC SALADS", image: "./images/Jowar lachha parantha.jpg" },
    { id: 37, title: "Baingan ka Bharta", category: "VEG EXOTIC SALADS", image: "./images/Baingan ka bharta.jpg" },
    { id: 38, title: "Bharwa Bhindi", category: "VEG EXOTIC SALADS", image: "./images/BharwaBhindi.jpg" },
    { id: 39, title: "Karela Pyaz Sabji", category: "VEG EXOTIC SALADS", image: "./images/KarelaPyazSabji.jpg" },
    { id: 40, title: "Mix Veg", category: "VEG EXOTIC SALADS", image: "./images/mixVeg.jpg" },
    { id: 41, title: "Tofu Capsicum Bhurji", category: "VEG EXOTIC SALADS", image: "./images/Tofu capsicum bhurji.jpg" },
    { id: 42, title: "Dal Makhni", category: "VEG EXOTIC SALADS", image: "./images/daalMakhni.jpg" },
    { id: 43, title: "Green Moong Dal", category: "VEG EXOTIC SALADS", image: "./images/daal.jpg" },
    { id: 44, title: "Dal Fry", category: "VEG EXOTIC SALADS", image: "./images/Dal fry.jpg" },
    { id: 45, title: "Rajma Curry", category: "VEG EXOTIC SALADS", image: "./images/Rajma curry.jpg" },
    { id: 46, title: "Soya Nutri Bhurjee", category: "VEG EXOTIC SALADS", image: "./images/Soya nutri bhurjee.jpg" },
    { id: 47, title: "Paneer Masala", category: "VEG EXOTIC SALADS", image: "./images/Paneer masala.jpg" },
    { id: 48, title: "Mushroom Matar Masala", category: "VEG EXOTIC SALADS", image: "./images/Mushroom matar masala.jpg" },
    { id: 49, title: "Zucchini Noodles", category: "Noodles", image: "./images/Zucchini noodles.jpg" },
    { id: 50, title: "Buckwheat Noodles", category: "Noodles", image: "./images/Buckwheat noodles.jpg" },
    { id: 51, title: "Wheat Noodles", category: "Noodles", image: "./images/Wheat noodles.jpg" },
    { id: 52, title: "Chili Garlic Rice Noodles", category: "Noodles", image: "./images/Chili garlic rice flour noodles.jpg" },
    { id: 53, title: "Millet Pasta (avg.)", category: "Noodles", image: "./images/millet pasta.jpg" },
    { id: 54, title: "Shirataki Noodles", category: "Noodles", image: "./images/Gluten free Shirataki noodles.jpg" },
    { id: 55, title: "Singapuri Wheat Noodles", category: "Noodles", image: "./images/Singapuri noodles.jpg" },
    { id: 56, title: "Green Soup", category: "Soups", image: "./images/Green soup.jpg" },
    { id: 57, title: "Pumpkin Soup", category: "Soups", image: "./images/Pumpkim soup.jpg" },
    { id: 58, title: "Mix Veg Soup", category: "Soups", image: "./images/Mix veg soup.jpg" },
    { id: 59, title: "Chicken Soup", category: "Soups", image: "./images/Chicken soup.jpg" },
    { id: 60, title: "Hot and Sour Soup", category: "Soups", image: "./images/Hot & sour soup.jpg" },
    { id: 61, title: "Manchow Soup", category: "Soups", image: "./images/Manchow soup.jpg" },
    { id: 62, title: "Tomato Coriander Soup", category: "Soups", image: "./images/Tomato coriander soup.jpg" },
    { id: 63, title: "Lemon Coriander Soup", category: "Soups", image: "./images/Lemon coriander soup.jpg" },
    { id: 64, title: "Exotic Roasted Veggies", category: "Starters", image: "./images/Exotic roasted veggies salad.jpg" },
    { id: 65, title: "Gas Roasted Tomatoes", category: "Starters ", image: "./images/gas roasted tomatoes.jpg" },
    { id: 66, title: "Paneer Tikka", category: "Starters", image: "./images/paneer tikka.jpg" },
    { id: 67, title: "Mushroom Tikka", category: "Starters", image: "./images/mushroom tikka.jpg" },
    { id: 68, title: "Roasted Chicken with Veggies", category: "Starters", image: "./images/roasted chicken with saute veggies.jpg" },
    { id: 69, title: "Dahi ke Kebabs", category: "Starters", image: "./images/Dahi ke kebabs.jpg" },
    { id: 70, title: "Hara Bhara Kebabs", category: "Starters", image: "./images/Hara bhara kebabs.jpg" },
    { id: 71, title: "Hummus and Veg Sticks", category: "Starters", image: "./images/Hummus and veg stick.jpg" },
    { id: 72, title: "Falafel Tikki", category: "Starters", image: "./images/Falafel tikki.jpg" },
    { id: 73, title: "Ragi Idli with Sambar", category: "South Indian", image: "./images/Ragi idli with sambar.jpg" },
    { id: 74, title: "Tadka Idli", category: "South Indian", image: "./images/Tadka idli.jpg" },
    { id: 75, title: "Suji Idli with Sambar", category: "South Indian", image: "./images/Suji idli with sambar.jpg" },
    { id: 76, title: "Ragi Appe with Sambar", category: "South Indian", image: "./images/Ragi appe  with sambhar.jpg" },
    { id: 77, title: "Dal Vada with Sambar", category: "South Indian", image: "./images/Dal vada with sambar.jpg" },
    { id: 78, title: "Suji Uttapam", category: "South Indian", image: "./images/Suji uttapam.jpg" },
    { id: 79, title: "Moongdal Appe with Sambar", category: "South Indian", image: "./images/Moongdal appe with sambar.jpg" },
    { id: 80, title: "Moong Dal Cheela", category: "South Indian", image: "./images/Moong dal cheela.jpg" },
    { id: 81, title: "Oats Tiramisu", category: "VEG EXOTIC SALADS", image: "./images/oats tiramisu.jpg" },
    { id: 82, title: "Ragi Chocolate Pancakes", category: "VEG EXOTIC SALADS", image: "./images/Ragi Chocolate Pancakes.jpg" },
    { id: 83, title: "Makhana Kheer", category: "VEG EXOTIC SALADS", image: "./images/Makhana kheer.jpg" },
    { id: 84, title: "Hot Chocolate (Almond Milk)", category: "VEG EXOTIC SALADS", image: "./images/Hot chocolate (almond milk).jpg" },
    { id: 85, title: "Papaya Chia Smoothie", category: "VEG EXOTIC SALADS", image: "./images/Papaya chia smoothie.jpg" },
    { id: 86, title: "Apple Chia Smoothie", category: "VEG EXOTIC SALADS", image: "./images/Apple chia smoothie.jpg" },
    { id: 87, title: "Oatmeal Bowl", category: "VEG EXOTIC SALADS", image: "./images/Oatmeal bowl.jpg" },
    { id: 88, title: "ABCO Juice", category: "VEG EXOTIC SALADS", image: "./images/Abco juice.jpg" },
    { id: 89, title: "Berry Blast Smoothie", category: "VEG EXOTIC SALADS", image: "./images/Berry blast smoothie.jpg" },
    { id: 90, title: "Matcha Latte", category: "VEG EXOTIC SALADS", image: "./images/Matcha latte.jpg" },
    { id: 91, title: "Jau / Chana Sattu Drink", category: "VEG EXOTIC SALADS", image: "./images/jau chana sattu drink.jpg" },
    { id: 92, title: "Chicken Biryani", category: "NON VEG EXOTIC SALADS", image: "./images/Chicken biryani.jpg" },
    { id: 93, title: "Tofu Biryani", category: "VEG EXOTIC SALADS", image: "./images/Tofu biryani.jpg" },
    { id: 94, title: "Egg Biryani", category: "NON VEG EXOTIC SALADS", image: "./images/Egg biryani.jpg" },
    { id: 95, title: "Paneer Biryani", category: "VEG EXOTIC SALADS", image: "./images/Paneer biryani.jpg" },
    { id: 96, title: "Veg Biryani", category: "VEG EXOTIC SALADS", image: "./images/Veg biryani.jpg" }
  ];


  const foodItems = [
    { item: "Moringa Sandwich", calories: 280, protein: 10, carbs: 42, fat: 7, fiber: 6 },
    { item: "Creamy Mushroom Sandwich", calories: 320, protein: 9, carbs: 38, fat: 12, fiber: 4 },
    { item: "Paneer Tikka Sandwich", calories: 350, protein: 15, carbs: 40, fat: 14, fiber: 5 },
    { item: "Herbivore’s BlissWich (Mix Veg)", calories: 300, protein: 8, carbs: 45, fat: 8, fiber: 7 },
    { item: "Greek Goddess Bowl", calories: 350, protein: 12, carbs: 55, fat: 9, fiber: 8 },
    { item: "Smokey Chicken Bowl", calories: 480, protein: 28, carbs: 55, fat: 15, fiber: 6 },
    { item: "Thai Curry Bowl", calories: 500, protein: 10, carbs: 70, fat: 18, fiber: 7 },
    { item: "Buddha Bowl", calories: 420, protein: 16, carbs: 58, fat: 12, fiber: 10 },
    { item: "Teriyaki Chicken Bowl", calories: 460, protein: 27, carbs: 55, fat: 14, fiber: 6 },
    { item: "Teriyaki Fish Bowl", calories: 440, protein: 30, carbs: 50, fat: 12, fiber: 5 },
    { item: "Millet Bowl", calories: 340, protein: 9, carbs: 54, fat: 8, fiber: 9 },
    { item: "Rajma Bowl", calories: 410, protein: 13, carbs: 66, fat: 9, fiber: 10 },
    { item: "Paneer Curry Bowl", calories: 430, protein: 18, carbs: 54, fat: 15, fiber: 6 },
    { item: "White Chana Bowl", calories: 420, protein: 15, carbs: 65, fat: 8, fiber: 11 },
    { item: "Egg Curry Bowl", calories: 450, protein: 20, carbs: 52, fat: 14, fiber: 5 },
    { item: "Falafel Wrap", calories: 380, protein: 13, carbs: 48, fat: 12, fiber: 9 },
    { item: "Paneer Tikka Wrap", calories: 400, protein: 17, carbs: 45, fat: 14, fiber: 6 },
    { item: "Chicken Tikka Wrap", calories: 420, protein: 25, carbs: 44, fat: 13, fiber: 5 },
    { item: "Tofu Tikka Wrap", calories: 390, protein: 16, carbs: 46, fat: 12, fiber: 6 },
    { item: "French Toast", calories: 300, protein: 10, carbs: 38, fat: 11, fiber: 3 },
    { item: "Egg Wrap", calories: 350, protein: 15, carbs: 42, fat: 12, fiber: 4 },
    { item: "Pindi Chole Wrap", calories: 370, protein: 12, carbs: 50, fat: 11, fiber: 8 },
    { item: "Caesar Salad", calories: 280, protein: 9, carbs: 18, fat: 18, fiber: 4 },
    { item: "Creamy Quinoa Salad", calories: 320, protein: 10, carbs: 40, fat: 12, fiber: 6 },
    { item: "Egg Salad", calories: 300, protein: 13, carbs: 12, fat: 20, fiber: 3 },
    { item: "Chicken Tikka Salad", calories: 350, protein: 22, carbs: 15, fat: 18, fiber: 4 },
    { item: "Fresh Garden Salad", calories: 180, protein: 5, carbs: 20, fat: 6, fiber: 6 },
    { item: "Paneer Salad", calories: 310, protein: 15, carbs: 22, fat: 14, fiber: 5 },
    { item: "Jaun Roti", calories: 120, protein: 3, carbs: 24, fat: 1, fiber: 4 },
    { item: "Oat Roti", calories: 130, protein: 4, carbs: 25, fat: 2, fiber: 4 },
    { item: "Jowar Roti", calories: 110, protein: 3, carbs: 23, fat: 1, fiber: 3 },
    { item: "Bajra Roti", calories: 130, protein: 4, carbs: 24, fat: 2, fiber: 4 },
    { item: "Ragi Roti", calories: 120, protein: 3, carbs: 23, fat: 1, fiber: 3 },
    { item: "Wheat Bran Roti", calories: 140, protein: 4, carbs: 27, fat: 2, fiber: 5 },
    { item: "Missi Roti", calories: 150, protein: 6, carbs: 25, fat: 4, fiber: 4 },
    { item: "Jowar Laccha Paratha", calories: 160, protein: 5, carbs: 28, fat: 4, fiber: 4 },
    { item: "Baingan ka Bharta", calories: 180, protein: 4, carbs: 20, fat: 8, fiber: 6 },
    { item: "Bharwa Bhindi", calories: 200, protein: 5, carbs: 18, fat: 10, fiber: 6 },
    { item: "Karela Pyaz Sabji", calories: 170, protein: 4, carbs: 15, fat: 8, fiber: 5 },
    { item: "Mix Veg", calories: 190, protein: 5, carbs: 22, fat: 8, fiber: 6 },
    { item: "Tofu Capsicum Bhurji", calories: 210, protein: 14, carbs: 12, fat: 10, fiber: 4 },
    { item: "Dal Makhni", calories: 260, protein: 11, carbs: 26, fat: 12, fiber: 7 },
    { item: "Green Moong Dal", calories: 220, protein: 13, carbs: 30, fat: 4, fiber: 8 },
    { item: "Dal Fry", calories: 230, protein: 12, carbs: 28, fat: 6, fiber: 7 },
    { item: "Rajma Curry", calories: 240, protein: 11, carbs: 30, fat: 7, fiber: 8 },
    { item: "Soya Nutri Bhurjee", calories: 250, protein: 18, carbs: 20, fat: 8, fiber: 6 },
    { item: "Paneer Masala", calories: 280, protein: 15, carbs: 18, fat: 16, fiber: 4 },
    { item: "Mushroom Matar Masala", calories: 260, protein: 9, carbs: 22, fat: 12, fiber: 5 },
    { item: "Zucchini Noodles", calories: 150, protein: 4, carbs: 12, fat: 6, fiber: 4 },
    { item: "Buckwheat Noodles", calories: 260, protein: 9, carbs: 45, fat: 6, fiber: 5 },
    { item: "Wheat Noodles", calories: 300, protein: 8, carbs: 52, fat: 8, fiber: 4 },
    { item: "Chili Garlic Rice Noodles", calories: 280, protein: 6, carbs: 48, fat: 9, fiber: 5 },
    { item: "Millet Pasta (avg.)", calories: 320, protein: 10, carbs: 52, fat: 8, fiber: 6 },
    { item: "Shirataki Noodles", calories: 120, protein: 3, carbs: 6, fat: 4, fiber: 3 },
    { item: "Singapuri Wheat Noodles", calories: 350, protein: 9, carbs: 58, fat: 10, fiber: 5 },
    { item: "Green Soup", calories: 120, protein: 5, carbs: 18, fat: 3, fiber: 4 },
    { item: "Pumpkin Soup", calories: 140, protein: 4, carbs: 22, fat: 4, fiber: 5 },
    { item: "Mix Veg Soup", calories: 130, protein: 4, carbs: 20, fat: 3, fiber: 4 },
    { item: "Chicken Soup", calories: 180, protein: 15, carbs: 10, fat: 7, fiber: 2 },
    { item: "Hot and Sour Soup", calories: 150, protein: 6, carbs: 22, fat: 4, fiber: 3 },
    { item: "Manchow Soup", calories: 170, protein: 6, carbs: 24, fat: 6, fiber: 3 },
    { item: "Tomato Coriander Soup", calories: 120, protein: 3, carbs: 18, fat: 2, fiber: 3 },
    { item: "Lemon Coriander Soup", calories: 110, protein: 3, carbs: 16, fat: 2, fiber: 3 },
    { item: "Exotic Roasted Veggies", calories: 180, protein: 6, carbs: 20, fat: 7, fiber: 6 },
    { item: "Gas Roasted Tomatoes", calories: 120, protein: 3, carbs: 15, fat: 4, fiber: 4 },
    { item: "Paneer Tikka", calories: 250, protein: 16, carbs: 12, fat: 14, fiber: 3 },
    { item: "Mushroom Tikka", calories: 200, protein: 9, carbs: 14, fat: 10, fiber: 4 },
    { item: "Roasted Chicken with Veggies", calories: 280, protein: 26, carbs: 10, fat: 14, fiber: 4 },
    { item: "Dahi ke Kebabs", calories: 270, protein: 12, carbs: 18, fat: 14, fiber: 3 },
    { item: "Hara Bhara Kebabs", calories: 220, protein: 8, carbs: 22, fat: 10, fiber: 5 },
    { item: "Hummus and Veg Sticks", calories: 200, protein: 7, carbs: 18, fat: 9, fiber: 5 },
    { item: "Falafel Tikki", calories: 230, protein: 9, carbs: 22, fat: 11, fiber: 5 },
    { item: "Ragi Idli with Sambar", calories: 220, protein: 8, carbs: 40, fat: 4, fiber: 6 },
    { item: "Tadka Idli", calories: 240, protein: 9, carbs: 42, fat: 6, fiber: 5 },
    { item: "Suji Idli with Sambar", calories: 210, protein: 7, carbs: 38, fat: 4, fiber: 5 },
    { item: "Ragi Appe with Sambar", calories: 230, protein: 8, carbs: 40, fat: 5, fiber: 6 },
    { item: "Dal Vada with Sambar", calories: 280, protein: 11, carbs: 32, fat: 12, fiber: 5 },
    { item: "Suji Uttapam", calories: 260, protein: 8, carbs: 42, fat: 7, fiber: 5 },
    { item: "Moongdal Appe with Sambar", calories: 240, protein: 10, carbs: 36, fat: 6, fiber: 6 },
    { item: "Moong Dal Cheela", calories: 250, protein: 12, carbs: 30, fat: 8, fiber: 6 },
    { item: "Oats Tiramisu", calories: 220, protein: 8, carbs: 32, fat: 7, fiber: 4 },
    { item: "Ragi Chocolate Pancakes", calories: 250, protein: 7, carbs: 38, fat: 8, fiber: 4 },
    { item: "Makhana Kheer", calories: 240, protein: 6, carbs: 28, fat: 10, fiber: 3 },
    { item: "Hot Chocolate (Almond Milk)", calories: 180, protein: 4, carbs: 22, fat: 7, fiber: 2 },
    { item: "Papaya Chia Smoothie", calories: 200, protein: 5, carbs: 34, fat: 6, fiber: 6 },
    { item: "Apple Chia Smoothie", calories: 210, protein: 4, carbs: 36, fat: 6, fiber: 6 },
    { item: "Oatmeal Bowl", calories: 280, protein: 7, carbs: 44, fat: 8, fiber: 6 },
    { item: "ABCO Juice", calories: 180, protein: 3, carbs: 38, fat: 1, fiber: 5 },
    { item: "Berry Blast Smoothie", calories: 220, protein: 4, carbs: 42, fat: 2, fiber: 7 },
    { item: "Matcha Latte", calories: 150, protein: 6, carbs: 18, fat: 4, fiber: 2 },
    { item: "Jau / Chana Sattu Drink", calories: 190, protein: 8, carbs: 28, fat: 3, fiber: 5 },
    { item: "Chicken Biryani", calories: 480, protein: 28, carbs: 58, fat: 14, fiber: 6 },
    { item: "Tofu Biryani", calories: 430, protein: 16, carbs: 60, fat: 12, fiber: 6 },
    { item: "Egg Biryani", calories: 450, protein: 20, carbs: 56, fat: 13, fiber: 5 },
    { item: "Paneer Biryani", calories: 470, protein: 19, carbs: 58, fat: 15, fiber: 6 },
    { item: "Veg Biryani", calories: 420, protein: 12, carbs: 62, fat: 10, fiber: 7 }
  ];


  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Sandwiches",
    "Bowls",
    "Wraps",
    "Salads",
    "Noodles",
    "Soups",
    "Starters",
    "South Indian"
  ];

  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };
  const addToCart = (item, qty) => {
    if (qty <= 0) return;

    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        );
      } else {
        return [...prev, { ...item, qty }];
      }
    });
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (!existing) return prev;

      if (existing.qty === 1) {
        return prev.filter((p) => p.id !== id);
      } else {
        return prev.map((p) =>
          p.id === id ? { ...p, qty: p.qty - 1 } : p
        );
      }
    });
  };

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="blog-page bg-light">
      <Header />

      <section className="hero-section text-center py-5 bg-white">
        <div className="container">
          <h1 className="display-4 fw-bold color-green">MENU</h1>
          <p className="lead text-muted">
            Select a category to explore our delicious menu options.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-1">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn2 ${selectedCategory === cat ? "btn-success" : "btn-outline-success1"}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-grid py-5">
        <div className="container">
          <div className="row g-4">
            {filteredPosts.map((post) => {
              const nutrition = foodItems.find(
                (item) => item.item.toLowerCase().includes(post.title.toLowerCase())
              );

              return (
                <div className="col-12 col-sm-6 col-lg-3" key={post.id}>
                  <div className='flip-card'>
                    <div className='flip-card-inner'>

                      <div className="card h-100 shadow-sm blog-card flip-card-front">
                        <img src={post.image} className="card-img-top" alt={post.title} />
                        <div className="card-body">
                          <h5 className="card-title">{post.title}</h5>
                        </div>
                      </div>
                      <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                        {nutrition ? (
                          <>
                            <div className="blog-nutrition">
                              <h5>{nutrition.item}</h5>
                              <ul>
                                <li>{nutrition.calories} Calories</li>
                                <li>{nutrition.protein}g Protein</li>
                                <li>{nutrition.carbs}g Carbs</li>
                                <li>{nutrition.fat}g Fat</li>
                                <li>{nutrition.fiber}g Fiber</li>
                              </ul>
                            </div>
                            <div className="blog-actions d-flex align-items-center py-2">
                              <button className="blog-btn btn-outline-secondary btn-sm" onClick={() => decreaseQty(post.id)}>-</button>
                              <span className="blog-qty">{quantities[post.id] || 0}</span>
                              <button className="blog-btn btn-outline-secondary " onClick={() => increaseQty(post.id)}>+</button>
                              <button className=" btn btn-success ms-2" onClick={() => addToCart(post, quantities[post.id] || 0)}>
                                Add to Cart
                              </button>
                            </div>
                          </>
                        ) : (
                          <p>No nutrition info</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredPosts.length === 0 && (
              <p className="text-center text-muted">No items found.</p>
            )}
          </div>
        </div>
        <div className={`cart-popup ${showCart ? "show" : ""}`}>
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button className='btn1' onClick={() => setShowCart(false)}>✖</button>
          </div>
          <div className="cart-body">
            {cart.length === 0 ? (
              <p>No items added yet.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <p>Quantity: {item.qty}</p>
                  </div>
                  <button className='saladbtn' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))
            )}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Blog;
