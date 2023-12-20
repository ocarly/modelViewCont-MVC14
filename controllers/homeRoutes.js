const router = require('express').Router()
const { Blog, User, Comment } = require('../models')
const withAuth = require('../utils/auth');

router.get ('/', async ( req, res ) =>{
    try {
    const blogData = await Blog.findAll({
        include: [{model: User,
        attributes: ['name']}],
    });
    
    const blogs = blogData.map((blog) => blog.get({ plain: true }))
  //  console.log(blogs, "blogData")
    res.render('homepage', {blogs})
    } catch (error) {
    res.status(500).json(error)
    }
});




// GET one project
router.get('/project/:id', async (req, res) => {
    try {
      const dbProjectData = await Project.findByPk(req.params.id, {
        include: [
          {
            model: Project,
            attributes: [
              'id',
              'name',
              'description',
              'date_created',
              'needed_funding',
              
            ],
          },
        ],
      });
  
      const plainDB = dbProjectData.get({ plain: true });
      res.render('project', { plainDB });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  


  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });




module.exports = router


