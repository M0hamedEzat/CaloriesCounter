$(document).ready(function () {
  $("#calculator-form").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    var height = parseFloat($("#height").val());
    var weight = parseFloat($("#weight").val());
    var age = parseFloat($("#age").val());
    var activityLevel = parseFloat($("#activity-level").val());

    // Calculate daily calorie needs using the Harris-Benedict equation
    var calorieNeeds = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    calorieNeeds *= activityLevel;

    $("#result").text(
      "Your estimated daily calorie needs for a workout: " +
        calorieNeeds.toFixed(2) +
        " calories"
    );
  });
});
