import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('index.ejs', {title: 'First web with node'});
})

router.get('/about', (req, res) => {
    res.render('about.ejs',  {title: 'About with node'});
})

router.get('/contact', (req, res) => {
    res.render('contact.ejs',  {title: 'Contact with node'});
})

export default router;