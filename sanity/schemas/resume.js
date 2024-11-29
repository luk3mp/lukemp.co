export default {
  name: "resume",
  type: "document",
  title: "Resume",
  fields: [
    {
      name: "file",
      type: "file",
      title: "Resume File",
      options: {
        accept: ".pdf", // Restrict uploads to PDF files
      },
    },
  ],
};
