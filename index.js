const express = require('express');

const app = express();

const charecters = [
    {id: 0, name : 'Alex', Marriage: true, topGifts: ['Complete Breakfast', 'Salmon Dinner', 'Pearl'], Address: '1 River Road', Birthday: 'Summer: 13'},
    {id: '1', name : 'Elliot', Marriage: true, topGifts: ['Lobster', 'Duck Feather', 'Squid Ink'], Address: 'Elliot\'s Cabin', Birthday: 'Fall: 5'},
    {id: 2, name : 'Harvey', Marriage: true, topGifts: ['Coffee', 'Truffle Oil', 'Wine'], Address: 'Medical Clinic', Birthday: 'Winter: 14'},
    {id: 3, name : 'Sam', Marriage: true, topGifts: ['Cactus Fruit', 'Maple Bar', 'Pizza'], Address: '1 Willow Lane', Birthday: 'Summer: 17'},
    {id: 4, name : 'Sebastian', Marriage: true, topGifts: ['Frozen Tear', 'Sashimi', 'Obsidian'], Address: '24 Mountain Road', Birthday: 'Winter: 10'},
    {id: 5, name : 'Shane', Marriage: true, topGifts: ['Beer', 'Pizza', 'Hot Pepper'], Address: 'Marnies Ranch', Birthday: 'Spring: 20'},
    {id: 6, name : 'Abigail', Marriage: true, topGifts: ['Amathyst', 'Pumpkin', 'Pufferfish'], Address: 'Pierres General Store', Birthday: 'Fall 13'},
    {id: 7, name : 'Emily', Marriage: true, topGifts: ['Cloth', 'Jade', 'Wool'], Address: '2 Willow Lane', Birthday: 'Spring 27'},
    {id: 8, name : 'Haley', Marriage: true, topGifts: ['Pink Cake', 'Sunflower', 'Fruit Salad'], Address: '2 Willow Lane', Birthday: 'Spring 14'},
    {id: 9, name : 'Leah', Marriage: true, topGifts: ['Salad', 'Wine', 'Truffle'], Address: 'Leahs Cottage', Birthday: 'Winter 23'},
    {id: 10, name : 'Maru', Marriage: true, topGifts: ['Battery Pack', 'Diamond', 'Gold Bar'], Address: '24 Mountain Road', Birthday: 'Summer 10'},
    {id: 11, name : 'Penny', Marriage: true, topGifts: ['Emerald', 'Poppy', 'Melon'], Address: 'Trailer', Birthday: 'Fall 2'},
    {id: 12, name : 'Caroline', Marriage: false, topGifts: ['Green Tea', 'Summer Spangle', 'Fish Taco'], Address: 'Pierres General Store', Birthday: 'Winter 7'},
    {id: 13, name : 'Clint', Marriage: false, topGifts: ['Emerald', 'Gold Bar', 'Ruby'], Address: 'Blacksmith', Birthday: 'Winter 26'},
    {id: 14, name : 'Demitrius', Marriage: false, topGifts: ['Strawberry', 'Bean Hotpot', 'Ice Cream'], Address: '24 Mountain Road', Birthday: 'Summer 19'},
    {id: 15, name : 'Dwarf', Marriage: false, topGifts: ['Emerald', 'Jade', 'Ruby'], Address: 'Eastern Cave', Birthday: 'Summer 22'},
    {id: 16, name : 'Evelyn', Marriage: false, topGifts: ['Beet', 'Tulip', 'Diamond'], Address: '1 River Road', Birthday: 'Winter 20'},
    {id: 17, name : 'George', Marriage: false, topGifts: ['Leek', 'Fried Mushroom', 'Pearl'], Address: '1 River Road', Birthday: 'Fall 24'},
    {id: 18, name : 'Gus', Marriage: false, topGifts: ['Orange', 'Escargot', 'Fish Taco'], Address: 'The Stardrop Saloon', Birthday: 'Summer 8'},
    {id: 19, name : 'Jas', Marriage: false, topGifts: ['Fairy Rose', 'Plum Pudding', 'Pink Cake'], Address: 'Marnies Ranch', Birthday: 'Summer 4'},
    {id: 20, name : 'Jodi', Marriage: false, topGifts: ['Fried Eel', 'Chocolate Cake', 'Diamond'], Address: '1 Willow Lane', Birthday: 'Fall 11'},
    {id: 21, name : 'Kent', Marriage: false, topGifts: ['Pearl', 'Fiddlehead Risotto', 'Roasted Hazelnuts'], Address: '1 Willow Lane', Birthday: 'Spring 4'},
    {id: 22, name : 'Krobus', Marriage: false, topGifts: ['Diamond', 'Void Egg', 'Pumpkin'], Address: 'The Sewers', Birthday: 'Winter 1'},
    {id: 23, name : 'Leo', Marriage: false, topGifts: ['Poi', 'Duck Feather', 'Mango'], Address: 'Ginger Island Forest', Birthday: 'Summer 26'},
    {id: 24, name : 'Lewis', Marriage: false, topGifts: ['Hot Pepper', 'Green Tea', 'Glazed Yam'], Address: 'Mayors Manor', Birthday: 'Spring 7'},
    {id: 25, name : 'Linus', Marriage: false, topGifts: ['Yam', 'Coconut', 'Blueberry Tart'], Address: 'Tent', Birthday: 'Winter 3'},
    {id: 26, name : 'Marnie', Marriage: false, topGifts: ['Pink Cake', 'Pumpkin Pie', 'Diamond'], Address: 'Cindersnap Forest', Birthday: 'Fall 18'},
    {id: 27, name : 'Pam', Marriage: false, topGifts: ['Beer', 'Mead', 'Parsnip'], Address: 'Trailer', Birthday: 'Spring 18'},
    {id: 28, name : 'Pierre', Marriage: false, topGifts: ['Fried Calamari', 'Pearl', 'Rabbits Foot'], Address: 'Pierres General Store', Birthday: 'Spring 26'},
    {id: 29, name : 'Robin', Marriage: false, topGifts: ['Goat Cheese', 'Peach', 'Spaghetti'], Address: '24 Mountain Road', Birthday: 'Fall 21'},
    {id: 30, name : 'Sandy', Marriage: false, topGifts: ['Crocus', 'Daffodil', 'Sweet Pea'], Address: 'Oasis', Birthday: 'Fall 15'},
    {id: 31, name : 'Vincent', Marriage: false, topGifts: ['Grape', 'Snail', 'Pink Cake'], Address: '1 Willow Lane', Birthday: 'Spring 10'},
    {id: 32, name : 'Willy', Marriage: false, topGifts: ['Diamond', 'Mead', 'Octopus'], Address: 'Fish Shop', Birthday: 'Summer 24'},
    {id: 33, name : 'Wizard', Marriage: false, topGifts: ['Purple Mushroom', 'Solar Essence', 'Void Essence'], Address: 'Wizards Tower', Birthday: 'Winter 17'},
    {id: 34, name : 'Birdie', Marriage: false, Address: 'Ginder Island Beach Hut'},
    {id: 35, name : 'Bouncer', Marriage: false, Address: 'Oasis'},
    {id: 36, name : 'Gil', Marriage: false, Address: 'The Adventures Guild',},
    {id: 37, name : 'Governor', Marriage: false},
    {id: 38, name : 'Gunther', Marriage: false, Address: 'Museum',},
    {id: 39, name : 'Henchman', Marriage: false, topGifts: 'Void Mayonnaise', Address: 'Witches Swamp'},
    {id: 40, name : 'Morris', Marriage: false, Address: 'JojaMart'},
    {id: 41, name : 'Marlon', Marriage: false, Address: 'The Adventures Guild',},
    {id: 42, name : 'Mr. Qi', Marriage: false, Address: 'Casino or Walnut Room',},
    {id: 43, name : 'Proffessor Snail', Marriage: false, Address: 'Island Field Office',},
]

app.get('/charecter/all', (req, res) =>{
    return res.json(charecters);
})

app.get('/charecter/:name', (req, res) =>{
    const {name} = req.params;
    const charecter = charecters.find(charecter => charecter.name.toLowerCase() === name.toLowerCase());
    return res.json(charecter);
})

app.get('/charecter/:name/gifts', (req, res) =>{
    const {name} = req.params;
    const charecter = charecters.find(charecter => charecter.name.toLowerCase() === name.toLowerCase());
    return res.json(charecter.topGifts)
})

app.listen(3000, () => {
    console.log('Ready');
});