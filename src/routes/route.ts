import {Router} from "express"
import userRoute from "./userRouter"

const router:Router =Router();
console.log("/userskk")
router.use("/users", userRoute)
export default router;
