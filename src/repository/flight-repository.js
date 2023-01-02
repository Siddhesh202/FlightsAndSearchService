const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = FlightRepository;