
const index = (req, res) => {
    res.render('home', {formMessage: req.flash('form')});
}

export default {
    index
}