// 외부에서 mongoose 패키지를 가져옴
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true, //필수요소
  },
  order: {
    type: Number,
    required: true, //필수요소
  },
  doneAt: {
    type: Date,
    required: false, // 필수요소가 아님
  },
});

TodoSchema.virtual('todoId').get(function () {
  return this._id.toHexString();
});
TodoSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model('Todo', TodoSchema);
