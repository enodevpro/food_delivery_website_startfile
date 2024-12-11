const popularDishes = [
  {
    id: 1,
    title: "Smoked Salmon Crostini",
    image: "/images/img_8.jpg",
    category: "Snacks & Appetizers",
    price: 199,
    desc: "Delicious smoked salmon on crispy crostini, perfect for parties and gatherings.",
  },
  {
    id: 4,
    title: "Buffalo Wings",
    image: "/images/img_11.jpg",
    category: "Snacks & Appetizers",
    price: 250,
    desc: "Juicy chicken wings coated in spicy buffalo sauce, served with blue cheese dressing.",
  },
  {
    id: 8,
    title: "Quinoa Salad",
    image: "/images/img_16.jpg",
    category: "Healthy Choices",
    price: 180,
    desc: "A refreshing salad with quinoa, fresh vegetables, and a tangy vinaigrette.",
  },
  {
    id: 12,
    title: "Baked Salmon",
    image: "/images/img_20.jpg",
    category: "Healthy Choices",
    price: 200,
    desc: "Fresh salmon fillet baked with herbs and lemon, served with a side salad.",
  },
  {
    id: 16,
    title: "Chickpea Buddha Bowl",
    image: "/images/img_24.jpg",
    category: "Healthy Choices",
    price: 200,
    desc: "A balanced bowl with chickpeas, quinoa, avocado, and a tahini dressing.",
  },
  {
    id: 17,
    title: "Vegetable Lasagna",
    image: "/images/img_25.jpg",
    category: "Vegetarian & Vegan",
    price: 250,
    desc: "Layers of pasta, vegetables, and creamy cheese baked to perfection.",
  },
  {
    id: 19,
    title: "Vegan Burger",
    image: "/images/img_27.jpg",
    category: "Vegetarian & Vegan",
    price: 220,
    desc: "A plant-based burger patty served with fresh lettuce, tomato, and vegan mayo.",
  },
  {
    id: 23,
    title: "Vegan Nachos",
    image: "/images/img_31.jpg",
    category: "Vegetarian & Vegan",
    price: 120,
    desc: "Tortilla chips topped with vegan cheese, beans, and fresh salsa.",
  },
];

const categories = [
  "Snacks & Appetizers",
  "Healthy Choices",
  "Vegetarian & Vegan",
];

