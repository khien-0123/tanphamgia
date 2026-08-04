/** Dự án tiêu biểu — Giải pháp 2 (Văn phòng & Tập đoàn) */

import { siteAssets } from './assets';
import type { CaseStudyProject } from '../lib/case-study-types';

export type DuAnGiaiPhap2 = CaseStudyProject;

export const duAnGiaiPhap2: DuAnGiaiPhap2[] = [
  {
    slug: 'coca-cola-philippines',
    name: 'Coca-Cola Philippines',
    stats: '564 áo polo | 60 ngày triển khai | Doanh nghiệp FDI',
    image: siteAssets.cases.cocaColaPortrait,
    gallery: {
      afterChallenges: {
        src: siteAssets.cases.cocaColaGroup,
        caption: 'Chi tiết mặt sau và tay áo — logo chai Coca-Cola cùng chữ CCEAP.',
      },
      afterSolutions: [
        {
          src: siteAssets.cases.cocaColaDetail1,
          caption: 'Thiết kế đồng bộ trên bộ màu đỏ – trắng – xám theo nhận diện thương hiệu.',
        },
        {
          src: siteAssets.cases.cocaColaDetail2,
          caption: 'Chất liệu premium dri-fit — thoáng mát, co giãn, bền màu.',
        },
      ],
    },
    intro:
      'Coca-Cola Philippines là một trong những thị trường trọng điểm của Coca-Cola tại Đông Nam Á. Tân Phạm Gia được lựa chọn sản xuất áo polo đồng phục, đáp ứng màu sắc thương hiệu – form hiện đại – chất lượng đạt chuẩn xuất khẩu.',
    challenges: [
      'Thiết kế & form dáng: áo polo form hiện đại, gọn gàng, phù hợp nhiều vóc dáng và môi trường làm việc năng động.',
      'Màu sắc & nhận diện: màu đỏ Coca-Cola phải đồng nhất giữa các sản phẩm, đúng bộ nhận diện thương hiệu.',
      'Logo & hoàn thiện: logo thêu sắc nét, 4 vị trí, đảm bảo độ bền và thẩm mỹ.',
      'Tiêu chuẩn sản xuất: đáp ứng yêu cầu kỹ thuật cho đơn hàng thị trường quốc tế.',
    ],
    solutions: [
      'Phát triển form dáng & may mẫu: áp dụng rập 3D và may trên mannequin, điều chỉnh form polo hiện đại.',
      'Lựa chọn chất liệu & kiểm soát màu: polo cao cấp, thoáng mát, giữ form; kiểm soát độ ổn định màu giữa các lô.',
      'Thêu logo: kỹ thuật phù hợp, đúng tỷ lệ, kiểm tra vị trí – độ bám – hoàn thiện trên từng sản phẩm.',
      'QC đa tầng: kiểm tra sau may và lần cuối sau thêu logo, trước khi đóng gói và bàn giao.',
    ],
    results: [
      'Áo polo hoàn thiện đạt yêu cầu cao về form dáng, màu sắc và chất lượng đường may.',
      'Logo và chi tiết nhận diện thể hiện rõ ràng, đúng chuẩn Coca-Cola.',
      'Sản phẩm đáp ứng tiêu chuẩn kỹ thuật cho đơn hàng phục vụ thị trường quốc tế.',
    ],
  },
  {
    slug: 'bidv',
    name: 'BIDV',
    stats: '800 sản phẩm | 45 ngày triển khai | Ngân hàng & Tài chính',
    field: 'Ngân hàng',
    image: siteAssets.cases.bidvClient,
    gallery: {
      afterChallenges: {
        src: siteAssets.cases.bidv,
        caption: 'Đồng phục giao dịch — đồng nhất màu sắc và form trên toàn hệ thống.',
      },
      afterSolutions: [
        {
          src: siteAssets.cases.bidvClient,
          caption: 'Chuẩn hóa logo và chi tiết nhận diện theo tiêu chí nghiệm thu.',
        },
        {
          src: siteAssets.cases.bidv,
          caption: 'Thành phẩm bàn giao đúng tiến độ — dễ tái đặt và bổ sung nhân sự.',
        },
      ],
    },
    intro:
      'Chuẩn hóa hình ảnh đội ngũ giao dịch — đồng nhất màu sắc, form dáng và hoàn thiện theo tiêu chí nghiệm thu trên toàn hệ thống.',
    challenges: [
      'Triển khai đồng phục giao dịch quy mô lớn trong thời gian ngắn, đạt tiêu chí nghiệm thu nghiêm ngặt.',
      'Đảm bảo màu sắc và form dáng đồng nhất giữa các chi nhánh và đợt sản xuất.',
      'Kiểm soát hoàn thiện logo và chất lượng đường may ở quy mô hàng trăm sản phẩm.',
    ],
    solutions: [
      'Chuẩn hóa toàn bộ thông số kỹ thuật theo bộ nhận diện thương hiệu BIDV.',
      'Kiểm soát màu sắc từng lô sản xuất trước khi may hàng loạt.',
      'Duyệt mẫu nhiều bước trước khi khóa sản xuất.',
      'Bàn giao đúng tiến độ theo kế hoạch triển khai 45 ngày.',
    ],
    results: [
      '800 sản phẩm hoàn thiện đạt tiêu chí nghiệm thu của ngân hàng.',
      'Hình ảnh đội ngũ giao dịch đồng nhất trên toàn hệ thống.',
      'Rút ngắn thời gian tái đặt và bổ sung nhân sự nhờ hồ sơ kỹ thuật đã chuẩn hóa.',
    ],
  },
  {
    slug: 'vfm',
    name: 'VFM',
    stats: '1.100 sản phẩm | 35 ngày triển khai | Đối tác 3 năm',
    field: 'Quản lý quỹ đầu tư',
    image: siteAssets.cases.vfm,
    intro:
      'Là doanh nghiệp quản lý quỹ đầu tư hàng đầu Việt Nam, VFM cần giải pháp đồng phục văn phòng chuyên nghiệp, phù hợp với môi trường làm việc tài chính và các hoạt động gặp gỡ nhà đầu tư, đối tác.',
    challenges: [
      'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, chỉn chu và đồng nhất với thương hiệu doanh nghiệp.',
      'Đảm bảo sự thoải mái cho nhân sự sử dụng thường xuyên trong môi trường văn phòng.',
      'Duy trì chất lượng ổn định giữa các đợt bổ sung nhân sự.',
    ],
    solutions: [
      'Triển khai 1.100 áo polo cho đội ngũ văn phòng và khối kinh doanh.',
      'Tư vấn chất liệu chống nhăn, giữ form tốt và phù hợp với tần suất sử dụng hàng ngày.',
      'Điều chỉnh form dáng nhằm nâng cao trải nghiệm mặc cho người sử dụng.',
      'Lưu trữ toàn bộ hồ sơ kỹ thuật phục vụ các đợt tái sản xuất trong tương lai.',
    ],
    results: [
      'Xây dựng hình ảnh đội ngũ chuyên nghiệp và đồng bộ.',
      'Nâng cao trải nghiệm sử dụng của nhân viên.',
      'Duy trì chất lượng ổn định qua nhiều đợt triển khai.',
    ],
  },
  {
    slug: 'savisco',
    name: 'SAVISCO',
    stats: '950 sản phẩm | 40 ngày triển khai | Đối tác 2 năm',
    image: siteAssets.cases.saviscoGp2,
    intro:
      'Savisco sở hữu đội ngũ nhân sự đa dạng từ khối văn phòng, kinh doanh đến dịch vụ khách hàng. Doanh nghiệp cần giải pháp đồng phục vừa đảm bảo nhận diện thương hiệu, vừa phù hợp với đặc thù của từng nhóm nhân sự.',
    challenges: [
      'Đồng phục cần phù hợp với nhiều vị trí công việc khác nhau trong cùng doanh nghiệp.',
      'Đảm bảo sự đồng bộ hình ảnh giữa các phòng ban và điểm làm việc.',
      'Duy trì tính nhất quán khi phát sinh nhu cầu bổ sung nhân sự.',
    ],
    solutions: [
      'Triển khai 550 áo sơ mi và 400 áo polo cho các nhóm nhân sự khác nhau.',
      'Tư vấn chất liệu và form dáng phù hợp theo từng vị trí sử dụng.',
      'Chuẩn hóa hệ thống màu sắc, logo và quy cách sản xuất.',
      'Xây dựng hồ sơ kỹ thuật phục vụ tái sản xuất và quản lý đồng phục lâu dài.',
    ],
    results: [
      'Đồng nhất hình ảnh đội ngũ trên toàn hệ thống.',
      'Tối ưu trải nghiệm sử dụng cho từng nhóm nhân sự.',
      'Rút ngắn thời gian triển khai các đơn hàng bổ sung và tái đặt hàng.',
    ],
  },
];
