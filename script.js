// Get Started
function showDropdown() {
    // Select the profile dropdown
    const dropdown = document.getElementById('profile-dropdown-content');
    
    // Toggle the dropdown visibility
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// FIXED: Relative paths for search feature routing
const features = {
    "Grammar Correction": "grammar_correction.html",
    "Detailed Error Explanations": "detailed_error_explanations.html",
    "Style Conversion": "style_conversion.html",
    "Sentiment Analysis": "sentiment_analysis.html",
    "Doc Corrector": "doc_corrector.html"
};

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    if (value.length === 0) {
        return;
    }
    const filteredFeatures = Object.keys(features).filter(feature => feature.toLowerCase().includes(value.toLowerCase()));
    filteredFeatures.forEach(feature => {
        const div = document.createElement('div');
        div.classList.add('suggestion-item');
        div.innerText = feature;
        div.onclick = () => {
            window.location.href = features[feature];
        };
        suggestions.appendChild(div);
    });
}

// Event listener to close suggestions when clicking outside
document.addEventListener('click', function(event) {
    const searchBar = document.getElementById('search-bar');
    if (searchBar && !searchBar.contains(event.target)) {
        const suggestions = document.getElementById('suggestions');
        if (suggestions) suggestions.innerHTML = '';
    }
});


// Login and Sign Up Button
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openModal('loginModal');
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openModal('signupModal');
        });
    }
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// Close modals when clicking outside of the modal content
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    if (event.target === loginModal) {
        closeModal('loginModal');
    }
    if (event.target === signupModal) {
        closeModal('signupModal');
    }
}


// FAQ Scroll
document.addEventListener('DOMContentLoaded', function() {
    const faqLink = document.querySelector('a[href="#faqs"]');
    if (faqLink) {
        faqLink.addEventListener('click', function(event) {
            event.preventDefault();
            const faqSection = document.getElementById('faqs');
            if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Menu Dropdowns
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuDropdownContent = document.getElementById("menu-dropdown-content");

    const profileIcon = document.getElementById("profile-icon");
    const profileDropdownContent = document.getElementById("profile-dropdown-content");

    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");

    // Toggle visibility for menu dropdown
    if (menuIcon && menuDropdownContent) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllDropdowns();
            menuDropdownContent.classList.toggle("dropdown-show");
        });
    }

    // Toggle visibility for profile dropdown
    if (profileIcon && profileDropdownContent) {
        profileIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllDropdowns();
            profileDropdownContent.classList.toggle("dropdown-show");
        });
    }

    // Toggle visibility for search bar
    if (searchIcon && searchBar) {
        searchIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllDropdowns();
            searchBar.classList.toggle("search-show");
        });
    }

    // Close all dropdowns when clicking outside
    window.addEventListener("click", function () {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        if (menuDropdownContent) menuDropdownContent.classList.remove("dropdown-show");
        if (profileDropdownContent) profileDropdownContent.classList.remove("dropdown-show");
        if (searchBar) searchBar.classList.remove("search-show");
    }
});

