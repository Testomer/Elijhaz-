const sendEmailBtn = document.getElementById("send-email-btn");
const questionsContainer = document.getElementById("questions-container");
const showResultBtn = document.getElementById("show-result-btn");
const scoreParagraph = document.getElementById("score");

let score = 0;  // متغير لحساب النقاط

// الأسئلة والخيارات
const questions = [
  {
    question: "ما هو العضو الرئيسي في الجهاز الدوراني؟",
    options: ["الرئتين", "القلب", "الكبد", "المعدة"],
    answer: "القلب"
  },
  {
    question: "ما هو الدم الذي يضخّه القلب إلى الجسم؟",
    options: ["الدم المؤكسد", "الدم غير المؤكسد", "الدم المختلط", "الدم الوريدي"],
    answer: "الدم المؤكسد"
  },
  {
    question: "ما هي الأوعية التي تحمل الدم من القلب إلى الأنسجة؟",
    options: ["الأوردة", "الشرايين", "الشعيرات الدموية", "الأوعية اللمفاوية"],
    answer: "الشرايين"
  },
  {
    question: "ما هو الدم الذي يعود إلى القلب عبر الأوردة؟",
    options: ["الدم المؤكسد", "الدم غير المؤكسد", "الدم المختلط", "الدم الشرياني"],
    answer: "الدم غير المؤكسد"
  },
  {
    question: "ما هو اسم الوعاء الدموي الذي ينقل الدم المؤكسد من الرئتين إلى القلب؟",
    options: ["الشريان الأورطي", "الوريد الرئوي", "الشريان الرئوي", "الوريد السفلي"],
    answer: "الوريد الرئوي"
  },
  {
    question: "ما هو الشريان الرئيسي الذي يخرج من القلب ويوزع الدم إلى الجسم؟",
    options: ["الشريان الرئوي", "الشريان السباتي", "الشريان الأورطي", "الشريان الفخذي"],
    answer: "الشريان الأورطي"
  },
  {
    question: "أي من الأوعية الدموية يحتوي على الدم الغني بالأوكسجين؟",
    options: ["الأوردة", "الشرايين", "الشعيرات الدموية", "اللمف"],
    answer: "الشرايين"
  },
  {
    question: "ما هي وظيفة الشعيرات الدموية؟",
    options: ["نقل الدم من القلب إلى الأنسجة", "تبادل الأوكسجين والمواد الغذائية مع الخلايا", "جمع الدم العائد من الأنسجة", "توفير الطاقة للقلب"],
    answer: "تبادل الأوكسجين والمواد الغذائية مع الخلايا"
  },
  {
    question: "ما هي المادة التي تحمل الأوكسجين في الدم؟",
    options: ["البلازما", "الصفائح الدموية", "الهيموغلوبين", "الخلايا البيضاء"],
    answer: "الهيموغلوبين"
  },
  {
    question: "ما هي نوعية الدم الذي يخرج من القلب إلى الرئتين؟",
    options: ["دم غني بالأوكسجين", "دم فقير بالأوكسجين", "دم مختلط", "دم نظيف"],
    answer: "دم فقير بالأوكسجين"
  },
  {
    question: "ما هي وظيفة الأوردة في الجهاز الدوراني؟",
    options: ["نقل الدم المؤكسد إلى القلب", "نقل الدم غير المؤكسد إلى القلب", "نقل المواد الغذائية إلى الخلايا", "حمل الأوكسجين من الرئتين"],
    answer: "نقل الدم غير المؤكسد إلى القلب"
  },
  {
    question: "ما هو اسم الجزء الذي يفصل بين الأذينين في القلب؟",
    options: ["الصمام التاجي", "الحاجز الأذيني", "الصمام الرئوي", "الحاجز البطيني"],
    answer: "الحاجز الأذيني"
  },
  {
    question: "ما هو الدور الذي تلعبه الصفائح الدموية؟",
    options: ["نقل الأوكسجين", "محاربة العدوى", "منع نزيف الدم", "نقل المواد الغذائية"],
    answer: "منع نزيف الدم"
  },
  {
    question: "ما هو الحجم الكلي للدم في جسم الإنسان البالغ؟",
    options: ["3-4 لترات", "4-6 لترات", "6-8 لترات", "8-10 لترات"],
    answer: "4-6 لترات"
  },
  {
    question: "ما هي وظيفة البلازما في الدم؟",
    options: ["حمل الأوكسجين", "نقل المواد الغذائية والفضلات", "محاربة الجراثيم", "تجلط الدم"],
    answer: "نقل المواد الغذائية والفضلات"
  }
];

// إضافة الأسئلة إلى الموقع
function loadQuestions() {
  questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const questionTitle = document.createElement("h4");
    questionTitle.classList.add("question-title");
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionElement.appendChild(questionTitle);

    const optionsList = document.createElement("ul");
    q.options.forEach(option => {
      const listItem = document.createElement("li");
      listItem.textContent = option;
      listItem.addEventListener("click", function () {
        // إذا كان الإجابة صحيحة
        if (listItem.textContent === q.answer) {
          score++; // إضافة نقطة
        }
        // تعطيل الاختيارات بعد الإجابة
        Array.from(optionsList.children).forEach(item => item.style.pointerEvents = 'none');
        listItem.style.backgroundColor = listItem.textContent === q.answer ? 'green' : 'red'; // تغيير اللون
      });

      optionsList.appendChild(listItem);
    });

    questionElement.appendChild(optionsList);
    questionsContainer.appendChild(questionElement);
  });
}

// إظهار النتيجة عند الضغط على زر "اضغط هنا لمعرفة نتيجتك"
showResultBtn.addEventListener("click", function () {
  scoreParagraph.textContent = `لقد حصلت على ${score} من ${questions.length} نقطة.`;
  scoreParagraph.style.display = "block"; // عرض النتيجة
});

// تحميل الأسئلة عند تحميل الصفحة
window.onload = loadQuestions;
