import { z } from "zod";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg"];
const IMAGE_EXTENSION_REGEX = /\.(png|jpe?g)(\?.*)?$/i;

export const blogFormSchema = z
  .object({
    title: z.string().trim().min(1, "Title is required."),
    categoryId: z.string().trim().min(1, "Category is required."),
    content: z.string().trim().min(1, "Content is required."),
    featureImage: z.union([
      z.object({
        type: z.literal("url"),
        url: z
          .string()
          .trim()
          .min(1, "Image URL is required.")
          .refine((value) => IMAGE_EXTENSION_REGEX.test(value), {
            message: "Image URL must end with .png, .jpg, or .jpeg.",
          }),
      }),
      z.object({
        type: z.literal("file"),
        file: z
          .instanceof(File)
          .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
            message: "Only PNG, JPG, or JPEG files are allowed.",
          })
          .refine((file) => file.size <= MAX_IMAGE_BYTES, {
            message: "Image must be 5 MB or smaller.",
          }),
      }),
      z.object({
        type: z.literal("none"),
      }),
    ]),
  })
  .superRefine((value, ctx) => {
    if (value.featureImage.type === "none") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["featureImage"],
        message: "Feature image is required.",
      });
    }
  });

export type BlogFormValues = z.infer<typeof blogFormSchema>;

export type BlogFormErrors = Partial<
  Record<"title" | "categoryId" | "content" | "featureImage", string>
>;

export const getBlogFormErrors = (error: z.ZodError): BlogFormErrors => {
  const errors: BlogFormErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (!key) continue;
    if (key === "title") errors.title = issue.message;
    if (key === "categoryId") errors.categoryId = issue.message;
    if (key === "content") errors.content = issue.message;
    if (key === "featureImage") errors.featureImage = issue.message;
  }
  return errors;
};

export const IMAGE_HELPER_TEXT = "PNG, JPG, or JPEG only. Max 5 MB.";
