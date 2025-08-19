// Function to fetch exercises from API
function showExercies() {
    const exerciseType = document.getElementById("exercies").value.trim();
    const muscleType = document.getElementById("muscle").value.trim();
    const difficultyType = document.getElementById("difficulty").value.trim();

    let url = 'https://api.api-ninjas.com/v1/exercises?';

    if (exerciseType === '' && muscleType === '' && difficultyType === '') {
        alert('Please select at least one option');
        return;
    }

    // Build API query
    if (exerciseType !== '') url += `type=${exerciseType}&`;
    if (muscleType !== '') url += `muscle=${muscleType}&`;
    if (difficultyType !== '') url += `difficulty=${difficultyType}&`;

    url = url.slice(0, -1); // Remove extra "&"

    fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'KxwcQp9iAryv8zX/da779Q==WDcePT1JcKHoAW4h' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length === 0) {
            document.getElementById('Exercises').innerHTML = "No exercise found for the given input.";
            return;
        }

        // Display results
        let output = "";
        data.forEach((exercise, index) => {
            output += `<br><br> Exercise ${index + 1} :-<br>
            Name :- ${exercise.name}<br><br>
            Type :- ${exercise.type}<br><br>
            Muscle :- ${exercise.muscle}<br><br>
            Equipment :- ${exercise.equipment}<br><br>
            Difficulty :- ${exercise.difficulty}<br><br>
            Instruction :- ${exercise.instructions}<br>`;
        });
        document.getElementById('Exercises').innerHTML = output;
    })
    .catch(error => {
        document.getElementById('Exercises').innerHTML = "Facing Problem While Fetching Suitable Exercise For you";
        console.log('Error', error);
    });
}

// ✅ New function → fills input boxes when card is clicked
function fillInput(inputId, value) {
    document.getElementById(inputId).value = value;
}
