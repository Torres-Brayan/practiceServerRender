fetch("/workouts")
  .then((res) => res.json())
  .then((data) => {
    console.log("workouts data", data);
  });