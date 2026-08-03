/** Dịch vụ — Sitemap /dich-vu. Năm mảng dịch vụ của Tân Phạm Gia. */

import { siteAssets } from './assets';
import { productionCapacity, teamDepartments } from './gioi-thieu';
import { homeHero, homeProcess } from './home';
import { giaiPhap1Content } from './giai-phap-1';
import { giaiPhap2Content } from './giai-phap-2';
import { giaiPhap3Content } from './giai-phap-3';

/** Một dòng số liệu trong danh sách của khối nội dung */
export interface ServiceStat {
  value: string;
  label: string;
}

/** Một bước trong danh sách của khối nội dung */
export interface ServiceStep {
  title: string;
  desc: string;
}

export type ServiceImageRatio = '1:1' | '5:4' | '3:4';

export interface ServiceImage {
  src: string;
  alt: string;
  /** 5:4 mặc định; 1:1 cho ảnh chi tiết, 3:4 chỉ dành cho ảnh dọc có chủ thể phù hợp. */
  ratio?: ServiceImageRatio;
}

/**
 * Một khối nội dung trang chi tiết — chữ một bên, ảnh một bên, đảo bên xen kẽ.
 * Số thứ tự (01, 02…) do component tự sinh theo vị trí, không ghi trong dữ liệu.
 */
export interface ServiceBlock {
  /** Chữ trong viên vàng, đứng sau số thứ tự */
  eyebrow: string;
  title: string;
  lede: string;
  /** Nhãn nhỏ chữ hoa dẫn vào danh sách bên dưới */
  listLabel?: string;
  /** Danh sách đánh số — mỗi mục một tên bước và một đoạn mô tả */
  steps?: ServiceStep[];
  /** Danh sách số liệu — giá trị bên trái, mô tả bên phải */
  facts?: ServiceStat[];
  chipsLabel?: string;
  chips?: string[];
  /** Một ảnh đại diện cho khối nội dung, dùng một trong ba tỷ lệ 1:1, 5:4 hoặc 3:4. */
  image: ServiceImage;
}

export interface Service {
  slug: string;
  /** Tên đầy đủ — dùng cho trang chi tiết và SEO */
  title: string;
  /** Tên rút gọn cho thẻ khảm; bỏ trống thì dùng luôn `title` */
  cardTitle?: string;
  /** 1–2 dòng ngắn in dưới tên trên thẻ */
  lines: string[];
  /** Material Symbols — mỗi dịch vụ một hình riêng, không lặp */
  icon: string;
  /**
   * Ảnh nền thẻ. Bỏ trống thì thẻ tự chuyển sang nền navy đặc với icon lớn
   * làm hoa văn — In ấn và Thêu vi tính hiện chưa có ảnh chụp công đoạn.
   */
  image?: string;
  /** Đoạn dưới tiêu đề ở hero. Trống thì hero dùng `seo.description`. */
  heroDescription?: string;
  /** Ảnh hero có thể khác ảnh thẻ; bỏ trống thì dùng `image`. */
  heroImage?: string;
  /**
   * Thân trang chi tiết. Dịch vụ nào chưa có nội dung thì để trống — trang chỉ
   * hiện hero và Dịch vụ khác, KHÔNG dựng khung rỗng chờ chữ.
   */
  blocks?: ServiceBlock[];
  seo: { title: string; description: string };
}

const toProcessSteps = (
  items: readonly { title: string; description: string }[],
): ServiceStep[] =>
  items.map((item) => ({ title: item.title, desc: item.description }));

const toFabricSteps = (
  rows: readonly {
    material: string;
    composition: string;
    features: string;
    environment: string;
  }[],
): ServiceStep[] =>
  rows.map((row) => ({
    title: `${row.material} · ${row.composition}`,
    desc: `${row.features}. Phù hợp: ${row.environment}.`,
  }));

/** Dải bằng chứng dùng cùng nguồn số liệu với trang chủ. */
export const serviceProofStats: ServiceStat[] = homeHero.stats.map((stat) => ({ ...stat }));

