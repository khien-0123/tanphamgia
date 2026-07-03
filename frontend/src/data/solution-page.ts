/** Type dùng chung cho trang chi tiết giải pháp */

export interface SolutionPlanItem {
  title: string;
  desc: string;
}

export interface FabricTableRow {
  material: string;
  composition: string;
  features: string;
  environment: string;
}

export interface SolutionPageContent {
  solutionId: 1 | 2 | 3 | 4;
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
    imageAlt: string;
    industries: string[];
  };
  sections: {
    issuesTitle: string;
    productsTitle: string;
  };
  issues: string[];
  plans: SolutionPlanItem[];
  products: string[];
  fabricTable: FabricTableRow[];
  processSteps: string[];
}
