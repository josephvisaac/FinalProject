const mongoose = require('mongoose');
const Theologians = require('/why/IronPlate/backend/models/TheologianModel')
mongoose
  .connect( 'mongodb+srv://josephvisaac:The4horsemen123@cluster0-hyc4o.mongodb.net/test?retryWrites=true&w=majority', Theologians)
  .then(() => console.log(`Bruh`))
  .catch((err) => console.error('Error connecting to mongo', err));

  
//   Theologians.create({
    
       
      
//   )



// To Consentius: Against Lying
// On the Work of Monks
// On Patience
// On Care to be Had For the Dead
// On the Morals of the Catholic Church
// On the Morals of the Manichaeans
// On Two Souls, Against the Manichaeans
// Acts or Disputation Against Fortunatus the Manichaean
// Against the Epistle of Manichaeus Called Fundamental
// Reply to Faustus the Manichaean
// Concerning the Nature of Good, Against the Manichaeans
// On Baptism, Against the Donatists
// Answer to Letters of Petilian, Bishop of Cirta
// The Correction of the Donatists
// Merits and Remission of Sin, and Infant Baptism
// On the Spirit and the Letter
// On Nature and Grace
// On Man's Perfection in Righteousness
// On the Proceedings of Pelagius
// On the Grace of Christ, and on Original Sin
// On Marriage and Concupiscence
// On the Soul and its Origin
// Against Two Letters of the Pelagians
// On Grace and Free Will
// On Rebuke and Grace
// The Predestination of the Saints/Gift of Perseverance
// Our Lord's Sermon on the Mount
// The Harmony of the Gospels
// Sermons on Selected Lessons of the New Testament
// Tractates on the Gospel of John
// Homilies on the First Epistle of John
// Soliloquies
// The Enarrations, or Expositions, on the Psalms
