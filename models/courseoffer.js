import { model, models, Schema } from "mongoose";


const CourseOfferSchema = new Schema({
    username:String,
    Offer:String
});

const Courseoffer = models?.Courseoffer || model('Courseoffer', CourseOfferSchema);
export default Courseoffer;
