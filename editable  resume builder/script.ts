document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    const resumeContent = `
        <h3><span contenteditable="true">${name}</span></h3>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <h4>Experience</h4>
        <p contenteditable="true">${experience}</p>
        <h4>Education</h4>
        <p contenteditable="true">${education}</p>
    `;

    document.getElementById('resumeContent')!.innerHTML = resumeContent;
});