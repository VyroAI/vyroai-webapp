export let faqs: Faq[] = [
  {
    question: "What is Vyro?",
    answer:
      "VYROAI is an artificial intelligence tool that helps students extract relevant information from PDF files or websites without having to read through them in their entirety. With VYROAI, students can simply upload a PDF file or input a website link, and the AI will automatically scan the content and extract the most important information.",
  },
  {
    question: "How does it work?",
    answer:
      "VYROAI uses natural language processing and machine learning algorithms to understand the content and identify the most relevant information based on the student's query. This means that students can quickly and easily find the information they need without spending hours poring over long documents or web pages.",
  },

  {
    question: "Why is Vyro such a necessity?",
    answer:
      "VYROAI can be a valuable tool for students who need to complete research projects or assignments, as well as for professionals who need to extract key information from lengthy reports or articles. The tool is easy to use and can save a significant amount of time and effort, allowing you to focus on other important tasks.",
  },
  {
    question: "Is VYROAI free to use, or do I need to pay for a subscription?",
    answer:
      "VYROAI offers a range of pricing plans, including a free plan that allows you to extract a limited amount of information each month. For more advanced features and higher extraction limits, you will need to upgrade to a paid plan. The pricing plans are designed to be affordable and flexible, so you can choose the plan that best fits your needs and budget.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};
