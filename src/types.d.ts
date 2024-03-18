declare module "*.gif";
declare module "*.webp";

declare module "*.svg" {
  const content: any;
  export default content;
}
