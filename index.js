document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const students = [];

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('hovaten').value;
        const age = document.getElementById('quantity').value;
        const gender = document.querySelector('input[name="gioitinh"]:checked').value;

        const hobbies = [];
        document.querySelectorAll('input[name="sothich"]:checked').forEach(function(el) {
            hobbies.push(el.value);
        });

        students.push({ name, age, gender, hobbies });

        const resultElement = document.getElementById('studentList');
        resultElement.innerHTML = generateStudentList(students);
    });

    function generateStudentList(studentArray) {
        let resultHTML = '';
        studentArray.forEach((student, index) => {
            resultHTML += `
                <div class="student">
                    <h3>Sinh viên ${index + 1}</h3>
                    <p>Họ và tên: ${student.name}</p>
                    <p>Tuổi: ${student.age}</p>
                    <p>Giới tính: ${student.gender}</p>
                    <p>Sở thích: ${student.hobbies.join(', ')}</p>
                </div>
            `;
        });
        return resultHTML;
    }
});
