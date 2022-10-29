const showTag = function (){
    console.log ('showTag -> this', this);
    console.log ('showTag -> this', this.tag);

};

const user = {
    tag: 'Mango',
};

user.showUserTag = showTag;
console.log('user', user);

user.showUserTag();