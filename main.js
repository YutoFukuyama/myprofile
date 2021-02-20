const quizText = document.getElementById("quiz-text")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "留学していた国はどこ",
  choices: [
    {
      text: "オーストラリア",
      feedback: "お前は十分に活躍した。正解だ。"
    },
    {
      text: "アメリカ",
      feedback: "ハズレだが、ほぉ・・・悪くない"
    },
    {
      text: "イギリス",
      feedback: "全然なってない、すベてやり直せ"
    }
  ]
}

const reloadQuiz = function(){
  quizText.textContent = "Q. " + quiz.text
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}

reloadQuiz()