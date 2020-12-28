import mongoose from 'mongoose';

import topicSchema from '../schemas/topic.schema';
const Topic = mongoose.model('topicSchema', topicSchema);

export default Topic;