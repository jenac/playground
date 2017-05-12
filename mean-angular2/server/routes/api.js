
const express = require('express');
const router = express.Router();
const ToolModel = require('../models/tool.model');

router.get('/', (req, res) => {
  res.send('api works');

});

router.get('/tools', (req, res) => {
  ToolModel.find((err, toolModels) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(toolModels);
    }
  })
});

router.post('/tools', (req, res) => {
  let toolModel = new ToolModel(req.body);
  toolModel.save((err, value) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({success: true});
    }
  });
});

router.get('/tools/:uid', (req, res) => {
  let toolUid = req.params.uid;
  ToolModel.findOne({uid: toolUid}, (err, toolModel) =>{
    if (err) {
      res.status(500).json(err);
    } else if (toolModel == null) {
      res.status(404).json({message: "not found"});
    } else {
      res.status(200).json(toolModel);
    }
  })
});

router.put('/tools/:uid', (req, res) => {
  let toolUid = req.params.uid;
  let updatedtoolModel = req.body;
  ToolModel.findOneAndUpdate({uid: toolUid}, updatedtoolModel, (err, toolModel) =>{
    if (err) {
      res.status(500).json(err);
    } else if (toolModel == null) {
      res.status(404).json({message: "not found"});
    }
    else {
      res.status(200).json(updatedtoolModel);
    }
  })
});

router.delete('/tools/:uid', (req, res) => {
  let toolUid = req.params.uid;
  ToolModel.findOneAndRemove({uid: toolUid}, (err, toolModel) =>{
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({success: true});
    }
  })
});


module.exports = router;