import mongoose from 'mongoose';

import linkSchema from '../schemas/link.schema';
const Link = mongoose.model('Link', linkSchema);

export default Link;