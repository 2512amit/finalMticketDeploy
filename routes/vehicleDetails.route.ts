import {Router} from 'express';
import vehicleDetailController from '../controllers/vehicle/vehicleDetailController';

export const vehicleDetailRouter=Router()
vehicleDetailRouter.get("/getAll",vehicleDetailController.getAll)
vehicleDetailRouter.get("/fish/:species",vehicleDetailController.getSpeciesData)
vehicleDetailRouter.post('/',vehicleDetailController.vehicleDetailController)
vehicleDetailRouter.post('/search/:filterBy?/:sortBy?',vehicleDetailController.getSearchResult)
vehicleDetailRouter.get('/',vehicleDetailController.getAll)




