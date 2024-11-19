document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('startQuiz').addEventListener('click', function () {
        const quizOverlay = document.getElementById('quizOverlay');
        quizOverlay.style.display = 'flex';
        showPage(1);

        const timeLimit = 5 * 60; // 
        const display = document.getElementById('timer'); 
        startTimer(timeLimit, display);
    });


    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        const interval = setInterval(function () {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(interval);
                showCustomAlert('Time is up! The quiz will now end.');
                document.getElementById('submitQuiz').click(); 
                setTimeout(() => {
                    window.location.href = 'safetytips.html'; 
                }, 2000);
            }
        }, 1000);
    }


    let currentPage = 1;
    const totalPages = 4;

    document.getElementById('nextButton').addEventListener('click', function () {
        if (currentPage < totalPages) {
            showPage(++currentPage);
        }
    });

    document.getElementById('prevButton').addEventListener('click', function () {
        if (currentPage > 1) {
            showPage(--currentPage);
        }
    });

    document.getElementById('submitQuiz').addEventListener('click', function () {
        const form = document.getElementById('quizForm');
        const answers = new FormData(form);
        let score = 0;

     
        const correctAnswers = {
            q1: 'a', q2: 'a', q3: 'b', q4: 'c', q5: 'b',
            q6: 'a', q7: 'b', q8: 'a', q9: 'c', q10: 'a',
            q11: 'b', q12: 'c', q13: 'a', q14: 'b', q15: 'c',
            q16: 'b', q17: 'c', q18: 'a', q19: 'c', q20: 'b'
        };

        for (let [key, value] of answers.entries()) {
            if (correctAnswers[key] === value) score++;
        }

        if (score < 15) {
            showCustomAlert(`You scored ${score}/20. You need at least 15 correct answers to pass.`);
        } else {
            showCustomAlert('Congratulations! You passed the quiz!');
            document.getElementById('quizOverlay').style.display = 'none';
        }
    });

    function showPage(page) {
        currentPage = page;
        const pages = document.querySelectorAll('.quiz-page');
        pages.forEach((p, index) => {
            p.style.display = (index + 1 === page) ? 'block' : 'none';
        });

        document.getElementById('prevButton').style.display = (page > 1) ? 'inline-block' : 'none';
        document.getElementById('nextButton').style.display = (page < totalPages) ? 'inline-block' : 'none';
        document.getElementById('submitQuiz').style.display = (page === totalPages) ? 'inline-block' : 'none';
    }

    function showCustomAlert(message) {
        const alertOverlay = document.getElementById('customAlertOverlay');
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.textContent = message;
        alertOverlay.style.display = 'flex';
    }

    document.getElementById('closeAlertButton').addEventListener('click', function () {
        document.getElementById('customAlertOverlay').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        const overlay = document.getElementById('quizOverlay');
        if (event.target === overlay) {
            showCustomAlert('You cannot close the quiz until it’s completed!');
        }
    });


    const accordionTitles = document.querySelectorAll('.accordion-title');
    accordionTitles.forEach(title => {
        title.addEventListener('click', function () {
            const targetContent = document.getElementById(this.getAttribute('data-target'));
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== targetContent) {
                    content.style.display = 'none';
                }
            });
            targetContent.style.display = targetContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});
