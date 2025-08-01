

        
        function startTimer() {
            timeLeft = 3600;
            timerContainer.classList.remove('hidden');
            if (timerInterval) clearInterval(timerInterval);

            timerInterval = setInterval(() => {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                
                if (timeLeft <= 10) {
                    timerEl.classList.add('text-red-500');
                }

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleTimeUp();
                }
            }, 1000);
        }

        function handleTimeUp() {
            const modal = document.getElementById('time-up-modal');
            modal.classList.remove('hidden');
            
            const closeModal = () => {
                modal.classList.add('hidden');
                showResults();
            };

            document.getElementById('close-modal-btn').onclick = closeModal;
            setTimeout(closeModal, 4000);
        }

        function showResults() {
            if (timerInterval) clearInterval(timerInterval);
            timerContainer.classList.add('hidden');
            timerEl.classList.remove('text-red-500');

            const categoryData = quizData.find(cat => cat.category === currentCategory);
            const questions = categoryData.questions;
            const form = document.getElementById('quiz-form');

            if (!form) return;

            questions.forEach((q, index) => {
                const selectedOptionInput = form.elements[`question${index}`];
                const selectedOption = selectedOptionInput ? selectedOptionInput.value : undefined;

                const questionCard = document.getElementById(`question-${index}`);
                const labels = questionCard.querySelectorAll('label');
                
                let correctAnswerLabel = null;
                let selectedLabel = null;

                labels.forEach(label => {
                    if(label.textContent === q.answer) correctAnswerLabel = label;
                    if(label.textContent === selectedOption) selectedLabel = label;
                });

                if (selectedOption === q.answer) {
                    score++;
                    if(selectedLabel) selectedLabel.parentElement.classList.add('correct');
                } else {
                    if(selectedLabel) selectedLabel.parentElement.classList.add('incorrect');
                    if(correctAnswerLabel) {
                        correctAnswerLabel.parentElement.classList.add('correct');
                        if (!selectedLabel || selectedLabel.textContent !== q.answer) {
                             const correctAnswerText = document.createElement('p');
                             correctAnswerText.className = 'correct-answer-text mt-2 text-sm';
                             correctAnswerText.textContent = `Correct Answer: ${q.answer}`;
                             if(!correctAnswerLabel.parentElement.querySelector('.correct-answer-text')) {
                                 correctAnswerLabel.parentElement.appendChild(correctAnswerText);
                             }
                        }
                    }
                }
                
                const radioButtons = form.elements[`question${index}`];
                if(radioButtons) {
                    if (radioButtons.length) {
                        radioButtons.forEach(rb => rb.disabled = true);
                    } else if (radioButtons) {
                        radioButtons.disabled = true;
                    }
                }
            });
            
            const submitBtn = form.querySelector('button[type="submit"]');
            if(submitBtn) submitBtn.style.display = 'none';

            quizContainer.classList.add('hidden');
            resultsContainer.classList.remove('hidden');

            const percentage = (score / questions.length) * 100;
            scoreText.textContent = `You scored ${score} out of ${questions.length} (${percentage.toFixed(1)}%)`;

            renderChart(questions.length);
        }

        function renderChart(totalQuestions) {
            const ctx = document.getElementById('resultsChart').getContext('2d');
            if(chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Correct', 'Incorrect'],
                    datasets: [{
                        label: 'Your Score',
                        data: [score, totalQuestions - score],
                        backgroundColor: [
                            'rgba(37, 99, 235, 0.6)',
                            'rgba(239, 68, 68, 0.6)'
                        ],
                        borderColor: [
                            'rgba(37, 99, 235, 1)',
                            'rgba(239, 68, 68, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: `Results for: ${currentCategory}`
                        }
                    }
                }
            });
        }

        restartQuizBtn.onclick = () => {
            if (timerInterval) clearInterval(timerInterval);
            timerContainer.classList.add('hidden');
            timerEl.classList.remove('text-red-500');

            quizContainer.innerHTML = '';
            resultsContainer.classList.add('hidden');
            welcomeMessage.classList.remove('hidden');
            quizContainer.appendChild(welcomeMessage);
            quizContainer.classList.remove('hidden');
            document.querySelectorAll('#category-nav .nav-button').forEach(btn => btn.classList.remove('active'));
        };

        init();