Create a Student List Manager using HTML, CSS, and JavaScript. Create a form to enter
student names. Store the names in an array and display them dynamically in a list. Provide
functionality to delete a selected student from the array and update the displayed list
accordingly.
❖ Input :
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Student List Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            width: 400px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        .input-group {
            display: flex;
            margin-bottom: 20px;
        }

        .input-group input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px 0 0 8px;
            outline: none;
        }

        .input-group button {
            padding: 10px 15px;
            border: none;
            background: #4CAF50;
            color: #fff;
            border-radius: 0 8px 8px 0;
            cursor: pointer;
        }

        .input-group button:hover {
            background: #388E3C;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            background: #f9f9f9;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .delete-btn {
            background: #dc3545;
            color: #fff;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }

        .delete-btn:hover {
            background: #a71d2a;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Student List Manager</h2>
        <div class="input-group">
            <input type="text" id="studentInput" placeholder="Enter student name">
            <button onclick="addStudent()">Add</button>
        </div>
        <ul id="studentList"></ul>
    </div>
    <script>
        let students = [];
        function addStudent() {
            const input = document.getElementById("studentInput");
            const name = input.value.trim();
            if (name === "") {
                alert("Please enter a student name!");
                return;
            }
            students.push(name);
            input.value = "";
            displayStudents();
        }
        function deleteStudent(index) {
            students.splice(index, 1);
            displayStudents();
        }
        function displayStudents() {
            const list = document.getElementById("studentList");
            list.innerHTML = "";
            students.forEach((student, index) => {
                const li = document.createElement("li");
                li.textContent = student;
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = () => deleteStudent(index);
                li.appendChild(deleteBtn);
                list.appendChild(li);
            });
        } 
    </script>
</body>

</html>