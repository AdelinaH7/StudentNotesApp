module.exports = {
    ensureAuthenticated: function (req, res, next) { //This is a function which receives as parameters request, response and next
        if (req.isAuthenticated()) {                 //If the user is authenticated it returns next
            return next();
        }
        req.flash('error_msg', 'Please log in to access your notes');   //If not it shows an error message and it redirects the user to a specified page
        res.redirect('/users/login');
    },
    forwardAuthenticated: function (req, res, next) { //This is a function which receives as parameters request, response and next
        if (!req.isAuthenticated()) {                   //If the user is not authenticated it returns next
            return next();
        }
        res.redirect('/dashboard');                     //Redirects the user
    }
};