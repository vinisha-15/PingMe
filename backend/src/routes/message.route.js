import express from "express";
const router=express.Router();
import {getAllContacts,getMessagesByUserID,getChatPartners,sendMessage} from "../controllers/message.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";
import {arcjetProtection} from "../middleware/arcjet.middleware.js";

//the middleware execute in order-so requests get rate-limited first,then authenticated.
//this is actually more efficient since unauthenticated requests get blocked by rate limiting  before hitting the auth middleware.

app.use(arcjetProtection,protectRoute);

router.get('/contacts',getAllContacts);
router.get('/chats',getChatPartners);
router.get('/:id',getMessagesByUserID);
router.post("/send/:id",sendMessage);

export default router;