const products = [
  {
    id: 1,
    title: "Smoked Salmon Crostini",
    image: "/images/img_8.jpg",
    category: "Snacks & Appetizers",
    price: 199,
    desc: "Delicious smoked salmon on crispy crostini, perfect for parties and gatherings.",
  },
  {
    id: 2,
    title: "Cheese Crackers",
    image: "/images/img_9.jpg",
    category: "Snacks & Appetizers",
    price: 150,
    desc: "Crispy cheese-flavored crackers, great for a quick snack.",
  },
  {
    id: 3,
    title: "Cheese Sticks",
    image: "/images/img_10.jpg",
    category: "Snacks & Appetizers",
    price: 180,
    desc: "Golden-fried cheese sticks served with a tangy marinara dip.",
  },
  {
    id: 4,
    title: "Buffalo Wings",
    image: "/images/img_11.jpg",
    category: "Snacks & Appetizers",
    price: 250,
    desc: "Juicy chicken wings coated in spicy buffalo sauce, served with blue cheese dressing.",
  },
  {
    id: 5,
    title: "Spring Rolls",
    image: "/images/img_12.jpg",
    category: "Snacks & Appetizers",
    price: 120,
    desc: "Crispy vegetarian spring rolls filled with fresh vegetables and herbs.",
  },
  {
    id: 6,
    title: "Loaded Potato Skins",
    image: "/images/img_14.jpg",
    category: "Snacks & Appetizers",
    price: 220,
    desc: "Potato skins loaded with cheese, bacon, and green onions, served with sour cream.",
  },
  {
    id: 7,
    title: "Vegetarian Spring Rolls",
    image: "/images/img_15.jpg",
    category: "Snacks & Appetizers",
    price: 130,
    desc: "Light and crispy vegetarian spring rolls with a savory dipping sauce.",
  },
  {
    id: 8,
    title: "Quinoa Salad",
    image: "/images/img_16.jpg",
    category: "Healthy Choices",
    price: 180,
    desc: "A refreshing salad with quinoa, fresh vegetables, and a tangy vinaigrette.",
  },
  {
    id: 9,
    title: "Grilled Chicken Breast",
    image: "/images/img_17.jpg",
    category: "Healthy Choices",
    price: 170,
    desc: "Perfectly grilled chicken breast seasoned with herbs, served with steamed veggies.",
  },
  {
    id: 10,
    title: "Vegetable Stir-Fry",
    image: "/images/img_18.jpg",
    category: "Healthy Choices",
    price: 140,
    desc: "A mix of fresh vegetables stir-fried in a light soy sauce.",
  },
  {
    id: 11,
    title: "Greek Yogurt Parfait",
    image: "/images/img_19.jpg",
    category: "Healthy Choices",
    price: 130,
    desc: "Creamy Greek yogurt layered with fresh fruits and granola.",
  },
  {
    id: 12,
    title: "Baked Salmon",
    image: "/images/img_20.jpg",
    category: "Healthy Choices",
    price: 200,
    desc: "Fresh salmon fillet baked with herbs and lemon, served with a side salad.",
  },
  {
    id: 13,
    title: "Lentil Soup",
    image: "/images/img_21.jpg",
    category: "Healthy Choices",
    price: 90,
    desc: "Hearty and nutritious lentil soup with a touch of spices.",
  },
  {
    id: 14,
    title: "Zucchini Noodles",
    image: "/images/img_22.jpg",
    category: "Healthy Choices",
    price: 100,
    desc: "Fresh zucchini noodles tossed with olive oil, garlic, and parmesan.",
  },
  {
    id: 15,
    title: "Fruit Salad",
    image: "/images/img_23.jpg",
    category: "Healthy Choices",
    price: 150,
    desc: "A colorful mix of seasonal fruits served with a light honey drizzle.",
  },
  {
    id: 16,
    title: "Chickpea Buddha Bowl",
    image: "/images/img_24.jpg",
    category: "Healthy Choices",
    price: 200,
    desc: "A balanced bowl with chickpeas, quinoa, avocado, and a tahini dressing.",
  },
  {
    id: 17,
    title: "Vegetable Lasagna",
    image: "/images/img_25.jpg",
    category: "Vegetarian & Vegan",
    price: 250,
    desc: "Layers of pasta, vegetables, and creamy cheese baked to perfection.",
  },
  {
    id: 18,
    title: "Stuffed Mushrooms",
    image: "/images/img_26.jpg",
    category: "Vegetarian & Vegan",
    price: 100,
    desc: "Mushrooms stuffed with a savory mix of cheese and herbs.",
  },
  {
    id: 19,
    title: "Vegan Burger",
    image: "/images/img_27.jpg",
    category: "Vegetarian & Vegan",
    price: 220,
    desc: "A plant-based burger patty served with fresh lettuce, tomato, and vegan mayo.",
  },
  {
    id: 20,
    title: "Vegan Chili",
    image: "/images/img_28.jpg",
    category: "Vegetarian & Vegan",
    price: 150,
    desc: "A hearty vegan chili with beans, vegetables, and bold spices.",
  },
  {
    id: 21,
    title: "Sweet Potato Fries",
    image: "/images/img_29.jpg",
    category: "Vegetarian & Vegan",
    price: 90,
    desc: "Crispy sweet potato fries with a sprinkle of sea salt.",
  },
  {
    id: 22,
    title: "Vegan Chocolate Chip Cookies",
    image: "/images/img_30.jpg",
    category: "Vegetarian & Vegan",
    price: 100,
    desc: "Soft and chewy vegan chocolate chip cookies, perfect for dessert.",
  },
  {
    id: 23,
    title: "Vegan Nachos",
    image: "/images/img_31.jpg",
    category: "Vegetarian & Vegan",
    price: 120,
    desc: "Tortilla chips topped with vegan cheese, beans, and fresh salsa.",
  },
  {
    id: 24,
    title: "Vegan Spinach",
    image: "/images/img_32.jpg",
    category: "Vegetarian & Vegan",
    price: 80,
    desc: "A simple and healthy vegan spinach stir-fry with garlic.",
  },
  {
    id: 25,
    title: "Vegan Sloppy Joe",
    image: "/images/img_33.jpg",
    category: "Vegetarian & Vegan",
    price: 140,
    desc: "A vegan twist on the classic sloppy joe, made with lentils and a tangy sauce.",
  },
  {
    id: 26,
    title: "Vegan Philly Cheesesteak",
    image: "/images/img_34.jpg",
    category: "Vegetarian & Vegan",
    price: 180,
    desc: "A plant-based version of the Philly cheesesteak with sautéed veggies and vegan cheese.",
  },
];

export { popularDishes, categories, products };