// The Disappearing Effect on Scroll
window.addEventListener('scroll', function() {
    var mainBody = document.querySelector('.main-body');
    var scrollPosition = window.scrollY;

    if (mainBody) {
        if (scrollPosition > 100) {
            mainBody.classList.add('fade-out');
        } else {
            mainBody.classList.remove('fade-out');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.get-started-btn');

    if (button) {
        button.addEventListener('mousemove', function(e) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            const x = e.clientX - button.getBoundingClientRect().left;
            const y = e.clientY - button.getBoundingClientRect().top;

            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;

            button.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });
    }
});

// Function to clear the input box and update label
function clearInput() {
    const inputBox = document.getElementById("input-text");
    if (inputBox) inputBox.value = "";
    
    const origText = document.getElementById("original-text");
    if (origText) origText.textContent = "Your original text will appear here.";
    
    const corrText = document.getElementById("corrected-text");
    if (corrText) corrText.textContent = "Your corrected text will appear here.";
    
    const suggText = document.getElementById("suggestions");
    if (suggText) suggText.textContent = "Suggestions will appear here.";
    
    const explText = document.getElementById("explanations");
    if (explText) explText.textContent = "Explanations will appear here.";

    const deleteLabel = document.getElementById("delete-label");
    if (deleteLabel) {
        deleteLabel.textContent = "Deleted!";
        setTimeout(() => {
            deleteLabel.textContent = "Delete";
        }, 2000);
    }
}

function copyResult() {
    const resultBox = document.getElementById("result");
    if (resultBox) {
        resultBox.select();
        document.execCommand("copy");
    }

    const copyLabel = document.getElementById("copy-label");
    if (copyLabel) {
        copyLabel.textContent = "Copied";
        setTimeout(() => {
            copyLabel.textContent = "Copy";
        }, 2000);
    }
}

function copyCorrectedText() {
    const correctedTextElement = document.getElementById('corrected-text');
    if (!correctedTextElement) return;
    const textToCopy = correctedTextElement.textContent || correctedTextElement.innerText;

    if (!navigator.clipboard) {
        const range = document.createRange();
        range.selectNode(correctedTextElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
            showCopyFeedback('Copied!');
        } catch (err) {
            console.error('Unable to copy', err);
            showCopyFeedback('Failed to copy');
        }

        window.getSelection().removeAllRanges();
        return;
    }

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            showCopyFeedback('Copied!');
        })
        .catch(err => {
            console.error('Unable to copy', err);
            showCopyFeedback('Failed to copy');
        });
}

function showCopyFeedback(message) {
    const copyIcon = document.querySelector('.copysicon');
    if (copyIcon) {
        copyIcon.title = message;
        setTimeout(() => {
            copyIcon.title = 'Copy';
        }, 2000);
    }
}

