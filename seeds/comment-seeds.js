const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Be brave. Nothing can beat you if you put your mind to it.',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'The key to success is to work hard and be determined.',
    user_id: 8,
    post_id: 7
  },
  {
    comment_text: 'Don’t be afraid of living life.',
    user_id: 3,
    post_id: 6
  },
  {
    comment_text: 'Actions over words.',
    user_id: 9,
    post_id: 2
  },
  {
    comment_text: 'Courage is about facing your demons and problems.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'The power from acheiving what you set your mind to is amazing.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Bad times are just a sign that good times are on a way.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Nothing can defeat you except you.',
    user_id: 10,
    post_id: 4
  },
  {
    comment_text: 'Either I win or lose, both are a part of life.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Try something new and learn something new everyday.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'You are a hero.',
    user_id: 3,
    post_id: 7
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;