const router = require('express').Router();
const File = require('../models/file');
var fs = require('fs');

router.get('/:uuid', async (req, res) => {
   // Extract link and get file from storage send download stream 
   const file = await File.findOne({ uuid: req.params.uuid });
   // Link expired
   if(!file) {
        return res.render('download', { error: 'Link has been expired.'});
   } 
   else
   {
      const response = await file.save();
      const filePath = `${__dirname}/../${file.path}`;
   fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
      res.send({data : data});
   });
   }   
   //res.download(filePath);
});


module.exports = router;