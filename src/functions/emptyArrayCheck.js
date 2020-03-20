// CHECK WICH OBJECTS OF ARRAY ARE EMPTY
// CREATE AN ARRAY WITH THE DATA OBJECTS THAT ARE NOT EMPTY OF OUR ARRAY

const emptyArrayCheck = arrayPush => {
  // let arrayPush = [];
  let k = 0;

  for (k === 0; k < arrayPush.length; k++) {
    if (arrayPush[k].length === 0) {
      //         console.log("array select empty ", k);
    } else {
      //        console.log("array select ", arrayPush[k]);
      this.setState({
        station: arrayPush[k]
      });
    }
  }
};

export default emptyArrayCheck;
