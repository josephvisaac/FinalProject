const router = require('express').Router();
const Theologians = require('../models/TheologianModel')

router.get('/all-theologians', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

Theologians.create(
    {
        religion: 'Roman Catholic',
        name: 'Michael Lofton',
        description: 'Michael is a graduate of Christendom College Graduate School of Theology where he received his Master of Arts in Theological Studies (Cum Laude) in 2018. He is an Associate Editor at Christendom Graduate School. He has also appeared on EWTN, SiriusXM Radio, Radio Maria and has contributed frequently to various newspapers and websites.',
        years: 'about 30 yrs old', //life birth/death
        img: 'https://reasonandtheologycom.files.wordpress.com/2019/01/grad-school-1.png',
        books: ['Is My Baby in Hell?', 'Wisdom of the Fathers', 'St. Jerome Study Bible: Genesis - Ruth' ]
    }
)


module.exports = router;