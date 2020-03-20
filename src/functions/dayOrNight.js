const dayOrNight = k => {
  let prop = k;
  if (prop === "d") {
    let x = "day";
    return x;
  } else {
    let x = "Night";
    return x;
  }
};

export default dayOrNight;
