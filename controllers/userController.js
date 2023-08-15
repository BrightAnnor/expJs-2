const homePage = (req,res)=>{
    res.send('homePage')
};
// controller for about Page
const aboutUs = (req,res)=>{
    res.send('about us page')
}

module.exports ={
    homePage,
    aboutUs,
}