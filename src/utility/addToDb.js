import { toast } from "react-toastify";

const getStoredReadList = () => {
  // read list
  const storedListStr = localStorage.getItem('read-list');
  
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (!storedList.includes(id)) {
    
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
  } else {
    console.log(id, 'already exists in the read list');
    toast('This book is added to your read list.')
  }
};

const getStoredWishList = () => {
  // wish-list
  const storedWishListStr = localStorage.getItem('wish-list');
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

export { addToStoredReadList, getStoredWishList, getStoredReadList };
