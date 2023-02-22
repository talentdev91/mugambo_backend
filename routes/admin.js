var express = require("express");
const AdminController = require("../controllers/AdminController");
var router = express.Router();

// @route    GET api/v1/admin/sandbox
// @desc     Tests Admin Router
// @access   Private

router.get("/sandbox", AdminController.sandbox);

// @route    GET api/v1/admin/listUserActivity
// @desc     Get request logs from db
// @access   Private

router.get("/listUserActivity", AdminController.listUserActivity);

// @route    POST api/v1/admin/extractRouter
// @desc     Set router field such as block, address, transaction,...
// @access   Private

router.post("/extractRouter", AdminController.extractRouter);

// @route    GET api/v1/admin/listAllUserFeedback
// @desc     list all feedbacks with certain type
// @access   Private

router.get(
  "/listAllUserFeedback/:type/:page/:rowsPerPage",
  AdminController.listAllUserFeedback
);

// @route    GET api/v1/admin/getFeedbackStatistics
// @desc     list all feedbacks with certain type
// @access   Private

// router.get("/getFeedbackStatistics", AdminController.getFeedbackStatistics);

// @route    POST api/v1/admin/closeUserFeedbacks
// @desc     close all feedbacks with certain type
// @access   Private

router.post("/closeUserFeedbacks", AdminController.closeUserFeedbacks);

// @route    POST api/v1/admin/sendFeedbackResponseEmailToUser
// @desc     send response email to user
// @access   Private

router.post(
  "/sendFeedbackResponseEmailToUser",
  AdminController.sendFeedbackResponseEmailToUser
);

// @route    POST api/v1/admin/updateNameTag
// @desc     send response email to user
// @access   Private

router.post(
  "/updateNameTag",
  AdminController.updateNametag
);

// @route    POST api/v1/admin/getHomeAdvertise
// @desc     get Home page advertise info
// @access   Private

router.get('/getAdvertise', AdminController.getAdvertise)

// @route    POST api/v1/admin/createAdvertise
// @desc     add Home page advertise info
// @access   Private

router.post('/createAdvertise', AdminController.createAdvertise)

// @route    POST api/v1/admin/updateAdvertise
// @desc     add Home page advertise info
// @access   Private

router.post('/updateAdvertise', AdminController.updateAdvertise)

// @route    POST api/v1/admin/getHomeAdvertise
// @desc     add Home page advertise info
// @access   Private

router.post('/deleteAdvertise', AdminController.deleteAdvertise)

module.exports = router;
