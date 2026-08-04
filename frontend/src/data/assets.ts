/** Media path tập trung — path tương đối trong public/, không hardcode domain */

export const siteAssets = {
  brand: {
    logo: '/images/brand/tan-pham-gia-logo.png',
    mark: '/images/brand/TPG-11.webp',
    ministryCert: '/images/brand/logo-bo-cong-thuong.webp',
  },
  hero: {
    video: '/videos/header-dong-phuc.mp4',
    fallback: '/images/hero/fallback.jpg',
    gioiThieu: '/images/about/banner1.jpg',
    giaiPhap: '/images/hero/giai-phap.jpg',
    khachHang: '/images/hero/khach-hang.jpg',
    tinTuc: '/images/hero/tin-tuc.webp',
    taiLieu: '/images/hero/tai-lieu.webp',
    lienHe: '/images/hero/lien-he.webp',
  },
  cta: {
    background: '/images/cta/background.webp',
  },
  documents: {
    catalogYTe: '/images/documents/catalog-y-te.webp',
    catalogTheThao: '/images/documents/catalog-the-thao.webp',
    catalogTeaser: '/images/documents/catalog-teaser.webp',
  },
  certificates: {
    iso9001: '/images/certificates/iso-9001.webp',
    hangVietNam: '/images/certificates/hang-viet-nam.webp',
    giayKhen: '/images/certificates/giay-khen.webp',
    unido: '/images/certificates/unido.webp',
    bangKhen3: '/images/certificates/bang-khen-3.webp',
    cupGiaiThuong: '/images/certificates/cup-giai-thuong.webp',
  },
  solutions: {
    giaiPhap1: '/images/solutions/giai-phap-1.webp',
    giaiPhap2: '/images/solutions/giai-phap-2.webp',
    giaiPhap3: '/images/solutions/giai-phap-3.webp',
    giaiPhap4: '/images/solutions/giai-phap-4.webp',
  },
  materials: {
    piquePolyester: '/images/materials/pique-polyester.webp',
    piqueTiciCvc: '/images/materials/pique-tici-cvc.webp',
    oxfordTechnical: '/images/materials/oxford-technical.webp',
    kakiStretch: '/images/materials/kaki-stretch.webp',
  },
  /** Ảnh dịch vụ — nguồn dongphucvn.vn/dich-vu/ */
  services: {
    polo: '/images/services/polo.webp',
    tshirt: '/images/services/tshirt.webp',
    soMi: '/images/services/so-mi.webp',
    quanTay: '/images/services/quan-tay.webp',
    chanVay: '/images/services/chan-vay.webp',
    oemLocal: '/images/services/oem-local.webp',
    oemGlobal: '/images/services/oem-global.webp',
    oemFashion: '/images/services/oem-fashion.webp',
    oemPrivate: '/images/services/oem-private.webp',
    processBulk: '/images/services/process-bulk.webp',
    processSpec: '/images/services/process-spec.webp',
    processDelivery: '/images/services/process-delivery.webp',
  },
  blog: {
    chonVaiPolo: '/images/blog/chon-vai-polo-khi-hau-viet-nam.jpg',
    dongPhucToiGian: '/images/blog/dong-phuc-toi-gian-branding-2024.jpg',
    sanXuat10000: '/images/blog/san-xuat-10000-ao-thun-7-ngay.jpg',
    medicalUniform: '/images/blog/medical-uniform-2025.webp',
  },
  cases: {
    bidv: '/images/cases/bidv.jpg',
    bidvClient: '/images/cases/bidv-client.jpg',
    vfm: '/images/logos/VFM (1).png',
    /** Listing / thẻ — bộ 3 màu trên giá */
    cocaCola: '/images/cases/coca-cola-portrait.jpg',
    cocaColaGroup: '/images/cases/coca-cola-group.jpg',
    cocaColaPortrait: '/images/cases/coca-cola-portrait.jpg',
    cocaColaDetail1: '/images/cases/coca-cola-detail-1.jpg',
    cocaColaDetail2: '/images/cases/coca-cola-detail-2.jpg',
    saviscoGp2: '/images/cases/savisco-gp2.webp',
    bvRangHamMat: '/images/cases/bv-rang-ham-mat-sai-gon.jpg',
    bvRhmDetail1: '/images/cases/bv-rhm-detail-1.jpg',
    bvRhmDetail2: '/images/cases/bv-rhm-detail-2.jpg',
    bvRhmDetail3: '/images/cases/bv-rhm-detail-3.jpg',
    kingGroup: '/images/cases/king-group.jpg',
    datGroup: '/images/cases/dat-group.webp',
    zeroWaste: '/images/cases/zero-waste.webp',
    vivant: '/images/cases/vivant.webp',
    saviscoGp3: '/images/cases/savisco-gp3.webp',
    discovery: '/images/cases/discovery.jpg',
    engadine: '/images/cases/engadine-clinic.webp',
    betrimex: '/images/cases/betrimex.webp',
  },
  about: {
    brandStory: '/images/why-choose/nang-luc-san-xuat.png',
    /** Chân dung Nhà sáng lập — nguồn dongphucvn.vn/ve-tan-pham-gia/ */
    leadership: '/images/about/lanh-dao.webp',
    production1: '/images/about/production-1.jpg',
    production2: '/images/about/qc-5-tang.png',
    heThongSanXuat: '/images/about/he-thong-san-xuat.png',
    sanPhamMoiThang: '/images/about/san-pham-moi-thang.png',
    dongHanhTuVanBanGiao: '/images/about/dong-hanh-tu-van-ban-giao.png',
    sanPhamDaSanXuat: '/images/about/san-pham-da-san-xuat.png',
  },
  whyChoose: {
    kinhNghiem: '/images/why-choose/kinh-nghiem.png',
    thoiTrangHoa: '/images/why-choose/thoi-trang-hoa.jpg',
    nangLucSanXuat: '/images/why-choose/nang-luc-san-xuat.png',
    /** Ảnh thẻ QC — nhà thiết kế thời trang */
    qc: '/images/why-choose/qc.webp',
  },
  /** Avatar tạm cho testimonial — thay bằng ảnh thật khi có */
  testimonials: {
    avatar1: '/images/testimonials/avatar-1.jpg',
    avatar2: '/images/testimonials/avatar-2.jpg',
    avatar3: '/images/testimonials/avatar-3.jpg',
    avatar4: '/images/testimonials/avatar-4.jpg',
    avatar5: '/images/testimonials/avatar-5.jpg',
    avatar6: '/images/testimonials/avatar-6.jpg',
  },
} as const;

/** Bìa catalogue trang chủ */
export const homeCatalogCovers = [
  {
    src: siteAssets.documents.catalogYTe,
    alt: 'Catalogue đồng phục y tế Tân Phạm Gia',
    class: 'left-[4%] top-[10%] w-[58%] -rotate-6 shadow-[0_18px_40px_-20px_rgba(16,44,77,0.45)]',
  },
  {
    src: siteAssets.documents.catalogTheThao,
    alt: 'Catalogue đồng phục thể thao Tân Phạm Gia',
    class: 'left-[22%] top-[6%] w-[58%] rotate-2 shadow-[0_22px_48px_-18px_rgba(16,44,77,0.5)]',
  },
  {
    src: siteAssets.documents.catalogTeaser,
    alt: 'Catalogue polo doanh nghiệp Tân Phạm Gia',
    class: 'left-[38%] top-[2%] w-[58%] rotate-[9deg] shadow-[0_28px_56px_-16px_rgba(16,44,77,0.55)] z-10',
  },
] as const;
