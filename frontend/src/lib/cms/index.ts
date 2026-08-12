/**
 * Lớp CMS Headless WordPress — entrypoint công khai.
 * Pages chỉ import từ đây.
 */

export { isCmsEnabled, getWordpressGraphqlUrl, getWordpressImageHostname } from './config';
export { cmsModules } from './status';
export { getAllBlogPosts, getBlogPostBySlug } from './get-posts';
export { getAllDocuments, getDocumentById } from './get-documents';
export { getAllSolutions, getSolutionBySlug } from './get-solutions';
export { getAllCaseStudies, getCaseStudyBySlug } from './get-case-studies';
export type { BlogPostDetail, CmsModuleInfo, CmsModuleStatus } from './types';
export type { SolutionCard } from './get-solutions';
