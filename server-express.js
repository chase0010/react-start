import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('*', express.static('src'));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});