// Grammar Correction
function initiateGrammarCheck() {
    const userInput = document.getElementById("input-text").value;
    checkGrammar(userInput, function(correctedText) {
        const resultElement = document.getElementById("result");
        if (resultElement) {
            resultElement.textContent = correctedText;
            resultElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function checkGrammar(text, callback) {
    const apiUrl = "https://api.languagetool.org/v2/check";
    const params = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `text=${encodeURIComponent(text)}&language=en-US`
    };

    fetch(apiUrl, params)
        .then(response => response.json())
        .then(data => {
            const matches = data.matches;
            let correctedText = text;

            matches.forEach(match => {
                const offset = match.offset;
                const length = match.length;
                const replacement = match.replacements.length > 0 ? match.replacements[0].value : text.substr(offset, length);
                correctedText = correctedText.substr(0, offset) + replacement + correctedText.substr(offset + length);
            });

            if (typeof callback === 'function') {
                callback(correctedText);
            } else {
                console.error("Callback is not a function");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getExplanations() {
    const userInput = document.getElementById("input-text").value;
    const apiUrl = "https://api.languagetool.org/v2/check";
    const params = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `text=${encodeURIComponent(userInput)}&language=en-US`,
    };

    fetch(apiUrl, params)
        .then((response) => response.json())
        .then((data) => {
            const matches = data.matches;
            const correctedText = matches.reduce((text, match) => {
                const replacement = match.replacements.length > 0
                    ? match.replacements[0].value
                    : text.substr(match.offset, match.length);
                return (
                    text.substring(0, match.offset) +
                    replacement +
                    text.substring(match.offset + match.length)
                );
            }, userInput);

            const suggestions = matches.map(
                (match) => match.replacements[0]?.value || match.context.text
            );
            const explanations = matches.map((match) => match.message);

            document.getElementById("original-text").textContent = userInput;
            document.getElementById("corrected-text").textContent = correctedText;
            document.getElementById("suggestions").textContent = suggestions.join(", ");
            document.getElementById("explanations").textContent = explanations.join("\n");
        })
        .catch((error) => console.error("Error:", error));
}

// Style Conversion
function convertToConversational(text) {
    return text.replace(/\bI do not\b/gi, "I don't")
               .replace(/\bam not\b/gi, "ain't")
               .replace(/\bcertain\b/gi, "sure")
               .replace(/\bproceed\b/gi, "go ahead")
               .replace(/\bgood\b/gi, "great!")
               .replace(/\bsuccessful\b/gi, "awesome")
               .replace(/\btherefore\b/gi, "so")
               .replace(/\battempt\b/gi, "try")
               .replace(/\bassist\b/gi, "help")
               .replace(/\bthus\b/gi, "so")
               .replace(/\bseen\b/gi, "saw")
               .replace(/\badditional\b/gi, "more")
               .replace(/\bnumerous\b/gi, "a lot of")
               .replace(/\bcommence\b/gi, "start")
               .replace(/\bterminate\b/gi, "end")
               .replace(/\bgoes\b/gi, "heads")
               .replace(/\beveryday\b/gi, "all the time")
               .replace(/\bevery day\b/gi, "all the time")
               .replace(/\bbetter\b/gi, "awesome")
               .replace(/\bgood\b/gi, "fantastic")
               .replace(/\bnice\b/gi, "better")
               .replace(/\bwant to\b/gi, "wanna");
}

function convertToStructural(text) {
    return text.replace(/\bgood\b/gi, "better")
               .replace(/\bbad\b/gi, "unfavorable")
               .replace(/\bshow\b/gi, "illustrate")
               .replace(/\btold\b/gi, "informed")
               .replace(/\buse\b/gi, "apply")
               .replace(/\btry\b/gi, "attempt")
               .replace(/\bstart\b/gi, "begin")
               .replace(/\bfinish\b/gi, "complete")
               .replace(/\bget\b/gi, "acquire")
               .replace(/\bneed to\b/gi, "should")
               .replace(/\bhard to\b/gi, "challenging to")
               .replace(/\bgoes to\b/gi, "attends");
}

function convertToIntellectual(text) {
    return text.replace(/\bgood\b/gi, "favorable")
               .replace(/\bwant\b/gi, "wish")
               .replace(/\bbad\b/gi, "suboptimal")
               .replace(/\bthink\b/gi, "consider")
               .replace(/\bshow\b/gi, "demonstrate")
               .replace(/\bshowing\b/gi, "demonstrating")
               .replace(/\bI\b/gi, "I am eager to")
               .replace(/\bsuccessful\b/gi, "positive outcomes")
               .replace(/\bhelp\b/gi, "assist")
               .replace(/\btry\b/gi, "attempt")
               .replace(/\bstart\b/gi, "commence")
               .replace(/\bneed to\b/gi, "necessitates")
               .replace(/\bdeal with\b/gi, "address")
               .replace(/\beveryday\b/gi, "daily")
               .replace(/\bevery day\b/gi, "daily")
               .replace(/\bgoes to\b/gi, "frequents")
               .replace(/\bsolve\b/gi, "address")
               .replace(/\bproblem\b/gi, "issue")
               .replace(/\bnice\b/gi, "favorable");
}

function convertToProfessional(text) {
    return text.replace(/\bI do not\b/gi, "I refrain from")
               .replace(/\bgood\b/gi, "satisfactory")
               .replace(/\bwanna\b/gi, "want to")
               .replace(/\bdon't\b/gi, "do not")
               .replace(/\bbad\b/gi, "unsatisfactory")
               .replace(/\bsuccessful\b/gi, "effective")
               .replace(/\bfinish\b/gi, "complete")
               .replace(/\bhelp\b/gi, "assist")
               .replace(/\bget\b/gi, "obtain")
               .replace(/\btalk about\b/gi, "discuss")
               .replace(/\bgoes to\b/gi, "attends")
               .replace(/\bgo\b/gi, "attend")
               .replace(/\ba lot of\b/gi, "a significant amount of")
               .replace(/\btry\b/gi, "attempt")
               .replace(/\bnice\b/gi, "great");
}

function correctAndConvertStyle() {
    const userInput = document.getElementById("input-text").value;
    const selectedStyle = document.getElementById("style-select").value;

    checkGrammar(userInput, function(correctedText) {
        let convertedText = correctedText;

        if (selectedStyle === "Conversational") {
            convertedText = convertToConversational(correctedText);
        } else if (selectedStyle === "Structural") {
            convertedText = convertToStructural(correctedText);
        } else if (selectedStyle === "Intellectual") {
            convertedText = convertToIntellectual(correctedText);
        } else if (selectedStyle === "Professional") {
            convertedText = convertToProfessional(correctedText);
        }

        document.getElementById("result").textContent = convertedText;
    });
}

function analyzeSentiment() {
    const userInput = document.getElementById("input-text").value;
    
    if (typeof nlp !== 'function') {
        console.error('Compromise library (nlp) is not loaded.');
        alert('Sentiment analysis requires the Compromise library, which is not loaded.');
        return;
    }

    checkGrammar(userInput, function(correctedText) {
        const doc = nlp(correctedText);

        let sentimentScore = 0;
        const positiveWords = ["good", "friendly", "great", "excellent", "positive", "happy", "joy", "love", "thrilled", "like", "fantastic", "enjoyable", "amazing", "liked", "like", "really good", "better", "awesome", "brilliant", "nice", "ambience", "warm", "exceptional", "polite"];
        const negativeWords = ["bad", "terrible", "awful", "negative", "sad", "anger", "hate", "disappointed", "disappointing", "dislike", "stupid", "yuck", "disgusting", "worst", "poor", "gross", "unusable"];

        doc.sentences().forEach(sentence => {
            positiveWords.forEach(word => {
                if (sentence.has(word)) {
                    sentimentScore += 1;
                }
            });
            negativeWords.forEach(word => {
                if (sentence.has(word)) {
                    sentimentScore -= 1;
                }
            });
        });

        let sentimentText = "Neutral";
        if (sentimentScore > 0) {
            sentimentText = "Positive";
        } else if (sentimentScore < 0) {
            sentimentText = "Negative";
        }

        const resultBox = document.getElementById("result");
        if (resultBox) {
            resultBox.value = `Sentiment: ${sentimentText} (Score: ${sentimentScore})`;
        }
    });
}

// Doc Corrector
function showFileName() {
    const fileInput = document.getElementById("word-upload");
    const fileNameDisplay = document.getElementById("file-name-display");
    const file = fileInput ? fileInput.files[0] : null;

    if (file) {
        fileNameDisplay.textContent = `Uploaded File: ${file.name}`;
    } else if (fileNameDisplay) {
        fileNameDisplay.textContent = "";
    }
}

function processWordFile() {
    const fileInput = document.getElementById("word-upload");
    const file = fileInput ? fileInput.files[0] : null;

    if (!file) {
        alert("Please upload a Word document.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const arrayBuffer = event.target.result;

        mammoth.extractRawText({ arrayBuffer: arrayBuffer })
            .then(function (result) {
                const textContent = result.value;
                console.log("Extracted Content:", textContent);

                correctGrammarWithAPI(textContent, function (correctedText) {
                    console.log("Corrected Content:", correctedText);

                    const correctedBlob = generateWordFile(correctedText);
                    downloadFile(correctedBlob, "Corrected_Document.doc");
                });
            })
            .catch(function (err) {
                console.error("Error reading the Word document:", err);
                alert("An error occurred while processing the file.");
            });
    };

    reader.readAsArrayBuffer(file);
}

function correctGrammarWithAPI(inputText, callback) {
    const apiUrl = "https://api.languagetool.org/v2/check";
    const params = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `text=${encodeURIComponent(inputText)}&language=en-US`,
    };

    fetch(apiUrl, params)
        .then((response) => response.json())
        .then((data) => {
            let correctedText = inputText;
            let offsetShift = 0;

            data.matches.forEach((match) => {
                const replacement = match.replacements[0]?.value || "";
                if (replacement) {
                    const start = match.offset + offsetShift;
                    const end = start + match.length;
                            
                    correctedText = 
                           correctedText.slice(0, start) +
                           replacement +
                           correctedText.slice(end);
                                 
                    offsetShift += replacement.length - match.length;
                }
            });
            
            callback(correctedText);
        })
        .catch((err) => {
            console.error("Error calling grammar correction API:", err);
            alert("Failed to correct grammar.");
        });
}

function generateWordFile(correctedText) {
    const content = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
        <head><title>Corrected Document</title></head>
        <body>
            <p>${correctedText.replace(/\n/g, "<br>")}</p>
        </body>
        </html>
    `;

    const blob = new Blob([content], { type: "application/msword" });
    return blob;
}

function downloadFile(blob, fileName) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}
