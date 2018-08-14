import express from 'express'
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

const app = express();


app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

app.get('/',(req,res) => {
	res.render('index',{
		content:'..'
	});
})

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(8000, () => console.log('Running server on port localhost:8000'))