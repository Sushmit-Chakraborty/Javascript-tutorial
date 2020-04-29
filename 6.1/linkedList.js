let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

//Print linked list
function printList(list){
    console.log(list.value);
    if(list.next){
        printList(list.next)
    }
}

//Reverse linked list
function reverseList(list){
    if(list.next){
        reverseList(list.next)
    }
    console.log(list.value)
}


reverseList(list)