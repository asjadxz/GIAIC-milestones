var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var resumeContent = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Experience</h4>\n        <p>").concat(experience, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n    ");
    document.getElementById('resumeContent').innerHTML = resumeContent;
});
