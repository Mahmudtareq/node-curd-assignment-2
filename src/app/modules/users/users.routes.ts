import express from 'express';
import { UserController } from './users.contoller';

const router = express.Router();
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getSingleUser);
router.delete('/:userId', UserController.deleteUser);
router.put('/:userId', UserController.updateUser);

export const UserRoutes = router;
