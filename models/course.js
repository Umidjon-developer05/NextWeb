import { model, models, Schema } from "mongoose";


const TopicSchema = new Schema({
    id:String,
    name1: String,
    courseInfo:String,
    data:String,
    slug:String,
    title:String,
    image:String
});

const Topic = models?.Topic || model('Topic', TopicSchema);
export default Topic;
