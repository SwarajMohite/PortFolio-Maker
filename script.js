function openPortfolio(name, bio, skills, projects, githubLink, instagramLink, linkedinLink, imageSrc) {
    const portfolioHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name} : Portfolio</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 0;
            }
            .portfolio {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                color: #333;
            }
            img {
                width: 100%;
                height: auto;
                border-radius: 8px;
                margin-bottom: 20px;
            }
            p {
                line-height: 1.6;
                color: #555;
            }
            .skills, .projects {
                margin: 15px 0;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #f1f1f1;
            }
            .social-links {
                text-align: center;
                margin: 20px 0;
            }
            .social-links a {
                margin: 0 10px;
                text-decoration: none;
                color: #007bff;
                transition: color 0.3s;
            }
            .social-links a:hover {
                color: #0056b3;
            }
            button {
                display: block;
                width: 100%;
                padding: 10px;
                background-color: #007bff;
                color: #ffffff;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="portfolio">
            <h1>${name}</h1>
            <img src="${imageSrc}" alt="${name}">
            <p>${bio}</p>
            <div class="skills">
                <strong>Skills:</strong> ${skills}
            </div>
            <div class="projects">
                <strong>Projects:</strong> ${projects}
            </div>
            <div class="social-links">
                ${githubLink ? `<a href="${githubLink}" target="_blank">GitHub</a>` : ''}
                ${instagramLink ? `<a href="${instagramLink}" target="_blank">Instagram</a>` : ''}
                ${linkedinLink ? `<a href="${linkedinLink}" target="_blank">LinkedIn</a>` : ''}
            </div>
            <button id="viewSourceCode">See Source Code</button>
        </div>

        <script>
            document.getElementById('viewSourceCode').onclick = function() {
                const newWindow = window.open();
                const escapedHTML = \`${portfolioHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;")}\`.replace(/`/g, "&#96;"); // Escape backticks
                newWindow.document.write(\`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Source Code</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 1rem; background-color: #f0f0f0; }
                            pre { background-color: #fff; padding: 1rem; border-radius: 5px; overflow: auto; }
                        </style>
                    </head>
                    <body>
                        <h1>Portfolio Source Code</h1>
                        <pre>\${escapedHTML}</pre>
                    </body>
                    </html>
                \`);
                newWindow.document.close();
            };
        </script>
    </body>
    </html>
    `;

    // Open the portfolio in a new tab
    const newTab = window.open();
    newTab.document.write(portfolioHTML);
    newTab.document.close();
}
