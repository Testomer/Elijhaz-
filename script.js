const sendEmailBtn = document.getElementById("send-email-btn");
const questionsContainer = document.getElementById("questions-container");
const showResultBtn = document.getElementById("show-result-btn");
const scoreParagraph = document.getElementById("score");

let score = 0;  // متغير لحساب النقاط

// الأسئلة والخيارات
const questions = [
  {
    question: "ما هو العضو المسؤول عن ضخ الدم في الجسم؟",
    options: ["الرئتين", "القلب", "الكبد", "المعدة"],
    answer: "القلب"
  },
  {
    question: "ما هي الأوعية التي تنقل الدم المحمل بالأوكسجين إلى الجسم؟",
    options: ["الأوردة", "الشرايين", "الشعيرات", "الأوعية اللمفاوية"],
    answer: "الشرايين"
  },
  {
    question: "ماذا يحمل الدم عند عودته إلى القلب من الجسم؟",
    options: ["الأوكسجين", "السكر", "ثاني أكسيد الكربون", "الدهون"],
    answer: "ثاني أكسيد الكربون"
  },
  {
    question: "ما هو الجزء الذي يقسم القلب إلى جزئين؟",
    options: ["الشرايين", "الأذينين والبطينين", "الأوردة", "الجزء الأيسر"],
    answer: "الأذينين والبطينين"
  },
  {
    question: "ما هي وظيفة الدورة الدموية الصغرى؟",
    options: ["نقل الدم الغني بالأوكسجين من القلب إلى الرئتين", "نقل الدم من الجسم إلى القلب", "نقل الأوكسجين إلى الأنسجة", "تحمل الدم المحمل بثاني أكسيد الكربون"],
    answer: "نقل الدم الغني بالأوكسجين من القلب إلى الرئتين"
  },
  {
    question: "ماذا يعني الدورة الدموية الكبرى؟",
    options: ["نقل الدم من القلب إلى الجسم", "نقل الدم إلى الرئتين", "نقل الدم من الجسم إلى القلب", "نقل الغذاء إلى الأنسجة"],
    answer: "نقل الدم من القلب إلى الجسم"
  },
  {
    question: "أي من هذه الأوعية تنقل الدم من القلب إلى الرئتين؟",
    options: ["الشرايين الرئوية", "الأوردة الرئوية", "الشرايين", "الأوردة"],
    answer: "الشرايين الرئوية"
  },
  {
    question: "أين يتم تبادل الغازات بين الدم والخلايا؟",
    options: ["في الأوعية الدموية", "في الرئتين", "في الشعيرات الدموية", "في الأذينين"],
    answer: "في الشعيرات الدموية"
  },
  {
    question: "ما هو دور الأوردة؟",
    options: ["نقل الدم من القلب", "نقل الدم إلى القلب", "تحمل الأوكسجين", "نقل الدم الغني بالمواد الغذائية"],
    answer: "نقل الدم إلى القلب"
  },
  {
    question: "ما هو الدم الذي يحتوي على نسبة عالية من الأوكسجين؟",
    options: ["الدم الوريدي", "الدم الشرياني", "الدم المختلط", "الدم المحمل بالمواد الغذائية"],
    answer: "الدم الشرياني"
  },
  {
    question: "ما هي الوظيفة الرئيسية للشرايين؟",
    options: ["إرجاع الدم إلى القلب", "نقل الدم من القلب إلى الأنسجة", "نقل الدم الغني بالأوكسجين", "مقاومة ضغط الدم"],
    answer: "نقل الدم من القلب إلى الأنسجة"
  },
  {
    question: "ما هو الدم الذي يحتوي على نسبة عالية من ثاني أكسيد الكربون؟",
    options: ["الدم الشرياني", "الدم الوريدي", "الدم الغني بالأوكسجين", "الدم المغذي"],
    answer: "الدم الوريدي"
  },
  {
    question: "كيف يتم تنظيم تدفق الدم في الجسم؟",
    options: ["بواسطة العضلات", "بواسطة القلب", "بواسطة الأوردة", "بواسطة الأوعية الدموية"],
    answer: "بواسطة القلب"
  },
  {
    question: "ما هو المكون الرئيسي في الدم الذي يساعد في نقل الأوكسجين؟",
    options: ["الهيموجلوبين", "البلازما", "الكريات البيضاء", "الصفائح الدموية"],
    answer: "الهيموجلوبين"
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