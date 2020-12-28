import { Schema } from 'mongoose';

const topicSchema = new Schema({
    name: { type: String, required: true },
});

export default topicSchema;