export const services: Service[] = [
  {
    slug: 'tu-van-thiet-ke',
    title: 'Tư vấn & Thiết kế đồng phục theo bộ nhận diện thương hiệu',
    cardTitle: 'Tư vấn & Thiết kế đồng phục theo bộ nhận diện thương hiệu',
    lines: ['Bộ nhận diện thương hiệu', 'Tư vấn & thiết kế'],
    icon: 'draw',
    image: siteAssets.whyChoose.qc,
    heroImage: siteAssets.whyChoose.thoiTrangHoa,
    heroDescription:
      'Bám đúng bộ nhận diện thương hiệu, phù hợp môi trường làm việc và trải nghiệm người mặc.',
    blocks: [
      {
        eyebrow: 'Khảo sát nhu cầu',
        title: 'Hiểu thương hiệu & nhu cầu sử dụng',
        lede:
          'Tân Phạm Gia tiếp nhận mục đích sử dụng, môi trường làm việc, vai trò nhân sự, số lượng và ngân sách để xây dựng hướng thiết kế phù hợp thay vì áp dụng một mẫu chung cho toàn doanh nghiệp.',
        chipsLabel: 'Phạm vi phân tích',
        chips: [
          'Nhận diện thương hiệu',
          'Môi trường làm việc',
          'Vai trò nhân sự',
          'Tần suất sử dụng',
        ],
        image: {
          src: siteAssets.about.dongHanhTuVanBanGiao,
          alt: 'Tư vấn nhu cầu và định hướng đồng phục cùng doanh nghiệp',
        },
      },
      {
        eyebrow: 'Phát triển ý tưởng',
        title: 'Phát triển concept theo tư duy thời trang ứng dụng',
        lede:
          'Kinh nghiệm từ thiết kế thời trang được chuyển hóa thành giải pháp đồng phục chuyên nghiệp, đồng bộ nhận diện và giúp người mặc tự tin hơn trong công việc.',
        listLabel: 'Nền tảng phát triển mẫu',
        steps: [
          {
            title: teamDepartments[1].title,
            desc: teamDepartments[1].desc,
          },
          {
            title: giaiPhap2Content.plans[2].title,
            desc: giaiPhap2Content.plans[2].desc,
          },
        ],
        image: {
          src: siteAssets.whyChoose.thoiTrangHoa,
          ratio: '1:1',
          alt: 'Thiết kế và phát triển mẫu đồng phục theo nhận diện thương hiệu',
        },
      },
      {
        eyebrow: 'Chất liệu & mẫu thử',
        title: 'Chọn chất liệu, dựng form và may mẫu',
        lede:
          'Chất liệu được đối chiếu với môi trường làm việc và tần suất sử dụng; form dáng được phát triển bằng rập 3D và may mẫu để doanh nghiệp kiểm tra thực tế trước khi sản xuất hàng loạt.',
        listLabel: 'Nhóm chất liệu tham khảo',
        steps: toFabricSteps(giaiPhap2Content.fabricTable),
        image: {
          src: siteAssets.materials.piquePolyester,
          ratio: '1:1',
          alt: 'Bề mặt vải Pique Polyester dùng cho đồng phục',
        },
      },
      {
        eyebrow: 'Duyệt mẫu',
        title: 'Chuẩn hóa kỹ thuật trước khi sản xuất',
        lede:
          'Mẫu duyệt là căn cứ thống nhất về kiểu dáng, màu sắc, chất liệu, logo và thông số kỹ thuật. Hồ sơ được lưu trữ để duy trì sự đồng nhất giữa các đợt tái đặt hàng.',
        listLabel: 'Từ mẫu duyệt đến bàn giao',
        steps: toProcessSteps(homeProcess.items.slice(1)),
        image: {
          src: productionCapacity.qcImage,
          alt: 'Kiểm soát chất lượng mẫu và thành phẩm trước khi bàn giao',
        },
      },
    ],
    seo: {
      title: 'Tư vấn & Thiết kế đồng phục theo bộ nhận diện thương hiệu | Tân Phạm Gia',
      description:
        'Tư vấn và thiết kế đồng phục doanh nghiệp bám đúng bộ nhận diện thương hiệu.',
    },
  },
  {
    slug: 'xuong-may-oem-odm',
    title: 'Xưởng may & Gia công OEM/ODM',
    lines: ['Gia công OEM · ODM'],
    icon: 'precision_manufacturing',
    image: siteAssets.about.heThongSanXuat,
    heroImage: productionCapacity.factoryImage,
    heroDescription:
      'Sản xuất trực tiếp, kiểm soát chất lượng đa tầng và chủ động tiến độ cho đơn hàng B2B.',
    /* Không đưa productionCapacity.intro lên hero: đoạn đó dài hơn 3 dòng nên
       bị line-clamp cắt đuôi, mà nó đã nằm nguyên vẹn ở khối 01 ngay bên dưới. */
    blocks: [
      {
        eyebrow: 'Năng lực xưởng',
        title: 'Sản xuất trực tiếp, không qua trung gian',
        lede: productionCapacity.intro,
        listLabel: 'Xưởng nói được gì',
        /* Cùng nguồn với trang Giới thiệu — sửa một chỗ, hai trang cùng đổi. */
        facts: [...productionCapacity.stats],
        image: {
          src: siteAssets.about.heThongSanXuat,
          alt: 'Hệ thống sản xuất đồng phục tại xưởng Tân Phạm Gia',
        },
      },
      {
        eyebrow: 'Kiểm soát chất lượng',
        title: productionCapacity.qcTitle,
        lede: productionCapacity.qcDesc,
        listLabel: 'Bốn tầng kiểm soát',
        steps: productionCapacity.qcSteps.map((step) => ({
          title: step.title,
          desc: step.description,
        })),
        chipsLabel: 'Tiêu chuẩn & vật tư áp dụng',
        chips: [...productionCapacity.qcStandards],
        image: {
          src: productionCapacity.qcImage,
          alt: 'Quy trình kiểm soát chất lượng đa tầng tại xưởng Tân Phạm Gia',
        },
      },
      {
        eyebrow: 'Cách làm việc',
        title: homeProcess.title,
        lede: homeProcess.description,
        listLabel: 'Bốn bước',
        steps: homeProcess.items.map((item) => ({
          title: item.title,
          desc: item.description,
        })),
        image: {
          src: siteAssets.about.sanPhamDaSanXuat,
          alt: 'Sản phẩm đồng phục đã bàn giao cho doanh nghiệp',
        },
      },
    ],
    seo: {
      title: 'Xưởng may & Gia công OEM/ODM | Tân Phạm Gia',
      description: 'Xưởng may đồng phục và gia công OEM/ODM cho doanh nghiệp.',
    },
  },
  {
    slug: 'fabric-collection',
    title: 'Fabric Collection — Hệ thống chất liệu TPG',
    lines: ['Hệ thống chất liệu TPG'],
    icon: 'layers',
    image: siteAssets.materials.piquePolyester,
    heroDescription:
      'Hệ thống chất liệu được chọn theo môi trường làm việc, trải nghiệm mặc và yêu cầu nhận diện.',
    blocks: [
      {
        eyebrow: 'Tư vấn chất liệu',
        title: 'Chọn đúng chất liệu cho đúng môi trường',
        lede:
          'Tân Phạm Gia khảo sát đặc thù công việc, tần suất sử dụng và nhu cầu vận động để đề xuất chất liệu phù hợp, giúp người mặc thoải mái hơn và tối ưu tuổi thọ đồng phục.',
        chipsLabel: 'Tiêu chí lựa chọn',
        chips: [
          'Môi trường làm việc',
          'Tần suất sử dụng',
          'Khả năng vận động',
          'Yêu cầu nhận diện',
        ],
        image: {
          src: siteAssets.materials.piquePolyester,
          ratio: '1:1',
          alt: 'Mẫu vải Pique Polyester trong hệ thống chất liệu TPG',
        },
      },
      {
        eyebrow: 'Polo & văn phòng',
        title: 'Cân bằng độ bền và trải nghiệm mặc',
        lede:
          'Các dòng Pique được lựa chọn theo nhu cầu thoáng khí, thấm hút, giữ form và thể hiện màu sắc thương hiệu trong môi trường văn phòng, nhà máy hoặc chuỗi cửa hàng.',
        listLabel: 'Dòng chất liệu tiêu biểu',
        steps: toFabricSteps(giaiPhap2Content.fabricTable.slice(0, 2)),
        image: {
          src: siteAssets.materials.piqueTiciCvc,
          ratio: '1:1',
          alt: 'Mẫu vải Pique Tici CVC mềm mại và thấm hút',
        },
      },
      {
        eyebrow: 'Kỹ thuật & ngoài trời',
        title: 'Chất liệu theo điều kiện sử dụng đặc thù',
        lede:
          'Với môi trường kỹ thuật hoặc đội ngũ thường xuyên di chuyển, hệ thống chất liệu ưu tiên độ bền cơ học, khả năng thoát ẩm, mau khô và sự ổn định khi sử dụng thường xuyên.',
        listLabel: 'Dòng chất liệu tiêu biểu',
        steps: [
          ...toFabricSteps(giaiPhap1Content.fabricTable.slice(2)),
          ...toFabricSteps(giaiPhap3Content.fabricTable.slice(0, 1)),
        ],
        image: {
          src: siteAssets.materials.oxfordTechnical,
          ratio: '1:1',
          alt: 'Mẫu vải Oxford kỹ thuật cho môi trường đặc thù',
        },
      },
      {
        eyebrow: 'Tái đặt hàng',
        title: 'Chuẩn hóa chất liệu cho nhiều đợt sản xuất',
        lede:
          'Mã vải, màu sắc, thông số kỹ thuật và hồ sơ sản xuất được lưu trữ theo từng dự án để duy trì sự đồng nhất giữa lô đầu tiên và các đợt bổ sung sau này.',
        image: {
          src: siteAssets.about.sanPhamDaSanXuat,
          alt: 'Kho thành phẩm và hồ sơ phục vụ các đợt tái sản xuất',
        },
      },
    ],
    seo: {
      title: 'Fabric Collection — Hệ thống chất liệu TPG | Tân Phạm Gia',
      description: 'Hệ thống chất liệu vải đồng phục của Tân Phạm Gia.',
    },
  },
  {
    slug: 'in-an',
    title: 'In ấn',
    lines: ['Hoàn thiện logo trên vải'],
    icon: 'print',
    /** Hoạ tiết tram bán sắc tự dựng — chưa có ảnh chụp công đoạn in. */
    image: siteAssets.services.inAn,
    heroDescription: 'Hoàn thiện logo và họa tiết trên đồng phục theo nhận diện đã duyệt.',
    blocks: [
      {
        eyebrow: 'Nhận diện trên vải',
        title: 'Đưa màu sắc và logo thương hiệu lên đồng phục',
        lede:
          'Phương án in được tư vấn cùng kiểu dáng, chất liệu và mục đích sử dụng để phần nhận diện phù hợp với tổng thể sản phẩm đồng phục.',
        chipsLabel: 'Thông tin cần thống nhất',
        chips: ['Vị trí logo', 'Kích thước', 'Màu sắc', 'Chất liệu nền'],
        image: {
          src: siteAssets.services.inAn,
          alt: 'Hoạ tiết tram bán sắc minh hoạ công đoạn in trên vải',
        },
      },
      {
        eyebrow: 'Mẫu duyệt',
        title: 'Kiểm tra phương án trước khi sản xuất hàng loạt',
        lede:
          'Thiết kế và vị trí hoàn thiện logo được đưa vào mẫu để doanh nghiệp kiểm tra thực tế. Sau khi thống nhất, mẫu duyệt trở thành căn cứ triển khai và kiểm soát chất lượng.',
        listLabel: 'Quy trình phối hợp',
        steps: toProcessSteps(homeProcess.items),
        image: {
          src: siteAssets.whyChoose.qc,
          alt: 'Kiểm tra mẫu đồng phục và vị trí hoàn thiện logo',
        },
      },
      {
        eyebrow: 'Kiểm soát đồng bộ',
        title: 'Giữ nhất quán qua nhiều đợt triển khai',
        lede:
          'Thông số màu sắc, logo và quy cách sản xuất được lưu cùng hồ sơ kỹ thuật của dự án, hỗ trợ doanh nghiệp tái đặt hàng mà vẫn duy trì hình ảnh nhận diện thống nhất.',
        image: {
          src: siteAssets.about.sanPhamDaSanXuat,
          alt: 'Thành phẩm đồng phục được chuẩn hóa trước khi bàn giao',
        },
      },
    ],
    seo: {
      title: 'In ấn logo đồng phục | Tân Phạm Gia',
      description: 'Dịch vụ in ấn logo và hoạ tiết trên đồng phục doanh nghiệp.',
    },
  },
  {
    slug: 'theu-vi-tinh',
    title: 'Thêu vi tính',
    lines: ['Hoàn thiện logo trên vải'],
    icon: 'texture',
    /** Hoạ tiết mũi chỉ satin tự dựng — chưa có ảnh chụp công đoạn thêu. */
    image: siteAssets.services.theuViTinh,
    heroDescription: 'Hoàn thiện logo bằng đường chỉ rõ nét, đồng bộ với mẫu nhận diện đã duyệt.',
    blocks: [
      {
        eyebrow: 'Hoàn thiện logo',
        title: 'Chuyển nhận diện thương hiệu thành đường thêu trên vải',
        lede:
          'Logo được đối chiếu về vị trí, kích thước và màu sắc với thiết kế đồng phục để tạo tổng thể nhận diện nhất quán trên sản phẩm.',
        chipsLabel: 'Thông tin cần thống nhất',
        chips: ['Vị trí logo', 'Tỷ lệ thể hiện', 'Màu chỉ', 'Chất liệu nền'],
        image: {
          src: siteAssets.services.theuViTinh,
          alt: 'Hoạ tiết mũi chỉ satin minh hoạ công đoạn thêu vi tính',
        },
      },
      {
        eyebrow: 'Duyệt mẫu',
        title: 'Kiểm tra độ hoàn thiện trên mẫu thực tế',
        lede:
          'Mẫu thực tế giúp doanh nghiệp đánh giá vị trí logo, màu sắc và mức độ phù hợp với chất liệu trước khi xác nhận triển khai số lượng lớn.',
        listLabel: 'Từ yêu cầu đến mẫu duyệt',
        steps: toProcessSteps(homeProcess.items.slice(0, 2)),
        image: {
          src: siteAssets.whyChoose.qc,
          alt: 'Kiểm tra vị trí logo và độ hoàn thiện trên mẫu đồng phục',
        },
      },
      {
        eyebrow: 'QC thành phẩm',
        title: 'Kiểm soát logo trước khi xuất xưởng',
        lede: productionCapacity.qcDesc,
        listLabel: 'Các lớp kiểm soát liên quan',
        steps: productionCapacity.qcSteps.slice(2).map((step) => ({
          title: step.title,
          desc: step.description,
        })),
        image: {
          src: productionCapacity.qcImage,
          alt: 'Kiểm soát chất lượng thành phẩm trước khi xuất xưởng',
        },
      },
    ],
    seo: {
      title: 'Thêu vi tính logo đồng phục | Tân Phạm Gia',
      description: 'Dịch vụ thêu vi tính logo trên đồng phục doanh nghiệp.',
    },
  },
];

export const servicesPage = {
  eyebrow: 'Dịch vụ',
  title: 'Năm mảng dịch vụ của Tân Phạm Gia',
  description:
    'Từ khâu tư vấn thiết kế đến xưởng may, chất liệu và hoàn thiện logo — khép kín trong một đầu mối.',
  seo: {
    title: 'Dịch vụ đồng phục doanh nghiệp | Tân Phạm Gia',
    description:
      'Tư vấn thiết kế, xưởng may OEM/ODM, hệ thống chất liệu, in ấn và thêu vi tính đồng phục doanh nghiệp.',
  },
};

export const getService = (slug: string): Service | undefined =>
  services.find((item) => item.slug === slug);

export const getOtherServices = (slug: string): Service[] =>
  services.filter((item) => item.slug !== slug);
