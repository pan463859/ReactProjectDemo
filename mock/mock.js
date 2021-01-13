import Mock from 'mockjs';
 
Mock.mock('/api/user', {
    'age':Mock.Random.first(),
    'name': '@cname',
    'intro': '@word(20)'
});