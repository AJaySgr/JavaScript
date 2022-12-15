const express=require('express');
const controller=require('../controllers/flightController');
const router=express.Router();


router.get('/flights',controller.GetAllFlights);
router.get('/flights/:FlightNumber',controller.GetFlightByFlightNumber);
router.get('/flights/date/:FlightDateTime',controller.GetFlightsBydate);
router.get('/flights/sourcedest',controller.GetFlightSourceAndDestination);
router.post('/flights',controller.AddFlight);
router.delete('/flights/:id',controller.DeleteFlight);
router.put('/flights/:id',controller.UpdateFlight);








module.exports=router;