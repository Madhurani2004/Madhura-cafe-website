/* ==========================================================================
   MADHURA'S CAFE - JAVASCRIPT
   Accurate menu dataset parsed directly from user menu images
   ========================================================================== */

// Exact menu data from provided cafe menu images
const cafeMenu = [
  // 1. MINI MEALS
  {
    id: "mm-1",
    name: "Amritsari Chole Kulcha",
    category: "mini-meals",
    price: "₹169",
    type: "veg",
    desc: "Spiced rich chole served with authentic soft kulchas, onion rings and roasted green chili.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mm-2",
    name: "Pav Bhaaji",
    category: "mini-meals",
    price: "₹139",
    type: "veg",
    desc: "Buttery Mumbai-style spiced vegetable mash served with toasted butter pav.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mm-3",
    name: "Aloo Paratha",
    category: "mini-meals",
    price: "₹119",
    type: "veg",
    desc: "Wholesome griddled whole wheat flatbread stuffed with spiced mashed potatoes.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mm-4",
    name: "Mix Veg Paratha",
    category: "mini-meals",
    price: "₹139",
    type: "veg",
    desc: "Stuffed flatbread loaded with garden fresh veggies, herbs, and desi spices.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },

  // 2. FRIES
  {
    id: "fr-1",
    name: "Salted Fries",
    category: "fries",
    price: "₹119",
    type: "veg",
    desc: "Crispy golden fried potato batons sprinkled with classic sea salt.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fr-2",
    name: "Peri Peri Fries",
    category: "fries",
    price: "₹139",
    type: "veg",
    desc: "Crunchy fries tossed in fiery, tangy African peri peri seasoning.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fr-3",
    name: "Fries With Chilli Garlic",
    category: "fries",
    price: "₹139",
    type: "veg",
    desc: "Crisp potato fries served with zesty hot chili garlic seasoning.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fr-4",
    name: "Fries With American Dip",
    category: "fries",
    price: "₹149",
    type: "veg",
    desc: "Golden hot fries paired with creamy American ranch-style gourmet dip.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fr-5",
    name: "Fries With Spicy Mayo Dip",
    category: "fries",
    price: "₹149",
    type: "veg",
    desc: "Deep-fried seasoned fries served with a bowl of kickin' chili mayo.",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fr-6",
    name: "Fries With Cheesy Italian",
    category: "fries",
    price: "₹149",
    type: "veg",
    desc: "Loaded with melted herb Italian cheese dressing and oregano.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
  },

  // 3. FILTER COFFEE & HOT CHOCOLATE
  {
    id: "cof-1",
    name: "Filter Coffee (Regular / Large)",
    category: "coffee-hot",
    price: "₹35 / ₹60",
    type: "veg",
    desc: "Authentic South Indian aromatic filter coffee frothed to perfection.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cof-2",
    name: "Jaggery Filter Coffee (Reg / Lrg)",
    category: "coffee-hot",
    price: "₹35 / ₹60",
    type: "veg",
    desc: "Naturally sweetened South Indian filter coffee with healthy organic jaggery.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cof-3",
    name: "Filter Black Coffee (Reg / Lrg)",
    category: "coffee-hot",
    price: "₹30 / ₹50",
    type: "veg",
    desc: "Pure, bold decoction black coffee for instant energy and clarity.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cof-4",
    name: "Hot Chocolate",
    category: "coffee-hot",
    price: "₹99",
    type: "veg",
    desc: "Decadent melted cocoa and warm frothy milk for cozy conversations.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cof-5",
    name: "Hot Bournvita",
    category: "coffee-hot",
    price: "₹69",
    type: "veg",
    desc: "Classic childhood malt chocolate beverage served hot and creamy.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cof-6",
    name: "Hot Boost",
    category: "coffee-hot",
    price: "₹69",
    type: "veg",
    desc: "Energizing hot malt drink whipped with sweetened milk.",
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=600&q=80"
  },

  // 4. BUN MASKA & EGG SPECIALS
  {
    id: "bun-1",
    name: "Bun Maska",
    category: "bun-egg",
    price: "₹50",
    type: "veg",
    desc: "Soft bakery bun loaded generously with fresh salted butter.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-2",
    name: "Jam Bun Maska",
    category: "bun-egg",
    price: "₹70",
    type: "veg",
    desc: "Sweet fruit jam layered with butter inside a soft toasted bun.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-3",
    name: "Grilled Bun Maska",
    category: "bun-egg",
    price: "₹70",
    type: "veg",
    desc: "Crispy griddle-pressed bun with melted buttery center.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-4",
    name: "Bun Omelette",
    category: "bun-egg",
    price: "₹79 / ₹99",
    type: "non-veg",
    desc: "Freshly made spicy egg omelette tucked inside a warm soft bun.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-5",
    name: "Cheese Bun Omelette",
    category: "bun-egg",
    price: "₹119",
    type: "non-veg",
    desc: "Cheese-loaded bun omelette — a legendary classic with a gooey twist.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-6",
    name: "KKC Special Masala Omelette",
    category: "bun-egg",
    price: "₹119",
    type: "non-veg",
    desc: "Cooked to golden perfection with chopped onions, green chilies and spices.",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-7",
    name: "Roasted Garlic Egg Toast",
    category: "bun-egg",
    price: "₹109",
    type: "non-veg",
    desc: "Garlic-infused crisp toast topped with seasoned scrambled eggs.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bun-8",
    name: "Mushroom Omelette Sandwich",
    category: "bun-egg",
    price: "₹119",
    type: "non-veg",
    desc: "Sautéed mushrooms and fluffy herb omelette inside grilled bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },

  // 5. ROLLS & MAGGI
  {
    id: "rm-1",
    name: "Masala Maggie",
    category: "rolls-maggi",
    price: "₹99",
    type: "veg",
    desc: "Classic comfort Maggi tossed with special cafe spices & herbs.",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-2",
    name: "Cheese Masala Maggie",
    category: "rolls-maggi",
    price: "₹129",
    type: "veg",
    desc: "Steaming hot masala noodles topped with a rich blanket of melted cheese.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-3",
    name: "Scrambled Egg Maggie",
    category: "rolls-maggi",
    price: "₹119",
    type: "non-veg",
    desc: "Protein-rich fusion of spicy masala noodles tossed with scrambled eggs.",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-4",
    name: "Paneera Tikka Roll",
    category: "rolls-maggi",
    price: "₹199",
    type: "veg",
    desc: "Char-grilled marinated paneer cubes rolled with crisp onion relish.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-5",
    name: "Paneer Makhani Roll",
    category: "rolls-maggi",
    price: "₹199",
    type: "veg",
    desc: "Cottage cheese coated in buttery makhani sauce wrapped in a flaky paratha.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-6",
    name: "Double Egg Roll",
    category: "rolls-maggi",
    price: "₹129",
    type: "non-veg",
    desc: "Flaky paratha layered with double eggs, pickled onions, and chatpata chutney.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-7",
    name: "Butter Chicken Roll",
    category: "rolls-maggi",
    price: "₹249",
    type: "non-veg",
    desc: "Tender chicken cooked in rich velvety gravy wrapped in a warm roll.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rm-8",
    name: "Chicken Tikka Roll",
    category: "rolls-maggi",
    price: "₹249",
    type: "non-veg",
    desc: "Smoky tandoori chicken chunks tossed with mint chutney and wrapped fresh.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },

  // 6. SANDWICHES & SPECIALS
  {
    id: "sw-1",
    name: "Cheesy Corn Sandwich",
    category: "sandwiches",
    price: "₹99",
    type: "veg",
    desc: "Sweet corn kernels blended with gooey cheese and toasted golden crisp.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-2",
    name: "Hara Bhara Sandwich",
    category: "sandwiches",
    price: "₹119",
    type: "veg",
    desc: "Spinach, green pea patties and fresh mint chutney toasted in fresh bread.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-3",
    name: "Bombay Masala Sandwich W/H Fries",
    category: "sandwiches",
    price: "₹169",
    type: "veg",
    desc: "Spiced potato masala with crunchy veggies, green chutney & crispy fries.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-4",
    name: "Cheese Club Sandwich W/H Fries",
    category: "sandwiches",
    price: "₹199",
    type: "veg",
    desc: "Layers of fresh veggies, creamy cheese slices and signature herb mayo with fries.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-5",
    name: "Chutney Cheese Sandwich",
    category: "sandwiches",
    price: "₹149",
    type: "veg",
    desc: "Zesty spicy coriander mint chutney paired with melted cheddar slices.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-6",
    name: "Paneer Multigrain Sandwich",
    category: "sandwiches",
    price: "₹179",
    type: "veg",
    desc: "Fresh paneer blocks seasoned with herbs in toasted high-fiber multigrain bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-7",
    name: "Paneer Tikka Focaccia",
    category: "sandwiches",
    price: "₹249",
    type: "veg",
    desc: "Artisanal Italian focaccia loaf stuffed with tandoori spiced paneer & greens.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-8",
    name: "Egg Mayo Sandwich",
    category: "sandwiches",
    price: "₹159",
    type: "non-veg",
    desc: "Chopped boiled eggs tossed in rich creamy pepper mayonnaise.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-9",
    name: "Scrambled Egg Sandwich",
    category: "sandwiches",
    price: "₹139",
    type: "non-veg",
    desc: "Fluffy creamy eggs cooked to perfection and folded into buttery grilled bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-10",
    name: "Chicken Mayo Sandwich",
    category: "sandwiches",
    price: "₹179",
    type: "non-veg",
    desc: "Shredded juicy chicken folded in seasoned herb mayo and fresh lettuce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-11",
    name: "Tandoori Chicken Sandwich",
    category: "sandwiches",
    price: "₹249",
    type: "non-veg",
    desc: "Smoky tandoori marinated chicken fillets grilled with cheese and peppers.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-12",
    name: "Chicken Tikka Focaccia",
    category: "sandwiches",
    price: "₹249",
    type: "non-veg",
    desc: "Rustic herb focaccia packed with smoky chicken tikka and gourmet dressing.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-13",
    name: "Chicken Multigrain Sandwich",
    category: "sandwiches",
    price: "₹219",
    type: "non-veg",
    desc: "Lean spiced grilled chicken in healthy wholesome multigrain toast.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-14",
    name: "Signature Veg 2.0",
    category: "sandwiches",
    price: "₹219",
    type: "veg",
    desc: "Chef's gourmet sub loaded with sautéed fillings, melted cheese & secret sauce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-15",
    name: "Signature Non Veg 2.0",
    category: "sandwiches",
    price: "₹299",
    type: "non-veg",
    desc: "The ultimate loaded chicken sub loaded with tandoori cuts and house dips.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sw-16",
    name: "Chocolate Sandwich",
    category: "sandwiches",
    price: "₹139",
    type: "veg",
    desc: "Decadent melted dark chocolate between warm buttered toasted bread.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
  },

  // 7. COLD COFFEE & SHAKES
  {
    id: "cb-1",
    name: "Classic Cold Coffee",
    category: "cold-beverages",
    price: "₹89 / ₹119",
    type: "veg",
    desc: "Smooth, chilled coffee blended thick with milk and ice for instant refreshment.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-2",
    name: "Cold Coffee With Cream",
    category: "cold-beverages",
    price: "₹179",
    type: "veg",
    desc: "Smooth creamy coffee perfection crowned with rich whipped topping.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-3",
    name: "Hazelnut Cold Coffee",
    category: "cold-beverages",
    price: "₹119 / ₹149",
    type: "veg",
    desc: "Rich espresso blended with aromatic roasted hazelnut syrup.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-4",
    name: "Blueberry Cream Shake",
    category: "cold-beverages",
    price: "₹249",
    type: "veg",
    desc: "A luscious blend of blueberries and cream, bursting with wild flavor in every sip!",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-5",
    name: "Berry Blast",
    category: "cold-beverages",
    price: "₹219",
    type: "veg",
    desc: "Refreshing berry medley blended with chilled milk and ice cream.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-6",
    name: "Thanda Kesariya Doodh",
    category: "cold-beverages",
    price: "₹139",
    type: "veg",
    desc: "Chilled saffron infused milk with cardamom and crushed nuts.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-7",
    name: "Cold Chocolate",
    category: "cold-beverages",
    price: "₹189",
    type: "veg",
    desc: "Creamy iced chocolate milk shake crafted for chocolate enthusiasts.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cb-8",
    name: "Cold Chocolate With Cream",
    category: "cold-beverages",
    price: "₹239",
    type: "veg",
    desc: "Blend of rich dark cocoa and creamy perfection topped with cream swirl.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },

  // 8. COOLERS & ICED TEA
  {
    id: "col-1",
    name: "Peach Iced Tea",
    category: "coolers",
    price: "₹139",
    type: "veg",
    desc: "Sweet, tangy, and refreshingly peachy brewed black tea served over ice.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-2",
    name: "Peach Lemonade",
    category: "coolers",
    price: "₹149",
    type: "veg",
    desc: "A sparkling twist of sweet juicy peach with zesty fresh lemon squeeze.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-3",
    name: "Orange Fizz",
    category: "coolers",
    price: "₹149",
    type: "veg",
    desc: "Tangy orange fizz topped with healthy basil chia seeds for a burst of energy.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-4",
    name: "Energizer With Coffee Shot",
    category: "coolers",
    price: "₹149",
    type: "veg",
    desc: "Refreshing cooler with an invigorating espresso shot for your midday boost.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-5",
    name: "Cucumber Mint Refresher",
    category: "coolers",
    price: "₹149",
    type: "veg",
    desc: "Crisp, cool, and super refreshing garden cooler with fresh cucumber & mint.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-6",
    name: "Passion Fruit With Lime",
    category: "coolers",
    price: "₹149",
    type: "veg",
    desc: "Zesty tropical passion fruit syrup paired with a sharp lime twist.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-7",
    name: "Masala Lemonade",
    category: "coolers",
    price: "₹89 / ₹139",
    type: "veg",
    desc: "Desi nimbu pani elevated with roasted cumin, black salt, and mint.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "col-8",
    name: "Mint Lemon Iced Tea",
    category: "coolers",
    price: "₹69 / ₹109",
    type: "veg",
    desc: "Chilled iced tea infused with crushed garden mint and zesty lemon.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderMenuItems(cafeMenu);
  initCategoryFilters();
  initToastTrigger();
  setCurrentYear();
});

// 1. Mobile Navbar Toggle
function initNavigation() {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("header");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });

  // Sticky Navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. Render Full Menu Items
function renderMenuItems(items) {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;

  menuGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.setAttribute("data-category", item.category);

    const isVeg = item.type === "veg";
    const dietIcon = isVeg 
      ? `<span class="diet-tag veg"><i class="fa-solid fa-circle"></i> Veg</span>`
      : `<span class="diet-tag non-veg"><i class="fa-solid fa-circle"></i> Non-Veg</span>`;

    const categoryDisplayName = formatCategoryName(item.category);

    card.innerHTML = `
      <div class="card-img-container">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="card-img" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'"
        />
        ${dietIcon}
      </div>
      <div class="card-body">
        <div class="card-title-price">
          <h3 class="card-title">${item.name}</h3>
          <span class="card-price">${item.price}</span>
        </div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer-action">
          <span class="category-pill">${categoryDisplayName}</span>
          <button class="order-tap-btn" onclick="showToast('${item.name}')">
            <span>Order</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

// Helper to format category slug into clean readable text
function formatCategoryName(categorySlug) {
  const map = {
    "mini-meals": "Mini Meal",
    "fries": "Fries",
    "coffee-hot": "Hot Brew",
    "bun-egg": "Bun & Egg",
    "rolls-maggi": "Rolls & Maggi",
    "sandwiches": "Sandwich",
    "cold-beverages": "Cold Shake / Coffee",
    "coolers": "Cooler"
  };
  return map[categorySlug] || "Cafe Special";
}

// 3. Category Filter Buttons
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active class
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      if (filterValue === "all") {
        renderMenuItems(cafeMenu);
      } else {
        const filtered = cafeMenu.filter(item => item.category === filterValue);
        renderMenuItems(filtered);
      }
    });
  });
}

// 4. Toast notification on user click
function showToast(itemName) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = `Craving ${itemName}? Call or visit us to order fresh!`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function initToastTrigger() {
  window.showToast = showToast;
}

// 5. Automatic Current Year in Footer
function setCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}